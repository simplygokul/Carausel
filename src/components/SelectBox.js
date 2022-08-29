import React from "react"
//import "./InputControl.css"
export default function SelectBox(props){
    const{field} = props
    const required = field.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>
    return(<div style={{marginTop:30}}
    >
        <label style={{paddingBottom:'40'}}>{field.key}{field.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>}</label>
        <br/>
        <select style={{marginTop:20, width:'70%'}}> 
        {field.options.map((option)=>{
            return(
                <option >{option.title}</option>
            )
        })}
        </select>
        <br/>
        </div>
    )

}