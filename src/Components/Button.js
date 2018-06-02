import React, {Component} from 'react'

class Button extends Component{
   /*  Quero aumentar o tamnho do botão zero, tenho que ver dps
   changeWidth = () => {
        if(this.props.value === "0"){
            
        }
    }
    */
    sendData = () => {
        if(this.props.value !== "+" && this.props.value !== "-" &&  this.props.value !== "*" && this.props.value !== "/" && this.props.value !== "=" && this.props.value !== "AC" ){
            let value = this.props.value
            this.props.setNumber(value)  
        }else if(this.props.value === "AC"){
            let value = 0
            this.props.setNumber(value)
            console.log(value)
        }else{
            let value = this.props.value
            this.props.setOperator(value)
        }
    }


    render(){
        //this.changeWidth();
        return(
            <button className="button" onClick={this.sendData}>{this.props.value}</button>
        );
    }
}

export default Button;