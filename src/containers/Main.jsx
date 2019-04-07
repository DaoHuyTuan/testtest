import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../redux/action/inforAction";
import * as validateCreator from "../redux/action/validateAction";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.refName = React.createRef();
    this.refPhone = React.createRef();
    this.refDes = React.createRef();
    this.refDob = React.createRef();
    this.refFile = React.createRef();
    this.refFakeFile = React.createRef();
    this.clearForm = this.clearForm.bind(this);
    this.openFileInput = this.openFileInput.bind(this);
    this.url = "https://testbadman.herokuapp.com/";
  }
  openFileInput = () => {
    this.refFile.current.click();
  };
  clearForm = () => {
    this.refName.current.value = "";
    this.refPhone.current.value = "";
    this.refDes.current.value = "";
    this.refDob.current.value = "";
    this.refFile.current.value = "";
  };
  render() {
    return (
      <div className="container main">
        <div className="row rootMain">
         <div className="col-lg-5 float-left">
            <div className="row">
              <span className="headline">NAME</span>
              <input
                ref={this.refName}
                className="input inputName"
                type="text"
                placeholder="Your Name"
                onChange={this.props.onChangeName}
                required
              />
            </div>
            <div className="row">
              <span className="headline">PHONE NUMBER</span>
              <div className="inputPhone">
                <input
                  ref={this.refPhone}
                  className="input inputPhone"
                  required
                  type="text"
                  maxLength="12"
                  placeholder="Your Phone Number"
                  onChange={e =>
                    this.props.onChangePhone(
                      e,
                      this.props.phone.lengths,
                      this.props.phone.matchVN,
                      this.props.phone.mustNum
                    )
                  }
                />
              </div>
            </div>
            <div className="row">
              <span className="headline">DAY OF BIRTH</span>
              <input
                ref={this.refDob}
                type="text"
                className="input inputDate"
                required
                placeholder="dd/mm/yyyy"
                onChange={this.props.onChangeDob}
              />
            </div>
            <div className="row">
              <span className="headline">Description</span>
              <textarea
                ref={this.refDes}
                rows="4"
                cols="100"
                required
                className="textArea"
                maxLength="100"
                minLength="10"
                placeholder="Type Something"
                onChange={this.props.onChangeDes}
              />
            </div>
            <div className="row">
              <div className="inputFile">
                <label htmlFor="#file" className="headline">
                  Images{" "}
                </label>
                <input
                  ref={this.refFile}
                  type="file"
                  className="input--file"
                  id="file"
                  onChange={this.props.onChangeFile}
                />
                <div
                  ref={this.refFakeFile}
                  className="boxAddImage"
                  onClick={this.openFileInput}
                />
              </div>
            </div>
            <div className="row">
              <div className="btnGroup">
                <button
                  className="btn btnSend"
                  onClick={() =>
                    this.props.onSendData(
                      this.props.inforItems.name,
                      this.props.inforItems.phone,
                      this.props.inforItems.dob,
                      this.props.inforItems.des,
                      this.props.inforItems.image
                    )
                  }
                >
                  SEND
                </button>
                <button className="btn btnReset" onClick={this.clearForm}>
                  RESET
                </button>
                <button
                  className="btn btnViewAll"
                  onClick={this.props.onViewAllData}
                >
                  VIEW ALL SUBMIT
                </button>
              </div>
            </div>
          </div>
         <div className="col-lg-7 float-left">
         hello
         </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    phone: state.valiRD.phone,
    inforItems: state.valiRD.inforItem
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSendData: (name, phone, dob, des, file) =>
      dispatch(actionCreator.sendData(name, phone, dob, des, file)),
    onViewAllData: () => dispatch(actionCreator.viewAllData()),
    onChangeName: e => dispatch(validateCreator.changeName(e.target.value)),
    onChangePhone: (e, lengths, matchVN, mustNum) =>
      dispatch(
        validateCreator.changePhone(e.target.value, lengths, matchVN, mustNum)
      ),
    onChangeDes: e => dispatch(validateCreator.changeDes(e.target.value)),
    onChangeFile: e => dispatch(validateCreator.changeFile(e.target.files[0])),
    onChangeDob: e => dispatch(validateCreator.changeDob(e.target.value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
