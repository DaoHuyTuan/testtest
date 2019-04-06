import React from "react";

class Input extends React.Component {
    render() {
        return(
            <input 
                type={this.props.inputType} 
                placeholder={this.props.placeHolder}
                className={"input " + this.props.classNames}
            />
        )
    }
}
export default Input;