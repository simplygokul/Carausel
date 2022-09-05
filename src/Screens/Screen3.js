import React, { useState } from "react";
import TextBox from "./TextBox";
import RadioGroup from "./RadioGroup";
import DateBox from "../components/DateBox";

function Screen3(props) {
  const { coupon } = props;
  const [Gender, setGender] = useState("");
  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [modal,setModal] = useState(false)
  const {
    formId: { fields },
  } = coupon;

  let toggleModal=()=>{
    setModal(!modal)
    setName("");
  }
  //console.log(fields)
  const firstField = fields[0];
  const secondField = fields[1];
  const thirdField = fields[2];
  let handleSubmit = async (e) => {
    e.preventDefault();
    if((Gender!="")&&(Name!="")&&(Date!="")){
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
            {valueStr: Gender,fieldKey:{id:2}},
            {valueStr: Date,fieldKey:{id:18}},],formKey:{id:1}
        }),
        });
        let resJson = await res.json();
        if (res.status === 201) {
          setName("");
          setDate("");
          setGender("");
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
  return (
    <>
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
          {coupon.name}
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
            <form>
              {firstField.options.map((option) => {
                return (
                  <label>
                    {option.title}
                    <input
                      style={{ margin: 20 }}
                      type="radio"
                      value={option.valueStr}
                      onClick={() => setGender(option.valueStr)}
                      name="gender"
                      checked={Gender === option.valueStr}
                    />
                  </label>
                );
              })}
            </form>
            <br />
          </div>
          <div style={{ marginTop: 0 }}>
            <label style={{ paddingBottom: 40 }}>
              {secondField.key}
              {secondField.isMandatory ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span></span>
              )}
            </label>
            <br />
            <input
              style={{ marginTop: 20, width: "70%" }}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
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
              type="date"
              style={{ marginTop: 10, width: "30%" }}
              placeholder="Select Date"
              onChange={(e) => setDate(e.target.value)}
            />
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
  );
}

export default Screen3;
