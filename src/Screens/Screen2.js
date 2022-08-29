import React, { useState } from "react";
import RadioGroup from "./RadioGroup";
import ContactEmail from "../components/ContactEmail";
import ContactNumber from "../components/ContactNumber";
import MultiCheckBox from "../components/MultiCheckBox";
import DateBox from "../components/DateBox";
import SelectBox from "../components/SelectBox";

function Screen2(props) {
  const { coupon } = props;
  const [Date, setDate] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [MultiCheck, setMultiCheck] = useState("");
  const [Gender, setGender] = useState("");
  const [Select, setSelect] = useState("");
  const {
    formId: { fields },
  } = coupon;
  console.log(fields);
  const firstField = fields[0];
  const secondField = fields[1];
  const thirdField = fields[2];
  const fourthField = fields[3];
  const fifthField = fields[4];
  const sixthField = fields[5];
  const seventhField = fields[6];

  return (
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
        <form>
           ̰
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
            <input type="email" style={{ marginTop: 20, width: "70%" }} />
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
                <label>
                  {" "}
                  {option.title}
                  <input type="checkbox" checked={option.isDefault} />
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
                <label>
                  {" "}
                  {option.title}
                  <input type="checkbox" checked={option.isDefault} />
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
            <form>
              {sixthField.options.map((option) => {
                return (
                  <label>
                    {option.title}
                    <input
                      style={{ margin: 20 }}
                      type="radio"
                      value={option.valueStr}
                      name="gender"
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
            <select style={{ marginTop: 20, width: "70%" }}>
              {seventhField.options.map((option) => {
                return <option>{option.title}</option>;
              })}
            </select>
            <br />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Screen2;

// {firstField.isMandatory ? (
//   <span style={{ color: "red" }}>*</span>
//   ) : (
//     <span></span>
//   )}
