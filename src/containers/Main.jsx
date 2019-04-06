import React from "react";
import DatePicker from "../containers/DatePicker";
import InputPhone from "./InputPhone";
import Input from "../components/Input";
export default class Main extends React.Component {
    render() {
        return (
            <div className="container main">
                
                <div className="row">
                    <span className="headline" >NAME</span>
                    <input className="input inputName" type="text" placeholder="Your Name"/> 
                </div>
                <div className="row">
                    <span className="headline">PHONE NUMBER</span>
                    <div className="inputPhone">
                        <span className="inputPhone--Num">+84</span>
                        <input className="input inputPhone" type="text" placeholder="Your Phone Number"/> 
                    </div>
                </div>
                <div className="row">
                    <span className="headline">DAY OF BIRTH</span>
                    <DatePicker />
                </div>
                <div className="row">
                    <span className="headline">CMND</span>
                    <input className="input inputCMND" type="text" placeholder="CMND"/> 
                </div>
                <div className="row">
                    <span className="headline">Description</span>
                    <textarea rows="4" cols="100" className="textArea" placeholder="Type Something"></textarea>
                </div>
                <div className="row">
                    <div className="inputFile">
                        <label for="#file" className="headline">Images </label>
                        <input type="file" className="input--file" id="file" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="btnGroup">
                        <button className="btn btnSend">SEND</button>
                        <button className="btn btnReset">RESET</button>
                    </div>
                </div>
            </div>
        )
    }
}