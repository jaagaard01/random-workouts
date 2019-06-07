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
            data1: {}
               ,
            // data2: {
               
            // },
            // data3: {
            
            // },
            // data4:{
            //     checked: false,
            //     name: ""
            // },
            // data5: {
            //     checked: false,
            //     name: "",
            // },

            exercise1Locked: false,
            exercise2Locked: false,
            exercise3Locked: false,
            exercise4Locked: false,
            exercise5Locked: false,
            
        }
    }

    isChecked() {
        this.setState({checked: true})
        console.log(this.allData.checked)
    }
    
    
    // getExercise = async () => {
    //     if (this.state.exercise1Locked === false ) { 
    //         await this.setState({exercise1: Math.ceil(Math.random() * 6)});
    //     }
    // }

  async getExercises() {
    let result = await pickRandom(Exercises,11)
        console.log(result)

// // placeExercise = async () => {
// //         if(this.state.exercise1Locked === false){
// //             let data1 = await this.result.splice(0,1)
// //             this.setState({data1: [data1]})
//         }
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
        console.log( data2, data3,data4,data5,)
   


    }
    
  render() {
      const workouts =  this.state.allData.map((allData, id) => 
      <li key={id}><Checkbox name={allData.name}></Checkbox>{allData.name}</li>)

   

    const spot1 = this.state.allData.map(obj => {
        let finalspot = {};
        finalspot[obj.id] = obj.name
        return finalspot
    })

    console.log(spot1)

    return (
        <div>
    <div style={{display: "inline-block", justifyContent: "flex-start", alignContent:"flex-start", verticalAlign: 'middle', }}> <h1>Random workouts selection!</h1>
        <ListDiv>
            <ul>
                <li>{workouts[0]}</li>
                <li>{workouts[1]}</li>
                <li>{workouts[2]}</li>
                <li>{workouts[3]}</li>
                <li>{workouts[4]}</li>
            
            
            
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
