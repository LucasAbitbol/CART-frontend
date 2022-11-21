import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './AnciennesData.css';
import logo from '../../logo.png';
import Navbar from '../Navbar/Navbar';

function AnciennesData() {

    const url="https://fhir.alliance4u.io/api/diagnostic-report?subject.reference=patientGroupeMarisolLucas"
    const [diagnostics, setDiagnostics] = useState([]);

    useEffect(() => {
        const asyncFn = async () => {
            try {
                let result = await fetch(url);
                result = await result.json();
                setDiagnostics(result);
                console.log(result);
            } catch {
                console.log("Error")
            }
        };
        asyncFn();
    }, []);


    function myFunction() {
        document.getElementById("notif2").style.display = "block";
        document.getElementById("notif").style.display = "none";
    }
    function myFunction2() {
        document.getElementById("notif").style.display = "block";
        document.getElementById("notif2").style.display = "none";
    }

    function deleteDiagnostic(event, id) {
        event.preventDefault();
        Axios.delete("https://fhir.alliance4u.io/api/diagnostic-report/" + id)
            .then(res=>{
                console.log("Diagnostic supprimé")
                window.location.replace(`http://localhost:3000/historique`)
            })
    }

    return (
        <div className="historique">
            <Navbar />
            <a href="./anciennesData"><img id="logo" src={logo} alt="logo"/></a>
            <h1>Données déjà enregistrées dans la base de données</h1>
            <table id="historique">
                <tr id="titre">
                    <th>Médecin</th>
                    <th>Conclusion</th>
                    <th>Suppression</th>
                </tr>

                {diagnostics.map((item, index) => (
                        <tr className="rowHistorique">
                            <td>{item.resultsInterpreter[0].display}</td>
                            <td>{item.conclusion}</td>
                            <td>
                                <button id="buttonDeleteObservation" onClick={(event) => {
                                    deleteDiagnostic(event, item.id)}}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    )
                )}
            </table>
        </div>
    );
}

export default AnciennesData;