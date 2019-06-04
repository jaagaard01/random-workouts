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
    
    constructor(){
        super();
        this.state= {
            allData: [
            ],
            data1: {
                checked: false,
                name:"",
            },
            data2: {
                checked: false,
                name: "",
            },
            data3: {
                checked: false,
                name: "",
            },
            // data4:{
            //     checked: false,
            //     name: ""
            // },
            // data5: {
            //     checked: false,
            //     name: "",
            // },
            
            
            
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
        // console.log(data1.name);
       
        let [data2] = await result.splice(1,1)
        this.setState({data2:[data2]})

        let [data3] = await result.splice(2,1)
        this.setState({data3:[data3]})

        let [data4] = await result.splice(3,1)
        this.setState({data4:[data4]})
        // console.log(data4.name)

        let [data5] = await result.splice(4,1)
        this.setState({data5:[data5]})

        
        // let data2 = await Exercises[Math.floor(Math.random() * Exercises.length)]
        //     if (data2 !== data1){
        //         this.setState({data2: data2})
        //     }else{
        //         data2 = Exercises[Math.floor(Math.random() * Exercises.length)]
        //     };

        // let data3 = await Exercises[Math.floor(Math.random() * Exercises.length)];
        // if (data3 !== data2 && data3 !== data1){
        //     this.setState({data3: [data3]})
        // }else{
        //     data3 = Exercises[Math.floor(Math.random() * Exercises.length)]
        // };

        
        
     
            
        this.setState({allData:[...new Set([data1,data2,data3,data4,data5,])]})
        console.log(data1, data2, data3,data4,data5)
      
    }
    
 
// onChange = (e) => {
//     this.setState(this.allData[{checked:true}], e.target.checked)
//     console.log(this.state)
// }

// isChecked() {
//     this.setState({allData:[{checked: true}]})
//     console.log(this.allData.checked)
// }

 
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
