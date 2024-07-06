import React from "react";


export default function Dysplay(props){
    return(
        <div id="display-wrapper">
            <div className="price-wrapper">
                <div className="amount">
                    <h3>Tip Amount</h3>
                    <p style={{color: "#7F9D9F"}}>/ person</p>
                </div>
                <div className="price">
                    <p className="price-display">{props.tipPerPerson.toFixed(2)}</p>
                </div>
            </div>
            <div className="price-wrapper">
                <div className="amount">
                    <h3>Total</h3>
                    <p style={{color: "#7F9D9F"}}>/ person</p>
                </div>
                <div className="price">
                    <p className="price-display">{props.billPerPerson.toFixed(2)}</p>
                </div>
            </div>

        <button id="btn" onClick={() => {
            props.setBill(0)
            props.setTip(0)
            props.setPeople(1)
        }}>RESET</button>
        </div>
    )
}