import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Form.css';
import logo from '../../logo.png'

function PostForm() {

    const url="https://fhir.alliance4u.io/api/observation"

    var headers = { "Content-Type": "application/json" };

    const [data, setData] = useState({
        poids:"",
        taille:"",
        tension:"",
        temperature:"",
        glycemie:"",
        filtration:"",
        densite:"",
        pouls:""
    })

    //Function to send the entered data to the server via the API
    function submit(e){
        e.preventDefault();
        if (data.glycemie !== "") {
            if (data.glycemie > 20) {
                ReactDOM.render(
                    <p>Cette valeur de glycémie n'est pas valable</p>,
                    document.getElementById("WrongGlycemie"))
            }
            else {
                Axios.post(url, {
                    resourceType: "Observation",
                    status: "final",
                    code: {
                        coding: [
                            {
                                code : "4548-4",
                                display: "Hémoglobine glyquée"
                            }
                        ]
                    },
                    subject: {
                        reference: "patientGroupeMarisolLucas",
                        display: "Bastien Dubois"
                    },
                    issued: "2022-06-16T10:21:08-07:00",
                    performer: [
                        {
                            reference: "f-201",
                            display: "Alda Mayer"
                        }
                    ],
                    effectiveDateTime: "2022-06-16T10:21:08-07:00",
                    valueQuantity: {
                        value: Number(data.glycemie),
                        unit: "%",
                        system: "http://unitsofmeasure.org",
                        code: "%"
                    }
                }, {
                    headers: headers
                })
                    .then(res => {
                        if (res.data) {
                            console.log("Success")
                            window.location.replace('http://localhost:3000/dashboard')
                        } else {
                            console.log("Error")
                        }
                    })
            }
        }
        if (data.poids !== "") {
            Axios.post(url,{
                resourceType: "Observation",
                status: "final",
                code: {
                    coding: [
                        {
                            display: "Poids"
                        }
                    ]
                },
                subject: {
                    reference: "patientGroupeMarisolLucas",
                    display: "Bastien Dubois"
                },
                issued: "2022-06-16T10:21:08-07:00",
                performer: [
                    {
                        reference: "f-201",
                        display: "Alda Mayer"
                    }
                ],
                effectiveDateTime : "2022-06-16T10:21:08-07:00",
                valueQuantity: {
                    value: Number(data.poids),
                    unit: "kg",
                    system: "http://unitsofmeasure.org",
                    code: "kg"
                }
            }, {
                headers: headers
            })
                .then(res=>{
                    if (res.data) {
                        console.log("Success")
                        window.location.replace('http://localhost:3000/dashboard')
                    }
                    else {
                        console.log("Error")
                    }
                })
        }
        if (data.taille !== "") {
            Axios.post(url,{
                resourceType: "Observation",
                status: "final",
                code: {
                    coding: [
                        {
                            display: "Taille"
                        }
                    ]
                },
                subject: {
                    reference: "patientGroupeMarisolLucas",
                    display: "Bastien Dubois"
                },
                issued: "2022-06-16T10:21:08-07:00",
                performer: [
                    {
                        reference: "f-201",
                        display: "Alda Mayer"
                    }
                ],
                effectiveDateTime : "2022-06-16T10:21:08-07:00",
                valueQuantity: {
                    value: Number(data.taille),
                    unit: "cm",
                    system: "http://unitsofmeasure.org",
                    code: "cm"
                }
            }, {
                headers: headers
            })
                .then(res=>{
                    if (res.data) {
                        console.log("Success")
                        window.location.replace('http://localhost:3000/dashboard')
                    }
                    else {
                        console.log("Error")
                    }
                })
        }
        if (data.filtration !== "") {
            Axios.post(url,{
                resourceType: "Observation",
                status: "final",
                code: {
                    coding: [
                        {
                            display: "Taux de filtration glomérulaire"
                        }
                    ]
                },
                subject: {
                    reference: "patientGroupeMarisolLucas",
                    display: "Bastien Dubois"
                },
                issued: "2022-06-16T10:21:08-07:00",
                performer: [
                    {
                        reference: "f-201",
                        display: "Alda Mayer"
                    }
                ],
                effectiveDateTime : "2022-06-16T10:21:08-07:00",
                valueQuantity: {
                    value: Number(data.filtration),
                    unit: "ml/min/1,73m2",
                    system: "http://unitsofmeasure.org",
                    code: "ml/min/1,73m2"
                }
            }, {
                headers: headers
            })
                .then(res=>{
                    if (res.data) {
                        console.log("Success")
                        window.location.replace('http://localhost:3000/dashboard')
                    }
                    else {
                        console.log("Error")
                    }
                })
        }
        if (data.tension !== "") {
            Axios.post(url,{
                resourceType: "Observation",
                status: "final",
                code: {
                    coding: [
                        {
                            display: "Tension artérielle"
                        }
                    ]
                },
                subject: {
                    reference: "patientGroupeMarisolLucas",
                    display: "Bastien Dubois"
                },
                issued: "2022-06-16T10:21:08-07:00",
                performer: [
                    {
                        reference: "f-201",
                        display: "Alda Mayer"
                    }
                ],
                effectiveDateTime : "2022-06-16T10:21:08-07:00",
                valueQuantity: {
                    value: Number(data.tension),
                    unit: "mmHg",
                    system: "http://unitsofmeasure.org",
                    code: "mmHg"
                }
            }, {
                headers: headers
            })
                .then(res=>{
                    if (res.data) {
                        console.log("Success")
                        window.location.replace('http://localhost:3000/dashboard')
                    }
                    else {
                        console.log("Error")
                    }
                })
        }
        if (data.densite !== "") {
            Axios.post(url,{
                resourceType: "Observation",
                status: "final",
                code: {
                    coding: [
                        {
                            display: "Densité osseuse"
                        }
                    ]
                },
                subject: {
                    reference: "patientGroupeMarisolLucas",
                    display: "Bastien Dubois"
                },
                issued: "2022-06-16T10:21:08-07:00",
                performer: [
                    {
                        reference: "f-201",
                        display: "Alda Mayer"
                    }
                ],
                effectiveDateTime : "2022-06-16T10:21:08-07:00",
                valueQuantity: {
                    value: Number(data.densite),
                    unit: "g/cm2",
                    system: "http://unitsofmeasure.org",
                    code: "g/cm2"
                }
            }, {
                headers: headers
            })
                .then(res=>{
                    if (res.data) {
                        console.log("Success")
                        window.location.replace('http://localhost:3000/dashboard')
                    }
                    else {
                        console.log("Error")
                    }
                })
        }
        if (data.temperature !== "") {
            Axios.post(url,{
                resourceType: "Observation",
                status: "final",
                code: {
                    coding: [
                        {
                            display: "Température"
                        }
                    ]
                },
                subject: {
                    reference: "patientGroupeMarisolLucas",
                    display: "Bastien Dubois"
                },
                issued: "2022-06-16T10:21:08-07:00",
                performer: [
                    {
                        reference: "f-201",
                        display: "Alda Mayer"
                    }
                ],
                effectiveDateTime : "2022-06-16T10:21:08-07:00",
                valueQuantity: {
                    value: Number(data.temperature),
                    unit: "Degré Celsius",
                    system: "http://unitsofmeasure.org",
                    code: "Degré Celsius"
                }
            }, {
                headers: headers
            })
                .then(res=>{
                    if (res.data) {
                        console.log("Success")
                        window.location.replace('http://localhost:3000/dashboard')
                    }
                    else {
                        console.log("Error")
                    }
                })
        }
        if (data.pouls !== "") {
            Axios.post(url,{
                resourceType: "Observation",
                status: "final",
                code: {
                    coding: [
                        {
                            display: "Oximétrie de pouls"
                        }
                    ]
                },
                subject: {
                    reference: "patientGroupeMarisolLucas",
                    display: "Bastien Dubois"
                },
                issued: "2022-06-16T10:21:08-07:00",
                performer: [
                    {
                        reference: "f-201",
                        display: "Alda Mayer"
                    }
                ],
                effectiveDateTime : "2022-06-16T10:21:08-07:00",
                valueQuantity: {
                    value: Number(data.pouls),
                    unit: "bpm",
                    system: "http://unitsofmeasure.org",
                    code: "bpm"
                }
            }, {
                headers: headers
            })
                .then(res=>{
                    if (res.data) {
                        console.log("Success")
                        window.location.replace('http://localhost:3000/dashboard')
                    }
                    else {
                        console.log("Error")
                    }
                })
        }
    }

    //Function to store the user's input in value
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function myFunction() {
        document.getElementById("notif2").style.display = "block";
        document.getElementById("notif").style.display = "none";
    }
    function myFunction2() {
        document.getElementById("notif").style.display = "block";
        document.getElementById("notif2").style.display = "none";
    }

    return (
        <div className="formPatient">
            <img id="logo" src={logo} alt="logo"/>
            <a href="../profil"><img id="logo" src={logo} alt="logo"/></a>
            <ul>
                <li >
                    <a href="./profil">Mon Profil</a>
                </li>
                <li id="active">
                    <a href="#">Envoyer ma demande de diagnostic</a>
                </li>
                <li>
                    <a href="./historique">Diagnostics</a>
                </li>
                <li>
                    <a href="./donneesVitales">Évolutions</a>
                </li>
            </ul>
            <h1>Renseignez les informations</h1>
            <form>
                <input onChange={(e)=>handle(e)} value={data.poids} type="text" id="poids" placeholder="Poids (kg)"/>
                <input onChange={(e)=>handle(e)} value={data.taille} type="text" id="taille" placeholder="Taille (cm)"/>
                <input onChange={(e)=>handle(e)} value={data.tension} type="text" id="tension" placeholder="Tension artérielle"/>
                <input onChange={(e)=>handle(e)} value={data.temperature} type="text" id="temperature" placeholder="Température"/>
            </form>

            <form>

                <input onChange={(e)=>handle(e)} value={data.glycemie} type="number" id="glycemie" placeholder="Hémoglobine glyquée"/>
                <input onChange={(e)=>handle(e)} value={data.filtration} type="text" id="filtration" placeholder="Taux de filtration glomérulaire"/>
                <input onChange={(e)=>handle(e)} value={data.densite} type="text" id="densite" placeholder="Densité osseuse"/>
                <input onChange={(e)=>handle(e)} value={data.pouls} type="text" id="pouls" placeholder="Oximétrie de pouls"/>
                <div id="WrongGlycemie"></div>
            </form>
            <div id="success"></div>
            <div id="error"></div>
            <div id="buttonContainer"><button onClick={(e) => submit(e)}>Valider</button></div>
        </div>
    )
}

export default PostForm;