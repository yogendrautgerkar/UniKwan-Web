import React from 'react'

export default function Bubble2() {
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
    background:'linear-gradient(to bottom, rgba(255, 36, 226,0.3), rgba(138, 2, 155,0.3))',
    position:'absolute',
    borderRadius:'50%'
 
}

const innerBubble={
    width:300,
    height:300,
    background:'linear-gradient(to bottom, rgba(255, 36, 226,0.5), rgba(138, 2, 155,0.5))',
    position:'absolute',
    borderRadius:'60%',
    top:'75%',
    left:'75%',
    margin: "-250px 0px 0px -250px"
}
