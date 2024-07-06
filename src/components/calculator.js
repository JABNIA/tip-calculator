import React, { useState } from "react";


const tipAmounts = [5, 10, 15, 25, 50]


function Tip({number, tip, currTip}) {
return <div className="tip" 
    onClick={() => {
        tip(number)
    }} style={{backgroundColor: currTip === number && "var(--maincolor3)" ,
        color: currTip === number && "var(--maincolor2)"}}>{number}%</div>
}




export default function Calculator(props) {
    return (
        <div id="calculator">

        <form action="">
            
            <div className="form-box">
            
                <label htmlFor="bill">Bill</label>
             
                <input type="number" name="bill" value={props.bill} onChange={(event) => {
                    props.setBill(event.target.value)
                }}/>  
             
                <img src="./icon-dollar.svg" alt="bill" className="icon" />  
            
            </div>
            
            <div id="tip-box">
            
                <div className="text-wrapper">
            
                    <p>Select Tip %</p>
            
                </div>
            
                <div id="tips-wrapper">
                {tipAmounts.map((number) => {
                  return  <Tip number={number} tip={props.setTip} currTip={props.tip}/>
                } )}
            
                <div className="tip for-custom">
                    
                    <input type="number" className="custom" name="custom-tip" placeholder="Custom" onClick={()=>{
                        props.setTip(0)
                    }} onChange={(event) => {
                        props.setTip(event.target.value)
                    }}
                    />
                 </div>
            
                </div>
            
            </div>
            
            <div className="form-box">
            
                <div className="label-div">
            
                <label htmlFor="people">Number of people</label>
            
                <p style={{visibility: props.people === "0" ? "visible" : "hidden"}}>Can't be zero</p>
            
            </div>
        
                <input type="number" name="people" onChange={(event) => {
                    props.setPeople(event.target.value)
                }} style={{outline: props.people === "0" && "2px solid #E17052"}} value={props.people}/>    
        
                <img src="./icon-person.svg" alt="bill" className="icon" />  
        
            </div>
        
        </form>            
        
        </div>
    )

}