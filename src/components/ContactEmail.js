import React from "react"
export default function ContactEmail(props){
    const {field} = props
    const required = field.isMandatory?<span style={{color:'red'}}>*</span>:<span>#</span>
    return(<div style={
        {marginTop:30}
    }>
        <label>{field.key}{required}</label>
        <br/>
        <input type="email" style={{marginTop:20, width:'70%'}}/>
        <br/>
        </div>
    )

}