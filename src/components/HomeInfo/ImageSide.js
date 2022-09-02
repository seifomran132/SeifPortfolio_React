import React, {useEffect} from "react";
import lottie from "lottie-web";
import myAnimation from '../../animations/96143-developer.json'

function ImageSide(props) {


    useEffect(()=>{
        lottie.loadAnimation({
            container: document.querySelector('#animation'),
            loop: true,
            autoplay: true,
            animationData: myAnimation
        })
    }, [])

  return (

    <div className="img-side col-xs-12 col-md-6">
      <div id="animation"></div>
    </div>
  );
}

export default ImageSide;
