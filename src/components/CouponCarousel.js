import React, {useEffect ,useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {api_url} from "../config.js"
import "./CouponCarousel.css"
function CouponCarousel(){
    const navigate = useNavigate();
    const [coupons,setCoupans] = useState(null)
    useEffect(() => {
      callApi();
    }, []);
    async function callApi() {
       
      await axios
        .get(
           `${api_url}/api/promotions?page=0&size=5&sort=position,asc`,
          {
            method: "GET",
           
            headers: {
              //"Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
           
          }
        )
        .then((res) => {
          setCoupans(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
       
      }
   
    const onClickItem = (item) => {
      if (item) {
        navigate(`/${item.urlName}`, { replace: true });
      }
    };
 
       
        return (
            <Carousel showArrows={true}   showThumbs={false}>

                    {coupons && coupons.map((item,i)=>{
                        return(
                            <div onClick={()=> onClickItem(item)}  key={i} >
                                {/* <img src={item.desktopImageUrl} style={{height:"40vh"}}/> */}
                              <img src={item.desktopImageUrl} style={{height:"420px",width:'65%'}} alt="NotFound"/>
                                <div>
                                <h1  style={{width:'60%',marginTop:'10px',marginLeft:'auto',marginRight:'auto',fontSize:'20px'}}  >{item.name}</h1>  
                                <p style={{width:'60%',marginTop:'10px',marginLeft:'auto',marginRight:'auto'}} >{item.description}</p>
                                </div>  
                            </div>
                        )
                    })}
                
            </Carousel>
        );
    };

export default CouponCarousel;    