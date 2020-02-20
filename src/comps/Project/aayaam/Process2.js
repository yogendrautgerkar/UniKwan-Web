import React, { PureComponent } from 'react'
import sec1 from '../../../assets/images/project/aayaam/sec1.png'
import banner from '../../../assets/images/project/aayaam/banner.jpg'

export default class Process2 extends PureComponent {
    render() {
        return (
            <section className=" " id="process_sec"  style={{color:'#6b6b6b '}}>
                    <div className=" row justify-content-center align-items-center" id="project_text_sec">
                <img src={banner} style={{maxWidth:"100%",height:"auto",objectFit:"cover"}} alt=""/>
      </div>


{/* 


                    <div className="col-sm-12 col-md-12 d-sm-none d-md-flex d-none banner">
                        <div className="the_project_image2" >
                            <img id="screenshot" src={banner} alt="atyati_screen"/>
                        </div>
                    </div> */}


            
            </section>
        )
    }
}
