import React, { Component } from 'react'
import styled from "styled-components"
import {Exercises} from "./Data"




export default class Randomizer extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            allData: []
        }
    }
    
    
    getExercises() {
        let data1 = Exercises[Math.floor(Math.random() * Exercises.length)];
        this.setState({data1: [data1]})
       
        let data2 = Exercises[Math.floor(Math.random() * Exercises.length)]
            if (data2.name !== data1.name){
                this.setState({data2: [data2]})
            }else{
                data2 = Exercises[Math.floor(Math.random() * Exercises.length)]
            };

        let data3 = Exercises[Math.floor(Math.random() * Exercises.length)];
        if (data3.name !== data2.name && data3.name !== data1.name){
            this.setState({data3: [data3]})
        }else{
            data3 = Exercises[Math.floor(Math.random() * Exercises.length)]
        };
        
     
        console.log(this.state)

        this.setState({allData:[data1,data2,data3]})
     
    }
    

 
  render() {
      const workouts = this.state.allData.map((allData, id) => 
      <li key={id}>{allData.name}</li>)
    return (
    <div> <h1>Random workouts selection!</h1>
        <div>
            <ul>{workouts}</ul>
           
          {/* <h1>{this.state.data}</h1> */}
          
         {/* {data.map(data =>
           <h1>Name: {data.name} </h1>)} */}
           <button onClick={() => this.getExercises()}>get exercise</button>
           
        </div>
        </div>
    
    )
  }
}
