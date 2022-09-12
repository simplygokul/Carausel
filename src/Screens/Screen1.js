import React, { useState } from 'react';
import TextBox from './TextBox';
import RadioGroup from './RadioGroup';
import Button from 'react-bootstrap/Button';
import TestModal from './TestModal.Js';
import './MyModal.css';
import {useNavigate} from 'react-router-dom'
import './ScreenStyles.css'





function Screen1(props) { 
  const {coupon} = props
  const [Name,setName] = useState("")
  const [gender,setGender] = useState("")
  const [name,setname] = useState("")
  const [modal, setModal] = useState(false);
  const navigate=useNavigate()

  let toggleModal=()=>{
    setName("");
    setname("");
    setGender("")
    setModal(!modal)
    
  }
  let goHome=()=>{
    navigate("/")
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
          setModal(true);
          e.target.reset()
        } else {
          console.log(res);
        }
      } catch (err) {
        console.log(err);
      }
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
        <input style={{marginTop:20, width:'70%'}} type="text" onChange={(e) => setName(e.target.value)} />
        <p id='firstFieldErr' className='error-msg'>Field cannot be empty</p>
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
          <label className='radioBtn'>
            {option.title}
            <input className='inputRadio' style={{margin:20}} type="radio" value={option.valueStr} onChange={() => setGender(option.valueStr)} name='gender' 
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
        <input style={{marginTop:20, width:'70%'}} required requiredTxt="Field Cannot be Empty" type="text" onChange={(e) => setname(e.target.value)} />
        <br/>
        </div>
      <button className='submit-btn' type='submit' variant='primary'>Submit</button>
    </form>
  </div>
  </div>
  <>

  {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="first-modal">
                <img src="https://jio-marketing.extensions.jiox5.de/img/green_check.e5137cae.svg" style={{width:30,height:30,marginRight:10}} />
                <h3>Form Submitted Successfully</h3>
            </div>
            <div className="buttonCont">
            <button className="close-modal" onClick={goHome}>
              Go To Home
            </button>
            <button variant="light" className="submit-modal" onClick={toggleModal}>
              Submit Again
            </button>
            </div>
          </div>
        </div>
      )}
    </>
    </>
  
  )
}

export default Screen1
