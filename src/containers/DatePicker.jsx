import React from "react";
import { connect } from "react-redux";
import * as calendarAction from "../redux/action/calendarAction.js";
class DatePicker extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let monthBox;
        let yearBox;
        if(this.props.calendar.isOpenMonth == true) {
            monthBox =  (
                <div className="divMonth">
                    <span className="itemSelect" >Jan</span>
                    <span className="itemSelect" >Feb</span>
                    <span className="itemSelect" >Mar</span>
                    <span className="itemSelect" >Apr</span>
                    <span className="itemSelect" >May</span>
                    <span className="itemSelect" >June</span>
                    <span className="itemSelect" >July</span>
                    <span className="itemSelect" >Aug</span>
                    <span className="itemSelect" >Sep</span>
                    <span className="itemSelect" >Oct</span>
                    <span className="itemSelect" >Nov</span>
                    <span className="itemSelect" >Dec</span>
                </div>
            )
        } else {
            monthBox = null
        }
        if(this.props.calendar.isOpenYear == true) {
            yearBox = (
                <div className="divYear">
                    <span className="itemSelect">1995</span>
                    <span className="itemSelect">1996</span>
                    <span className="itemSelect">1997</span>
                    <span className="itemSelect">1998</span>
                    <span className="itemSelect">1999</span>
                    <span className="itemSelect">2000</span>
                    <span className="itemSelect">2001</span>
                    <span className="itemSelect">2002</span>
                    <span className="itemSelect">2003</span>
                </div>
            ) 
        } 
        return (
            <div className="datePicker">
               <i className="fas fa-times" onClick={this.props.onCloseCalendar}></i>
               <div className="datePicker-head">
                    <span className="select-divMonth" onClick={this.props.onChoseMonth}>{this.props.calendar.month}</span>
                        {monthBox}
                    <span className="select-divYear" onClick={this.props.onChoseYear}>{this.props.calendar.year}</span>
                        {yearBox}
               </div>
               <div className="datePicker-content">
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        calendar:state.calendarRD
    }
}
const mapDispatchToProp = dispatch => {
    return {
        onCloseCalendar: () => dispatch(calendarAction.closeCalendar()),
        onChoseMonth: () => dispatch(calendarAction.choseMonth()),
        onChoseYear: () => dispatch(calendarAction.choseYear()),
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(DatePicker)