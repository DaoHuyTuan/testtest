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
    this.changeCheck = this.changeCheck.bind(this);
    this.onChangeFile1 = this.onChangeFile1.bind(this);
    this.state = {
      txtPreviewImage: "Preview Image",
      checkContent: "",
      imagePreview:"",
      check1: {
        isPass:false,
        state1:false,
        state2:false,
        state3:false,
      }
    };
  }
  static getDerivedStateFromProps(nextProps,prevState) {
    // console.log(prevProp.isPass)
    // if(prevProp.isPass != this.props.isPass) {
    //   console.log("if")
    //   let check1s = this.state.check1;
    //   check1s.state1 = this.props.isPass.phoneState.state1;
    //   check1s.state2 = this.props.isPass.phoneState.state2;
    //   check1s.state3 = this.props.isPass.phoneState.state3;
    //     this.setState({
    //       check1:check1s
    //     })
    //     console.log(this.state.check1)
    //   }
     console.log(nextProps)
     return null
  }
  onChangeFile1 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      this.setState({
        imagePreview:reader.result
      })
    }

    this.props.onChangeFile(e);
  }
  changeCheck = e => {
    let kinds = e.target.getAttribute("kind-input");
    this.setState({
      checkContent: kinds
    });
  };
  openFileInput = (e) => {
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
    let txtPreview = this.state.txtPreviewImage;
    let previewImage
    let checkItem;
    if(this.state.imagePreview == "") {
      previewImage = <span className="previewImageTXT">{txtPreview}</span>;
    } else {
      previewImage = <img className="imagePreview"src={this.state.imagePreview} alt=""/> ;
    }
    if (this.state.checkContent == "name") {
      checkItem = (
        <div className="checkList">
          <div className="checkList-headline">
            <span className="checkList-headline__title">Name</span>
            <span className="checkList-headline__content">
              The name you use to tell us who get problem, and we will support
              as fast as we can. To help us you should follow these instruction
              below:
            </span>
          </div>
          <div className="checkList-content">
            <div className="checkItem">
              <i className="fas fa-check-circle" />
              <span>
                Must a character not have any number or special character
              </span>
            </div>
            <div className="checkItem">
              <i className="fas fa-check-circle" />
              <span>Not have any number</span>
            </div>
            <div className="checkItem">
              <i className="fas fa-check-circle" />
              <span>Not have any special character</span>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.checkContent == "phone") {
      checkItem = (
        <div className="checkList">
          <div className="checkList-headline">
            <span className="checkList-headline__title">Phone</span>
            <span className="checkList-headline__content">
              The Phone help us easy to contact with you, we have a support
              systems 24/24, and we want make sure your problem must be solve.
              Just call and let we help
            </span>
          </div>
          <div className="checkList-content">
            <div className="checkItem">
              <i className="fas fa-check-circle" />
              <span>Must contain only number</span>
            </div>
            <div className="checkItem">
              <i className="fas fa-check-circle" />
              <span>Not have any Special character except "+"</span>
            </div>
            <div className="checkItem">
              <i className="fas fa-check-circle" />
              <span>Must have +84 at begin</span>
            </div>
          </div>
        </div>
      );
    }
    if(this.state.checkContent == "image") {
      checkItem = (
        <div className="checkList">
          <div className="checkList-content">
            <div className="previewImage" >{previewImage}</div>
          </div>
        </div>
      )
    }
   
    return (
      <div className="container main">
        <div className="rootMain">
          <div className="col col-lg-5 pd-40">
            <div className="row">
              <span className="headline">NAME</span>
              <input
                kind-input="name"
                onFocus={this.changeCheck}
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
                  kind-input="phone"
                  onFocus={this.changeCheck}
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
                kind-input="dob"
                onFocus={this.changeCheck}
                ref={this.refDob}
                type="text"
                className="input inputDate"
                required
                placeholder="dd/mm/yyyy"
                onChange={this.props.onChangeDob}
              />
            </div>
            <div className="row">
              <span className="headline">DESCRIPTION</span>
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
                  IMAGES
                </label>
                <input
                  kind-input="image"
                  onClick={this.changeCheck}
                  ref={this.refFile}
                  type="file"
                  className="input--file"
                  id="file"
                  onChange={(e) => this.onChangeFile1(e)}
                />
                <div
                  ref={this.refFakeFile}
                  className="boxAddImage"
                  onClick={this.openFileInput}
                />
              </div>
            </div>
          </div>
          <div className="col col-lg-7">
            <div className="contentRight pd-40">
              <div className="validateBox">
                <div className="validateHead"> Validate Information</div>
                    {checkItem}
              </div>
              <div className="btnGroup">
                <button
                  className="btn btnSend"
                  disabled={true}
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
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {

  return {
    phone: state.valiRD.phone,
    isPass: state.valiRD.isPass,
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
    onChangeFile: e => dispatch(
      validateCreator.changeFile(e.target.files[0])),
    onChangeDob: e => dispatch(validateCreator.changeDob(e.target.value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
