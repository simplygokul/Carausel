import React from "react"
export default function DateBox(props){
    const {field} = props
    const required = field.isMandatory?<span style={{color:'red'}}>*</span>:<span>#</span>
    return(<>
    <div  style={
        {marginTop:30}
    }>
    <label  >{field.key}{required}</label>
        <br/>
        <input type="date" style={{marginTop:10, width:'30%'}} placeholder="Select Date"/>
        <br/>

    </div>
      
        </>
    )

}