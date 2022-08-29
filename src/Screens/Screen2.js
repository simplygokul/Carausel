import React from 'react'
import RadioGroup from './RadioGroup';
import ContactEmail from '../components/ContactEmail';
import ContactNumber from '../components/ContactNumber';
import MultiCheckBox from '../components/MultiCheckBox';
import DateBox from '../components/DateBox';
import SelectBox from '../components/SelectBox';

    function Screen2(props) { 
        const {coupon} = props
        const {
          formId: { fields },
          } = coupon;
          console.log(fields)
        return (
          <div  >
          <div  style={{marginRight:'auto',marginLeft:'auto'}}>
            <img src={coupon.desktopImageUrl} alt="not found"/>
          </div>
        <div >
        <p className="header" 
        style={{width:'65%',backgroundColor:'white',marginLeft:'auto',marginRight:'auto',marginTop:"0",fontSize:'18px',fontWeight:'700',color:'#141414'}}
         >Jio digiatal deal days</p>
       
      
        </div>
          <div>
        <p className="header" style={{width:'65%',backgroundColor:'white',marginLeft:'auto',marginRight:'auto',marginTop:"0",fontSize:'16px',fontWeight:'300',color:'#141414'}} >{coupon.description}</p>
       
      
        </div>
        <div  style={{boxShadow:'0px 0px 11px 5px rgba(181,181,181,0.68)',width:'60%',marginLeft:'auto',marginRight:'auto',padding:20}} > 
          <form>
            <DateBox field={fields[0]}/>
            <ContactEmail field={fields[1]}/>
            <ContactNumber field={fields[2]} />
            <MultiCheckBox field={fields[3]}/>
            <MultiCheckBox field={fields[4]}/>
            <RadioGroup field={fields[5]}/>
            <SelectBox field={fields[6]}/>
            <button type='submit'>Submit</button>
          </form>
        </div>
        </div>
        )
      }

export default Screen2