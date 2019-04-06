import React from "react";

export default class DatePicker extends React.Component {
    render() {
        return (
            <div className="datePicker">
                <input type="text" className="input inputDate" placeholder="dd/mm/yyyy"/>
            </div>
        )
    }
}