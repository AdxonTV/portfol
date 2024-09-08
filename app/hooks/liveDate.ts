
"use clients"
import { useState, useEffect } from 'react';

const useLiveDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(()=>{const interval = setInterval(()=>{
    setDate(new Date())
  },1000)
  return () => clearInterval(interval);
 },[])
  return date
};

export default useLiveDate;
