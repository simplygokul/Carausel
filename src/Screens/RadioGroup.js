import React from "react";
export default function RadioGroup(props) {
  const {field} = props
  const required = field.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>
  return (
    <div style={
      {marginTop:30}
  }>
      <label >{field.key}{required}</label>
      <br />
      <form>
      {field.options.map((option) => {
        return (
          <label>
            {option.title}
            <input style={{margin:20}} type="radio" value={option.valueStr} name='gender' 
            //  checked={option.isDefault?true:false}
             />
          </label>
        );
      })}
      </form>
      <br />
    </div>
  );
}
