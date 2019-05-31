import React, { Component } from 'react'
import styled from "styled-components"



const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-top: 17px;
  padding: 20px;
  
  

`


const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'blue' : 'gray'};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px lightblue;
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`



const CheckboxButton = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 40">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )


 

export default class Checkbox extends Component {
  
    state = {checked: false,
    name: this.props.name}

    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

render() {
  
    console.log(this.state)
    return (
       
        <label>
          <CheckboxButton
            checked={this.state.checked}
            onChange={this.handleCheckboxChange} 
            name={this.props.name}
            
          /> 
        </label>
      
    )
  }
}
