import React,{useState} from 'react';
import TextBox from './TextBox';
import RadioGroup from './RadioGroup';
import DateBox from '../components/DateBox';


function Screen3(props) { 
  const {coupon} = props
  const [Gender,setGender] = useState("")
  const [Name,setName] = useState("")
  const [Date,setDate] = useState("")
  const {
    formId: { fields },
    } = coupon;
    //console.log(fields)
    const firstField = fields[0]
    const secondField = fields[1]
    const thirdField = fields[2]
  return (
    <div  >
    <div  style={{marginRight:'auto',marginLeft:'auto'}}>
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
    <form>
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
      <TextBox field={fields[1]}/>
      <DateBox field={fields[2]} />
      <button type='submit'>Submit</button>
    </form>
  </div>
  </div>
  )
}

export default Screen3
