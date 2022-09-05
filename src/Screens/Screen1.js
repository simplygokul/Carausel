import React, { useState } from 'react';
import TextBox from './TextBox';
import RadioGroup from './RadioGroup';
import Button from 'react-bootstrap/Button';
import TestModal from './TestModal.Js';
import './MyModal.css'




function Screen1(props) { 
  const {coupon} = props
  const [Name,setName] = useState("")
  const [gender,setGender] = useState("")
  const [name,setname] = useState("")
  const [modal, setModal] = useState(false);

  let toggleModal=()=>{
    setModal(!modal)
    setName("");
    setname("");
  }

  

  let handleSubmit = async (e) => {
    e.preventDefault();
    if((gender!="")&&(Name!="")&&(name!="")){
      try {
        let res = await fetch("/api/form-submissions-full", {
          method: "POST",
          headers: {
  
            "Content-Type": "application/json",
    
            "Access-Control-Allow-Origin": "*",
    
            "Access-Control-Allow-Headers": "*",
    
            Accept: "*/*",
    
          },
    
          //body: JSON.stringify(request),
        //   headers: { 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'},
          body: JSON.stringify({fields:[{valueStr: Name,fieldKey:{id:1}},
            {valueStr: gender,fieldKey:{id:2}},
            {valueStr: name,fieldKey:{id:18}},],formKey:{id:1}
        }),
        });
        let resJson = await res.json();
        if (res.status === 201) {
          setName("");
          setname("");
          setModal(true)
          alert("User created successfully");
        } else {
          console.log(res);
        }
      } catch (err) {
        console.log(err);
      }
    }
    else{
      
    }
    }
    
  
  const {
    formId: { fields },
    } = coupon;
    const firstField = fields[0]
    const secondField = fields[1]
    const thirdField = fields[2]
  return (
    <>
       <div>
        <img src={coupon.desktopImageUrl} alt="not found"   />
      

       </div>
   
      <div style={{display:'block'}}>
  
  <div >
  <p className="header" 
  style={{width:'65%',backgroundColor:'white',marginLeft:'auto',marginRight:'auto',marginTop:"0",fontSize:'18px',fontWeight:'700',color:'#141414'}}
   >{coupon.name}</p>
 

  </div>
    <div>
  <p className="header" style={{width:'65%',backgroundColor:'white',marginLeft:'auto',marginRight:'auto',marginTop:"0",fontSize:'16px',fontWeight:'300',color:'#141414'}} >{coupon.description}</p>
 

  </div>
  <div  style={{boxShadow:'0px 0px 11px 5px rgba(181,181,181,0.68)',width:'65%',marginLeft:'auto',marginRight:'auto',padding:20}} > 
    <form onSubmit={handleSubmit}>
    <div style={
        {marginTop:0}
    }>
        <label style={{paddingBottom:40}}>{firstField.key}{firstField.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>}</label>
        <br/>
        <input style={{marginTop:20, width:'70%'}} value={Name} type="text" onChange={(e) => setName(e.target.value)} />
        {Name=="" && <p>Field cannot be empty</p>}
        <br/>
        </div>
        <div style={
      {marginTop:30}
  }>
      <label >{secondField.key}{secondField.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>}</label>
      <br />
      <div>
      {secondField.options.map((option) => {
        return (
          <label>
            {option.title}
            <input style={{margin:20}} type="radio" value={option.valueStr} onChange={() => setGender(option.valueStr)} name='gender' 
            checked={gender===option.valueStr} key={option.key}
             />
          </label>
        );
      })}
      </div>
      <br />
    </div>
    <div style={
        {marginTop:0}
    }>
        <label style={{paddingBottom:40}}>{thirdField.key}{thirdField.isMandatory?<span style={{color:'red'}}>*</span>:<span></span>}</label>
        <br/>
        <input style={{marginTop:20, width:'70%'}} type="text" value={name} onChange={(e) => setname(e.target.value)} />
        <br/>
        </div>
      <button type='submit'>Submit</button>
    </form>
  </div>
  </div>
  <>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Successfully Submitted</h2>
            <p>
              Thank your for your Interest.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Submit Again
            </button>
            <button className="submit-again" onClick={toggleModal}>
              Go Home
            </button>
          </div>
        </div>
      )}
    </>
    </>
  
  )
}

export default Screen1
