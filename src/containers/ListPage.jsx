import React from "react";
import { connect } from "react-redux";
import ListItem from "../components/ListItem";

class ListPage extends React.Component {
    render() {
        return(
            <div className="listPage">
                {this.props.infors.map( (infor) => {
                    return <ListItem 
                        key = {infor.id}
                        id = {infor.id}
                        name = {infor.name}
                        image = {infor.image}
                        phone = {infor.phone}
                        des = {infor.content}
                        dob = {infor.dob}
                    />
                })}                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        infors:state.inforRD.infor
    }
}
export default connect(mapStateToProps)(ListPage);