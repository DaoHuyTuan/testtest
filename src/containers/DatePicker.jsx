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
        let numDates = this.props.calendar.numDays;
        let arrayDates = [];
        let firstDay;
        let startDays;
        firstDay = this.props.calendar.firstDate - 1;
        if(firstDay < 0) {
            firstDay = 6;
        }
        if(firstDay == 0) {
            startDays = 1;
            console.log(numDates)
            for(let i = 1;i <= numDates;i++) {
                arrayDates.push(i);
            }
        } else {
            startDays = 0;
            for(startDays;startDays < firstDay; startDays++) {
                arrayDates.push(0);
                console.log(arrayDates)
            }
            for(let i = 1;i <= numDates;i++) {
                arrayDates.push(i);
            }
        }
        console.log(firstDay)
        if(this.props.calendar.isOpenMonth == true) {
            monthBox =  (
                <div className="divMonth" onClick={(e) => this.props.onGetMonth(e)}>
                    <span className="itemSelect" >January</span>
                    <span className="itemSelect" >February</span>
                    <span className="itemSelect" >March</span>
                    <span className="itemSelect" >April</span>
                    <span className="itemSelect" >May</span>
                    <span className="itemSelect" >June</span>
                    <span className="itemSelect" >July</span>
                    <span className="itemSelect" >August</span>
                    <span className="itemSelect" >September</span>
                    <span className="itemSelect" >October</span>
                    <span className="itemSelect" >November</span>
                    <span className="itemSelect" >December</span>
                </div>
            )
        } else {
            monthBox = null
        }
        if(this.props.calendar.isOpenYear == true) {
            yearBox = (
                <div className="divYear" onClick={(e) => this.props.onGetYear(e)}>
                    <span className="itemSelect">1995</span>
                    <span className="itemSelect">1996</span>
                    <span className="itemSelect">1997</span>
                    <span className="itemSelect">1998</span>
                    <span className="itemSelect">1999</span>
                    <span className="itemSelect">2000</span>
                    <span className="itemSelect">2001</span>
                    <span className="itemSelect">2002</span>
                    <span className="itemSelect">2003</span>
                    <span className="itemSelect">2019</span>
                </div>
            ) 
        } else {
            yearBox = null
        }
        return (
            <div className="datePicker">
               <div className="datePicker-head">
                    <span className="select-divMonth" onClick={this.props.onChoseMonth}>{this.props.calendar.monthName}</span>
                        {monthBox}
                    <span className="select-divYear" onClick={this.props.onChoseYear}>{this.props.calendar.year}</span>
                        {yearBox}
               </div>
               <div className="datePicker-content">
                    <div className="titleDay">
                        <div className="titleDay__day">Mon</div>
                        <div className="titleDay__day">Tue</div>
                        <div className="titleDay__day">Wes</div>
                        <div className="titleDay__day">Thr</div>
                        <div className="titleDay__day">Fri</div>
                        <div className="titleDay__day">Sat</div>
                        <div className="titleDay__day">Sun</div>
                    </div>
                    <div className="nameWeekDate">
                        {arrayDates.map((item,index) => {
                            if(item == 0) {
                                return <div key={index}></div>;
                            } else {
                                return <div className="dateItem" key={index} onClick={() => this.props.onPickDate(item,this.props.calendar.month,this.props.calendar.year)}>{item}</div>
                            }
                        })}
                    </div>
                    
               </div>
               <div className="groupButton">
                    <button className="btn-cancel-CD" onClick={this.props.onCloseCalendar} >Close</button>
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
        onGetMonth: (e) => dispatch(calendarAction.getMonth(e.target)),
        onGetYear: (e) => dispatch(calendarAction.getYear(e.target.innerHTML)),
        onPickDate: (date,month,year) => dispatch(calendarAction.pickDate(date,month,year))
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(DatePicker)