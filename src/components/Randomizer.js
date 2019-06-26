import React, { Component } from 'react';
import styled from "styled-components"
import {Exercises} from "./Data";
import "../App.css";
// import Checkbox from "./Checkbox"




const ListDiv = styled.div `
display: flex;
border: 1px solid black;
align-items: flex-start;

`
const pickRandom = (arr,count) => {
  let _arr = [...arr];
  return[...Array(count)].map( () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0] ); 
}




export default class Randomizer extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            allData: [
            ],
            
            ExercisesLocked:[
            false,
            false,
            false,
            false,
            false,
            ]
        }
    }

    isChecked() {
        this.setState({checked: true})
        console.log(this.allData.checked)
    }
    

  async getExercises() {
    let result = await pickRandom(Exercises,11)
        console.log(result)


         let [data1] = await result.splice(0,1)
        this.setState({data1: [data1]})
        console.log(data1.name);
       
        let [data2] = await result.splice(1,1)
        this.setState({data2:[data2]})

        let [data3] = await result.splice(2,1)
        this.setState({data3:[data3]})

        let [data4] = await result.splice(3,1)
        this.setState({data4:[data4]})
        // console.log(data4.name)

        let [data5] = await result.splice(4,1)
        this.setState({data5:[data5]})

        this.setState({allData:[...new Set([data1,data2,data3,data4,data5,])]})
        console.log( data1,data2, data3,data4,data5,)
    }

 exerciseChecked = (id)  => {
    this.setState(prev => ({
        ExercisesLocked: prev.ExercisesLocked.map((val, i) => !val && i === id ? true : val)
    }))
    console.log(this.ExercisesLocked)
    
 }
    
  render() {
      const workouts =  this.state.allData.map((allData, id) => 
      <li key={id}><input type ="checkbox" ></input>{allData.name}</li>)

   
    

    return (
        <div>
    <div style={{display: "inline-block", justifyContent: "flex-start", alignContent:"flex-start", verticalAlign: 'middle', }}> 

    <h1>Random workouts selection!</h1>
        <ListDiv>
            <ul>
                {workouts[0]}
                {workouts[1]}
                {workouts[2]}
                {workouts[3]}
                {workouts[4]}
            
            
            
            </ul>
            
        </ListDiv>
        <button   onClick={() => this.getExercises()}>get exercise</button>
        </div>
         <div>
            
            <input hidden type="checkbox" checked={this.state.exercise1Locked} onChange={e => this.setState(prevState => ({exercise1Locked: !prevState.exercise1Locked}))}></input>
        </div>

        </div>
    )
  }
}
