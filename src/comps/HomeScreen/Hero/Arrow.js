import React, { PureComponent } from 'react'

import arrow from '../../../assets/images/hero/arrow.svg'
import ReactSVG from 'react-svg'

class Arrow extends PureComponent{

  constructor(props){
    super(props);
    this.state={
      changeColor:true
    }
  }
    
    render(){

        return(
          <div>

            <svg viewBox="0 0 830 780" id="the_arrow">
            
                <defs>
                <pattern id="GPattern" x="90" y="90" width="20" height="20"
                         patternUnits="userSpaceOnUse"
                         patternTransform="rotate(90)" >
                  <animateTransform attributeType="xml"
                                    attributeName="patternTransform"
                                    type="rotate" 
                                    from="1290 100 100" 
                                    to="0 100 100" 
                                    begin="-290"
                                    dur="300s" repeatCount="indefinite"/>
                        <circle id="circle" cx="10" cy="10" r="10" stroke="none" fill="#FF51E8">
                         <animate attributeName="r"
                                  type="xml"
                                  from="1" to="1"
                                  values="2; 5; 2"
                                  begin="0s" dur="3s"
                                  repeatCount="indefinite"
                                  />
                        </circle>
                </pattern>
              </defs>

                <symbol id="g-text">
                 
                <path    style={{fill: `url(#GPattern)`}}   d="M30.525,740.585a109.343,109.343,0,0,1,5.4-154.54L428.713,219.762H109.342a109.342,109.342,0,0,1,0-218.685H692.064A111.99,111.99,0,0,1,819.023,110.419V663.4a109.342,109.342,0,0,1-218.685,0V358.732L185.064,745.981a109.342,109.342,0,0,1-154.539-5.4Z" transform="translate(0 0.001)" />
                
                  </symbol> 
             
               
                 
                
                  <use id="g-usetag" xlinkHref="#g-text" class="text2" style={{fill: `url(#GPattern)`}}/> 
                
            </svg>
                                  </div>
        )
    }
}

export default Arrow;