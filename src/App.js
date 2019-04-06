import React, { Component } from 'react';
import { connect } from "react-redux";
import Main from "./containers/Main";
import ListPage from "./containers/ListPage";
import './App.css';

class App extends Component {
  render() {
    let whichPage;
    if(this.props.listPages == true) {
      whichPage = <Main />
      console.log(this.props.listPages)
    } 
    if(this.props.listPages == false) {
      console.log(this.props.listPages)
      whichPage = <ListPage />
    }
    return (
      <div className="App">
          {whichPage}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listPages: state.inforRD.listPage
  }
}
export default connect(mapStateToProps)(App);
