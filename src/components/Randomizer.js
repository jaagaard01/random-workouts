import React, { Component } from 'react';
import styled from "styled-components"
import {Exercises} from "./Data";
import "../App.css";
import Checkbox from "./Checkbox"



const ListDiv = styled.div `
display: flex;
border: 1px solid black;
align-items: flex-start;

`


export default class Randomizer extends Component {
    
    constructor(){
        super();
        this.state= {
            allData: [ 
            ],
            data1: {
                checked: false
            },
            data2: {
                checked: false
            },
            data3: {
                checked: false
            },
            
            
        }
    }
    
    
  async getExercises() {
         let data1 = await Exercises[Math.floor(Math.random() * Exercises.length)];
        this.setState({data1: [data1]})
       
        let data2 = await Exercises[Math.floor(Math.random() * Exercises.length)]
            if (data2 !== data1){
                this.setState({data2: [data2]})
            }else{
                data2 = Exercises[Math.floor(Math.random() * Exercises.length)]
            };

        let data3 = await Exercises[Math.floor(Math.random() * Exercises.length)];
        if (data3 !== data2 && data3 !== data1){
            this.setState({data3: [data3]})
        }else{
            data3 = Exercises[Math.floor(Math.random() * Exercises.length)]
        };
        
     
            
        this.setState({allData:[...new Set([data1,data2,data3])]})
        console.log(data1, data2, data3)
      
    }
    

 
  render() {
      const workouts =  this.state.allData.map((allData, id) => 
      <li key={id}><Checkbox name={allData.name}></Checkbox>{allData.name}</li>)
    return (
        
    <div style={{display: "inline-block", justifyContent: "flex-start", alignContent:"flex-start", verticalAlign: 'middle', }}> <h1>Random workouts selection!</h1>
        <ListDiv>
            <ul>{workouts}</ul>
        </ListDiv>
        <button   onClick={() => this.getExercises()}>get exercise</button>
        </div>
    
    )
  }
}
