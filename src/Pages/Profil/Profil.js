import "./Profil.css";
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import logo from "../../logo.png";

function ProfilPage() {

    const url = "https://fhir.alliance4u.io/api/patient/patientGroupeMarisolLucas";
    const url2 = "https://fhir.alliance4u.io/api/practitioner/";

    const [prenom, setPrenom] = useState([]);
    const [nom, setNom] = useState([]);
    const [dateDeNaissance, setDateDeNaissance] = useState([]);
    const [genre, setGenre] = useState([]);
    const [medecinId, setMedecinId] = useState([]);
    const [medecinName, setMedecinName] = useState([]);

    const asyncFn = async () => {
        try {
            let result = await fetch(url);
            result = await result.json();
            setPrenom(result.name[0].given[0])
            setNom(result.name[0].family)
            setDateDeNaissance(result.birthDate)
            setGenre(result.gender)
            setMedecinId(result.generalPractitioner[0].reference)
            try {
                let result2 = await fetch(url2 + medecinId);
                result2 = await result2.json();
                setMedecinName(result2.name[0].family)
                console.log(result2);
            } catch(error){
                console.log("Error trying to get the doc" + error)
            }
        } catch {
            console.log("Error")
        }
    };



    useEffect(() => {
        asyncFn();
    }, []);


    const deleteMyProfile = (e) => {
        e.preventDefault();
        console.log("Trying to delete")
        Axios.delete(url)
            .then((res) => {
                    console.log("User deleted");
                    window.location.replace("http://localhost:3000");
                }
            )
    }

    return (
        <div className="profil">
            <a href="../profil"><img id="logo" src={logo} alt="logo"/></a>
            <ul id="navbar">
                <li id="active">
                    <a href="#">Mon Profil</a>
                </li>
                <li>
                    <a href="./dashboard">Envoyer ma demande de diagnostic</a>
                </li>
                <li>
                    <a href="./historique">Diagnostics</a>
                </li>
                <li>
                    <a href="./donneesVitales">Évolutions</a>
                </li>
            </ul>

            <h1>Mon profil patient</h1>
            <div className="zoneProfil">
                <div className="infoPerso">
                    <div className="champProfil first">
                        <p><i>Prénom</i></p>
                        <p>{prenom}</p>
                    </div>
                    <div className="champProfil first">
                        <p><i>Nom</i></p>
                        <p>{nom}</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Date de naissance</i></p>
                        <p>{dateDeNaissance}</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Genre</i></p>
                        <p>{genre}</p>
                    </div>
                    <div className="champProfil">
                        <p><i>E-mail</i></p>
                        <p>bastien.dubois@gmail.com</p>
                    </div>
                    <div className="champProfil">
                        <p><i>Médecin référent</i></p>
                        <p>Alda Mayer</p>
                    </div>
                    <div style={{marginRight:'50px', width: '100%'}}>
                        <div className="boutons">
                            <button id="buttonDelete" onClick={(e)=> deleteMyProfile(e)}>Supprimer mon profil</button>
                            <button id="deconnexion" onClick={() => window.location.replace("http://localhost:3000/")}>Déconnexion</button>
                        </div>
                    </div>
                </div>
                <div className="diagnostic">
                    <button onClick={() => window.location.replace("http://localhost:3000/diagnostic")}>Accéder au diagnostic</button>
                </div>
            </div>
        </div>
    );
}

export default ProfilPage;
