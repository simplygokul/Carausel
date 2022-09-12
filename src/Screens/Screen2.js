import React, { useState } from "react";
import RadioGroup from "./RadioGroup";
import ContactEmail from "../components/ContactEmail";
import ContactNumber from "../components/ContactNumber";
import MultiCheckBox from "../components/MultiCheckBox";
import DateBox from "../components/DateBox";
import SelectBox from "../components/SelectBox";
import {useNavigate} from 'react-router-dom';
import './ScreenStyles.css'

function Screen2(props) {
  const { coupon } = props;
  const [Date, setDate] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [MultiCheck, setMultiCheck] = useState("");
  const [SingleCheck, setSingleCheck] = useState("");
  const [Gender, setGender] = useState("");
  const [Select, setSelect] = useState("");
  const [modal,setModal]=useState(false);
  const navigate = useNavigate()
  
  
  const {
    formId: { fields },
  } = coupon;
  console.log(fields);

  let toggleModal=()=>{
    setModal(!modal)
    setDate("");
    setEmail("");
    setContact("");
    setMultiCheck("");
    setSingleCheck("");
    setGender("");
    setSelect("")
  }

  let goHome=()=>{
    navigate("/")
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    if((Gender!="")&&(Date!="")&&(Select!="")&&(Contact!="")&&(MultiCheck!="")&&(SingleCheck!="")){
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
          body: JSON.stringify({fields:[{valueStr: Date,fieldKey:{id:1}},
            {valueStr: Email,fieldKey:{id:2}},
            {valueStr: Contact,fieldKey:{id:18}},{valueStr: MultiCheck,fieldKey:{id:3}},
            {valueStr: SingleCheck,fieldKey:{id:4}},
            {valueStr: Gender,fieldKey:{id:5}},{valueStr: Select,fieldKey:{id:6}},
            ],formKey:{id:1}
        }),
        });
        let resJson = await res.json();
        if (res.status === 201) {
          setDate("");
          setEmail("");
          setContact("");
          setMultiCheck("");
          setSingleCheck("");
          setGender("");
          setModal(true);
          e.target.reset()
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
  const firstField = fields[0];
  const secondField = fields[1];
  const thirdField = fields[2];
  const fourthField = fields[3];
  const fifthField = fields[4];
  const sixthField = fields[5];
  const seventhField = fields[6];
  console.log(fifthField)

  return (
    <div style={{backgroundColor:"white"}}>
    <div>
      <div style={{ marginRight: "auto", marginLeft: "auto" }}>
        <img src={coupon.desktopImageUrl} alt="not found" />
      </div>
      <div>
        <p
          className="header"
          style={{
            width: "65%",
            backgroundColor: "white",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "0",
            fontSize: "18px",
            fontWeight: "700",
            color: "#141414",
          }}
        >
          Jio digiatal deal days
        </p>
      </div>
      <div>
        <p
          className="header"
          style={{
            width: "65%",
            backgroundColor: "white",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "0",
            fontSize: "16px",
            fontWeight: "300",
            color: "#141414",
          }}
        >
          {coupon.description}
        </p>
      </div>
      <div
        style={{
          boxShadow: "0px 0px 11px 5px rgba(181,181,181,0.68)",
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 20,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: 30 }}>
            <label>
              {firstField.key}
              {firstField.isMandatory ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span></span>
              )}
            </label>
            <br />
            <input
              type="date"
              style={{ marginTop: 10, width: "30%" }}
              placeholder="Select Date"
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
          </div>
          <div style={{ marginTop: 30 }}>
            <label>
              {secondField.key}
              {secondField.isMandatory ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span></span>
              )}
            </label>
            <br />
            <input type="email" style={{ marginTop: 20, width: "70%" }} onChange={(e) =>setEmail(e.target.value)} />
            <br />
          </div>
          <div style={{ marginTop: 30 }}>
            <label>
              {thirdField.key}
              {thirdField.isMandatory ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span></span>
              )}
            </label>
            <br />
            <input
              type="tel"
              className=""
              style={{ marginTop: 20, width: "70%" }}
              onChange={(e) => setContact(e.target.value)}
            />
            <br />
          </div>
          <div style={{ marginTop: 30 }}>
            <label>
              {fourthField.key}
              {fourthField.isMandatory ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span></span>
              )}
            </label>
            <br />
            {fourthField.options.map((option) => {
              return (
                <label style={{marginRight:'25px'}}>
                  {" "}
                  {option.title}
                  <input style={{marginLeft:10}} type="checkbox" checked={option.MultiCheck} onChange={(e) => setMultiCheck(e.target.value)} />
                </label>
              );
            })}
            <br />
          </div>
          <div style={{ marginTop: 30 }}>
            <label>
              {fifthField.key}
              {fifthField.isMandatory ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span>#</span>
              )}
            </label>
            <br />
            {fifthField.options.map((option) => {
              return (
                <label style={{marginRight:'25px'}}>
                  {" "}
                  {option.title}
                  <input type="checkbox" value={option.valueStr} checked={SingleCheck} onChange={(e) => setSingleCheck(e.target.value)} />
                </label>
              );
            })}
            <br />
          </div>
          <div style={{ marginTop: 30 }}>
            <label>
              {sixthField.key}
              {sixthField.isMandatory ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span></span>
              )}
            </label>
            <br />
            <form onChange={(e) => setGender(e.target.value)}> 
              {sixthField.options.map((option) => {
                return (
                  <label className='radioBtn'>
                    {option.title}
                    <input
                      
                      style={{ margin: 20 }}
                      type="radio"
                      value={option.valueStr}
                      name="gender"
                      //onChange={(e) => setGender(e.target.value)}
                      //  checked={option.isDefault?true:false}
                    />
                  </label>
                );
              })}
            </form>
            <br />
          </div>
          <div style={{ marginTop: 30 }}>
            <label style={{ paddingBottom: "40" }}>
              {seventhField.key}
              {seventhField.isMandatory ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span></span>
              )}
            </label>
            <br />
            <select style={{ marginTop: 20, width: "70%" }} onChange={(e) => setSelect(e.target.value)}>
              {seventhField.options.map((option) => {
                return <option value={option.valueStr}>{option.title}</option>;
              })}
            </select>
            <br />
          </div>
          <button type="submit">Submit</button>
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
    </div>
  );
}

export default Screen2;

// {firstField.isMandatory ? (
//   <span style={{ color: "red" }}>*</span>
//   ) : (
//     <span></span>
//   )}
