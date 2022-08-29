import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Screen1 from "../Screens/Screen1";
import Screen2 from "../Screens/Screen2";
import Screen3 from "../Screens/Screen3";

export default function CouponItem() {
  let location = useLocation();
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    callApi(location.pathname);
  }, [location]);
  const callApi = async (urlPath) => {
    if (urlPath) {
      const response = await axios.get(
        `https://jio-clickstream-product-suggestion.extensions.jiox0.de/api/promotions/url${urlPath}/full`
      );
      setCoupon(response.data);
    }
  };
    if(coupon){
      if(coupon.id===3){
        return(<Screen1 coupon={coupon}/>)
      }
      else if(coupon.id===12){
        return(<Screen2 coupon={coupon}/>)
      }
      else{
        return(<Screen3 coupon={coupon}/>)
      }
    }
  
}

