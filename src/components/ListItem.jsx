import React from "react";

const ListItem = (props) => {
    console.log(props)
    return (
        <div className="listItem" key = {props.id} >
            <img className="listItem-image"src = {props.image} alt=""/>
            <div>
                <span className="title">Name: </span>
                <span>{props.name}</span>
            </div>
            <div>
                <span className="title">Phone Number: </span>
                <span>{props.phone}</span>
            </div>
            <div>
                <span className="title ">Description: </span>
                <span className="listItem-des">{props.des}</span>
            </div>
            <div>
                <span className="title">Dob: </span>
                <span >{props.dob}</span>
            </div>
            
        </div>
    )
}
export default ListItem