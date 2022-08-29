import React, { useState } from 'react';
import TextBox from './TextBox';
import RadioGroup from './RadioGroup';


function Screen1(props) { 
  const {coupon} = props
  const [Name,setName] = useState("")
  const [gender,setGender] = useState("")
  const [name,setname] = useState("")
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted Successfully")
    try {
      let res = await fetch("https://jio-clickstream-product-suggestion.extensions.jiox0.de/api/form-submissions-full", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({fields:[{valueStr: Name,fieldKey:{id:1}},
          {valueStr: gender,fieldKey:{id:2}},
          {valueStr: name,fieldKey:{id:18}},],formKey:{id:1}
      }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setname("");
        alert("User created successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  const {
    formId: { fields },
    } = coupon;
    console.log(fields)
    const firstField = fields[0]
    const secondField = fields[1]
    const thirdField = fields[2]
  return (
    <div style={{display:'block'}}>
    <div style={{marginLeft:'50px'}}>
      <img src={coupon.desktopImageUrl} alt="not found"/>
    </div>
  <div >
  <p className="header" 
  style={{width:'65%',backgroundColor:'white',marginLeft:'auto',marginRight:'auto',marginTop:"0",fontSize:'18px',fontWeight:'700',color:'#141414'}}
   >{coupon.name}</p>
 

  </div>
    <div>
  <p className="header" style={{width:'65%',backgroundColor:'white',marginLeft:'auto',marginRight:'auto',marginTop:"0",fontSize:'16px',fontWeight:'300',color:'#141414'}} >{coupon.description}</p>
 

  </div>
  <div  style={{boxShadow:'0px 0px 11px 5px rgba(181,181,181,0.68)',width:'60%',marginLeft:'auto',marginRight:'auto',padding:20}} > 
    <form onSubmit={handleSubmit}>
    <div style={
        {marginTop:0}
    }>
        <label style={{paddingBottom:40}}>{firstField.key}{firstField.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>}</label>
        <br/>
        <input style={{marginTop:20, width:'70%'}} type="text" onChange={(e) => setName(e.target.value)} />
        <br/>
        </div>
        <div style={
      {marginTop:30}
  }>
      <label >{secondField.key}{secondField.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>}</label>
      <br />
      <form>
      {secondField.options.map((option) => {
        return (
          <label>
            {option.title}
            <input style={{margin:20}} type="radio" value={option.valueStr} onClick={() => setGender(option.valueStr)} name='gender' 
            checked={gender===option.valueStr}
             />
          </label>
        );
      })}
      </form>
      <br />
    </div>
    <div style={
        {marginTop:0}
    }>
        <label style={{paddingBottom:40}}>{thirdField.key}{thirdField.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>}</label>
        <br/>
        <input style={{marginTop:20, width:'70%'}} type="text" onChange={(e) => setname(e.target.value)} />
        <br/>
        </div>
      <button type='submit'>Submit</button>
    </form>
  </div>
  </div>
  )
}

export default Screen1
