import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../redux/action/inforAction"
import DatePicker from "../containers/DatePicker";
import InputPhone from "./InputPhone";
import Input from "../components/Input";
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
        this.refName = React.createRef();
        this.refPhone = React.createRef();
        this.refDes = React.createRef();
        this.refDob = React.createRef();
        this.refFile = React.createRef();
        this.clearForm = this.clearForm.bind(this);
        this.url = "https://testbadman.herokuapp.com/";
        this.state = {
            datas: {
                name:"",
                phone:"",
                cmnd:"",
                des:"",
                dob:"",
                image:""
            }
        }
    }
    clearForm = () => {
        
        this.refName.current.value = "";
        this.refPhone.current.value = "";
        this.refDes.current.value = "";
        // this.refDob.value = "";
        this.refFile.current.value = "";
    }
    componentDidMount() {
  
    }
    sendData =  () => {
        console.log(this.state)
        fetch("https://testbadman.herokuapp.com/send", {
            method:"POST",
            mode:"cors",
            credentials: 'omit',
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.datas.name,
                phone: this.state.datas.phone,
                cmnd:this.state.datas.cmnd,
                des:this.state.datas.des,
                dob:this.state.datas.dob,
                image:this.state.datas.image
            })
        })
        // .then((res) => res.json())
        .then((result) => console.log(result))
        
    }
    onChangeName = (e) => {
        let data = this.state.datas;
        data.name = e.target.value;
        this.setState({
            datas: data
        })
    }
    onChangePhone = (e) => {
        let data = this.state.datas;
        data.phone = e.target.value;
        this.setState({
            datas:data
        })
    }

    onChangeDes = (e) => {
        let data = this.state.datas;
        data.des = e.target.value;
        this.setState({
            datas:data
        })
    }
    onChangeFile = (e) => {
        let data = this.state.datas;
        if(e.target.files[0].size >= 2000000) {
            console.log("can upload more than 2MB")
        }else {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                data.image = e.target.result;
                this.setState({
                    datas:data
                })
            }
        }
    }
    render() {
        return (
            <div className="container main">
                <div className="row">
                    <span className="headline" >NAME</span>
                    <input ref = {this.refName} className="input inputName" type="text" placeholder="Your Name" onChange={this.props.onChangeName}/> 
                </div>
                <div className="row">
                    <span className="headline">PHONE NUMBER</span>
                    <div className="inputPhone">
                        <span className="inputPhone--Num">+84</span>
                        <input ref = {this.refPhone} className="input inputPhone" type="text" placeholder="Your Phone Number" onChange={this.props.onChangePhone}/> 
                    </div>
                </div>
                <div className="row">
                    <span className="headline">DAY OF BIRTH</span>
                    <DatePicker />
                </div>

                <div className="row">
                    <span className="headline">Description</span>
                    <textarea ref = {this.refDes} rows="4" cols="100" className="textArea" placeholder="Type Something" onChange={this.props.onChangeDes}></textarea>
                </div>
                <div className="row">
                    <div className="inputFile">
                        <label for="#file" className="headline">Images </label>
                        <input ref = {this.refFile} type="file" className="input--file" id="file" onChange={this.onChangeFile}/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="btnGroup">
                        <button className="btn btnSend" onClick={this.sendData}>SEND</button>
                        <button className="btn btnReset" onClick={this.clearForm}>RESET</button>
                        <button className="btn btnViewAll" onClick={this.props.onViewAllData}>VIEW ALL SUBMIT</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        infor:state.infor,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChangeName: (e) => dispatch(actionCreator.changeName(e.target.value)),
        onChangePhone: (e) => dispatch(actionCreator.changePhone(e.target.value)),
        onChangeDes: (e) => dispatch(actionCreator.changeDes(e.target.value)),
        onViewAllData: () => dispatch(actionCreator.viewAllData()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);