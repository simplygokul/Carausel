import React from "react"
export default function ContactNumber(props){
    const{field} = props
    const required = field.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>
    return(<div style={
        {marginTop:30}
    }>
        <label>{field.key}{field.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>}</label>
        <br/>
        <input type="tel" className="" style={{marginTop:20, width:'70%'}}/>
        <br/>
        </div>
    )

}