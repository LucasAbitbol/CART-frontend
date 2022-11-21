import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './Diagnostic.css';
import logo from '../../logo.png'

function Diagnostic() {

    const url="https://fhir.alliance4u.io/api/diagnostic-report?subject.reference=patientGroupeMarisolLucas"
    const [count, setCount] = useState(0);
    const [maladie, setMaladie] = useState([]);

    useEffect(() => {
        const asyncFn = async () => {
            try {
                let result = await fetch(url);
                result = await result.json();
                setMaladie(result[result.length-1].conclusion);
                console.log(result);
            } catch {
                console.log("Error")
            }
        };
        asyncFn();
    }, []);

    let isDisplayed = 1;
    function change(){
        let hiddenGroup = document.getElementById("groupe" + isDisplayed);
        let shownGroup = document.getElementById("groupe" + (isDisplayed + 1));
        hiddenGroup.style.opacity = "0";
        setTimeout(() => {hiddenGroup.style.display = "none";}, 500);
        shownGroup.style.display = "flex";
        setTimeout(() => {shownGroup.style.opacity = "1";}, 500);
        isDisplayed += 1;
    }

    function pasDrole(){
        let g1 = document.getElementById("groupe1");
        let g2 = document.getElementById("groupe2");
        let g3 = document.getElementById("groupe3");
        let g4 = document.getElementById("groupe4");
        g1.style.opacity = "0";
        g2.style.opacity = "0";
        g3.style.opacity = "0";
        setTimeout(() => {g1.style.display = "none";}, 500);
        setTimeout(() => {g2.style.display = "none";}, 500);
        setTimeout(() => {g3.style.display = "none";}, 500);
        g4.style.display = "flex";
        setTimeout(() => {g4.style.opacity = "1";}, 500);
    }

    return (
        <div className="diagnostic">
            <div className="fautes">
                <h2 >{count}</h2>
                <h2>Compteur de fautes</h2>
            </div>
            <div className="pasDrole">
                <div><button className="buttonDiagnostic" onClick={pasDrole}>Je ne suis pas drôle <br /> je veux mes résultats</button></div>
            </div>
            <a href="/profil"><img src={logo} id="logo" alt="logo"/></a>
            <h1>Jouons à un jeu !</h1>

            <div id="groupe1" className="group">
                <h2>Comment-vous sentez-vous ?</h2>
                <div><button className="buttonDiagnostic" onClick={() => setCount(count + 1)}>Bien</button></div>
                <div><button onClick={change} className="buttonDiagnostic">Malade</button></div>
                <div><button className="buttonDiagnostic" onClick={() => setCount(count + 1)}>Je sens bon</button></div>
            </div>
            <div id="groupe2" className="group">
                <h2>Votre espérance de vie a t-elle diminué ?</h2>
                <div><button onClick={change} className="buttonDiagnostic">Oui</button></div>
                <div><button className="buttonDiagnostic" onClick={() => setCount(count + 1)}>Non</button></div>
                <div><button className="buttonDiagnostic" onClick={() => setCount(count + 1)}>Non</button></div>
            </div>
            <div id="groupe3" className="group">
                <h2>Quelle pathologie pensez-vous avoir ?</h2>
                <div><button className="buttonDiagnostic" onClick={() => setCount(count + 1)}>Cancer du lobe d'oreille</button></div>
                <div><button onClick={change} className="buttonDiagnostic">{maladie}</button></div>
                <div><button className="buttonDiagnostic" onClick={() => setCount(count + 1)}>Calvitie de la moustache</button></div>
            </div>
            <div id="groupe4" className="group">
                <h1>Vous êtes effectivement atteint de {maladie}</h1>
                <h2>Votre score est de {count} fautes ! C'est pas mal du tout</h2>
            </div>
        </div>
    );
}

export default Diagnostic;