import React, { Component } from 'react'
import {Exercises} from "./Data"
import {Button} from "react-bootstrap"




export default class RandomButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: "" 
        }
    }
    

 getExercises() {
     let exercise = Exercises[Math.floor(Math.random() * Exercises.length)];
     this.setState({data: exercise})
     console.log(this.state)
     
 }
  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.getExercises()}>Random Workout!</Button>
        
      </div>
    )
  }
}
