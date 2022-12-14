import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './NouvellesData.css';
import logo from '../../logo.png';
import Navbar from '../Navbar/Navbar';

function NouvellesData() {

    const url="https://juno.orcatech.org/apis/orcatech/v0.9/items/"
    const [data, setData] = useState([]);

    useEffect(() => {
        const asyncFn = async () => {
            try {
                let result = await fetch(url, {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'Authorization': 'bearer lysVGgotgyMbyZVLac99PwbHpntOVL9FA3K3P1jFD+a19VfIDp8i2Q==',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                result = await result.json();
                setData(result);
                console.log(result);
            } catch {
                console.log("Error")
            }
        };
        asyncFn();
    }, []);

    return (
        <div className="historique">
            <Navbar />
            <a href="./anciennesData"><img id="logo" src={logo} alt="logo"/></a>
            <div id="topside">
                <h1 id="texteTopside">Nouvelles données à enregistrer</h1>
                <button id="ajout">Enregistrer les données</button>
            </div>
            <table id="historique">
                <tr id="titre">
                    <th>Pièce</th>
                    <th>Capteur</th>
                    <th>Date</th>
                </tr>

                {data.map((item, index) => (
                        <tr className="rowHistorique">
                            <td>{item.room[0].display}</td>
                            <td>{item.sensor}</td>
                            <td>{item.date}</td>
                        </tr>
                    )
                )}
            </table>
        </div>
    );
}

export default NouvellesData;