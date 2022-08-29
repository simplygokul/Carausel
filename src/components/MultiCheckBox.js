import React from "react"
export default function MultiCheckBox(props){
    const{field} = props
    const required = field.isMandatory?<span style={{color:'red'}}>*</span>:<span>#</span>
    return(<div style={
        {marginTop:30}
    }>
        <label>{field.key}{field.isMandatory?<span style={{color:'red'}}>*</span>:<span>#</span>}</label>
        <br/>
        {field.options.map((option)=>{
            return(<label> {option.title}
                <input type="checkbox" checked={option.isDefault}/>
            </label>)
        })}
        <br/>
        </div>
    )

}