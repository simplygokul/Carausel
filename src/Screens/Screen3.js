import React, { useState } from "react";
import TextBox from "./TextBox";
import RadioGroup from "./RadioGroup";
import DateBox from "../components/DateBox";

function Screen3(props) {
  const { coupon } = props;
  const [Gender, setGender] = useState("");
  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");
  const {
    formId: { fields },
  } = coupon;
  //console.log(fields)
  const firstField = fields[0];
  const secondField = fields[1];
  const thirdField = fields[2];
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted Successfully");
    try {
      let res = await fetch(
        "https://jio-clickstream-product-suggestion.extensions.jiox0.de/api/form-submissions-full",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { valueStr: Gender, fieldKey: { id: 3 } },
              { valueStr: Name, fieldKey: { id: 4 } },
              { valueStr: Date, fieldKey: { id: 5 } },
            ],
            formKey: { id: 2 },
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setDate("");
        alert("User created successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
  );
}

export default Screen3;
