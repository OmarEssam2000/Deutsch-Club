import React from "react";
import Typical from 'react-typical'
import './bodybackground.css'

function typical(props) {
                return <Typical
                    steps={[props.person, props.time1 , props.verb , props.time2 , props.dict , props.time3 ]}
                    loop={Infinity}
                    wrapper="p"
                    
                />
  }
  
  export default typical;