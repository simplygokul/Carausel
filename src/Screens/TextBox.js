import React, { useState } from "react"
import "./InputControl.css"
export default function TextBox(props){
    const {field} = props


    // const[Name,setName]=useState('')
    // const[name,setname]=useState('')
    // // console.log(props)
    

    // const[formValues,setFormValues]=useState(false?{
    //     Name:'',
    //     name:'',
    //     fieldkey:''
    // }:{name:'hello'})
    // console.log(formValues)


    // console.log(props.field,"haii")
    // console.log(name,"name")
    // console.log(Name,"Name")

    // const handleInput=(e)=>{
    //     console.log(e.target.value)
        
        

    // }
    const required = field.isMandatory?<span style={{color:'red'}}>*</span>:<span>#</span>
    return(<div style={
        {marginTop:0}
    }>
        <label style={{paddingBottom:40}}>{field.key}{required}</label>
        <br/>
        <input style={{marginTop:20, width:'70%'}} type="text"  />
        <br/>
        </div>
    )

}

// onChange={
//     // (e)=>handleInput(e)
//     (e)=>props.label==='Name'?setName(e.target.value):setname(e.target.value)
   

//     } 