import React from 'react'

export default function Bubble1() {
    return (
        <div >
            <div className="bubble" style={myBubble}>
                <div className="inner_bubble" style={innerBubble}>

                </div>
            </div>
        </div>
    )
}


const myBubble={
    width:'60%',
    height:'60%',
    background:'linear-gradient(to bottom, rgba(55, 48, 255,0.29), rgba(0, 7, 103,0.29))',
    position:'absolute',
    borderRadius:'50%'
 
}

const innerBubble={
    width:300,
    height:300,
    background:'linear-gradient(to bottom, rgba(55, 48, 255,0.49), rgba(0, 7, 103,0.49))',
    position:'absolute',
    borderRadius:'60%',
    top:'75%',
    left:'75%',
    margin: "-250px 0px 0px -250px"
}
