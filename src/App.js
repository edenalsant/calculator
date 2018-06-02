import React, { Component } from 'react';
import Label from './Components/Label';
import Button from './Components/Button';
import './App.css';

class App extends Component {
  state={
    number: 0,
    operator: undefined
  }

  setNumber = (value) => {
      if(value === 0){
        this.setState({
          number: 0,
        })
      }else{
        if(this.state.number === 0){
          this.setState({
            number: value
          });
        console.log("State: "+this.state.number)
        console.log("Value: "+this.props.value)
        }else if(this.state.number.length < 11){
          let currentValue = this.state.number
          let newValue = currentValue + value
          console.log(newValue)
          this.setState({
            number: newValue
          })
        }
      }   
  }

  setOperator = (value) => {
    this.setState({
      operator: value
    });
    
    if(this.state.operator){}
    console.log(this.state.operator)
  }

  render() {
    return (
      <div>
        <Label data={this.state.number}/>
        <Button value="1"  setNumber={this.setNumber} />
        <Button value="2"  setNumber={this.setNumber}/>
        <Button value="3"  setNumber={this.setNumber}/>
        <Button value="+"  setOperator={this.setOperator}/>
        <br/>
        <Button value="4"  setNumber={this.setNumber}/>
        <Button value="5"  setNumber={this.setNumber}/>
        <Button value="6"  setNumber={this.setNumber}/>
        <Button value="-"  setOperator={this.setOperator}/>
        <br/>
        <Button value="7"  setNumber={this.setNumber}/>
        <Button value="8"  setNumber={this.setNumber}/>
        <Button value="9"  setNumber={this.setNumber}/>
        <Button value="*"  setOperator={this.setOperator}/>
        <br/>
        <Button value="0"  setNumber={this.setNumber}/>
        <Button value="/"  setOperator={this.setOperator}/>
        <Button value="="  setOperator={this.setOperator}/>
        <Button value="AC" setNumber={this.setNumber}/>
      </div>
    );
  }
}

export default App;
