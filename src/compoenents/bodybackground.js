import React from "react";
import Typicality from './typical.js'
import './bodybackground.css'
import flag from './images/flag.gif'

function background() {
    return <section className="welcomeSection">
            <div className="parent">
                <img src={flag}/>
                <div className="child1">
                    <h1>
                        <Typicality person={'Deutsch Club !'} time1={15000}/>
                    </h1>
                </div>    
                <div className="child2">
                    <p>
                        <Typicality person={'The right place to learn german ...'}
                                    verb={'Practice all the skills you need to master german !'}
                                    dict={'You can find anyword you want in the dictionary'}
                                    time1={7000}
                                    time2={8000}
                                    time3={7500} />
                    </p>
                </div>
            </div>
            
                
           </section>
  }
  
  export default background;