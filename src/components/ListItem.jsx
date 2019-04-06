import React from "react";

const ListItem = (props) => {
    console.log(props)
    return (
        <div className="listItem" key = {props.id} >
            <img src = {props.image} alt=""/>
            <span>{props.name}</span>
            <span>{props.phone}</span>
            <span>{props.des}</span>
            <span>{props.dob}</span>
        </div>
    )
}
export default ListItem