import React, {useEffect,useRef} from 'react'
import lottie from 'lottie-web'

const Lottie = () => {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
        container: container.current ,
        renderer: "svg",
        loop: true,
        autoplay:true,
        animationData: require("../Images/coding1.json")
    })

},[])

  return (
    <div className='App'>
    
    <div className='container' ref={container}></div>
    </div>
  )
}

export default Lottie