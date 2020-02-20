import React, { Component } from 'react'

export default class WorkshopBanner extends Component {
    render() {
        return (
            <div className="row justify-content-between align-items-center pt-5 pb-5 wow animated fadeInLeft" id="workshopBanner" style={{width:'100%'}}>
                        <div className="col-sm-12 col-md-6 mb-5">
                            <h6 style={{color:'#4b81ff'}}>Upcoming Events</h6>
                            <h2 id="workshop_head2">How to start your User Experience <span>career</span></h2>
                            <h6 id="banner_subhead">Master Class with Prabhudha Vyas </h6>
                            <p id="banner_msg1">Get a chance to learn from the Creative Director of UniKwan, <span>Prabhudha Vyas</span> 24 Aug 2019 ,11 AM in Indiranagar Bengaluru.</p>
                            <span id="reg_btn">Register</span>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="image_1_1"></div>
                        </div>
                    </div>
        )
    }
}
