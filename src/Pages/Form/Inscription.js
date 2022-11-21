import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Form.css';
import logo from '../../logo.png'

function RegistrationForm() {

    const url="https://fhir.alliance4u.io/api/patient"
    const url2="https://fhir.alliance4u.io/api/practitioner"

    const [practitionerNames, setPractitionerNames] = useState([]);
    const [selected, setSelected] = useState("f-201");
    const [myPractitionerName, setMyPractitionerName] = useState([]);

    const [data, setData] = useState({
        nom: "",
        prenom: "",
        genre: "male",
        dateDeNaissance: "",
        email: ""
    })

    var headers = { "Content-Type": "application/json" };

    var myName = [
        {
            use: "official",
            family: data.nom,
            given: [data.prenom]
        }
    ];

    var myPractitioner = [
        {
            reference: "f-201"
        }
    ]

    var myEmail = [
        {
            system: "email",
            use: "home",
            value: data.email
        }
    ]

    var body = {
        resourceType: "Patient",
        id: "patientGroupeMarisolLucas",
        name: myName,
        gender: data.genre,
        birthDate: data.dateDeNaissance,
        generalPractitioner: myPractitioner,
        telecom: myEmail
    }

    //Function to send the entered data to the server via the API
    function submit(e){
        e.preventDefault();
        console.log("Trying to post");
        Axios.post(url, body, {
            headers: headers
        })
            .then(res=>{
                console.log(res.data);
                console.log("Patient créé");
                window.location.replace(`http://localhost:3000`)
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    //Function to store the user's input in value
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    useEffect(() => {
        const asyncFn = async () => {
            try {
                let result = await fetch(url2);
                result = await result.json();
                setPractitionerNames(result);
                console.log(practitionerNames);
            } catch {
                console.log("Error")
            }
        };
        asyncFn();
    }, []);


    const handleChange = (event) => {
       setSelected(event.target.value);
    }

    return (
        <div className="registrationForm">
            <a href="../profil"><img id="logo" src={logo} alt="logo"/></a>
            <h1>Renseignez vos informations</h1>
            <form onSubmit={(e)=> submit(e)}>
                <div className="troisInput">
                    <div className="formInput">
                        <label htmlFor="nom">Nom</label>
                        <input onChange={(e)=>handle(e)} type="text" id="nom" required/>
                    </div>
                    <div className="formInput">
                        <label htmlFor="prenom">Prénom</label>
                        <input onChange={(e)=>handle(e)} type="text" id="prenom" required/>
                    </div>
                    <div className="formInput">
                        <label htmlFor="dateDeNaissance">Date de naissance</label>
                        <input onChange={(e)=>handle(e)} type="date" id="dateDeNaissance" required/>
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="genre">Sexe</label>
                    <select onChange={(e)=>handle(e)} type="text" id="genre" required>
                        <option disabled selected>Sélectionnez votre sexe</option>
                        <option value="female">Femme</option>
                        <option value="male">Homme</option>
                    </select>
                </div>
                <div className="formInput">
                    <label htmlFor="genre">Médecin référent</label>
                    <select id="dropdown" onChange={handleChange}>
                        <option disabled selected>Sélectionnez votre médecin</option>
                    {practitionerNames.map((name) => (
                        <option label={name.name[0].family} value={name.id}></option>
                        ))
                    }
                    </select>
                </div>
                <div className="formInput">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input onChange={(e)=>handle(e)} type="email" id="email" required/>
                </div>
                <div className="formInput">
                    <label htmlFor="motDePasse">Mot de passe</label>
                    <input type="password" id="motDePasse" required/>
                </div>
                <div id="buttonContainer"><button>Inscription</button></div>
            </form>
        </div>
    );
}

export default RegistrationForm;