import {useState,useEffect} from 'react';

function getWindowDimensions(){
    const {innerWidth:width,innerHeight:height} = window;
  
    return {
      width,height
    }
  }

function useDimensions(){
    const [dimension,setDimension] = useState({width:window.innerWidth,height:window.innerHeight});

  useEffect(()=>{
    function setDimensions(){
      setDimension(getWindowDimensions())
    }
    window.addEventListener('resize', setDimensions);

    return () => {
      window.removeEventListener('resize',setDimensions);
    }

  },[dimension]);

  return dimension;
}


export default useDimensions;