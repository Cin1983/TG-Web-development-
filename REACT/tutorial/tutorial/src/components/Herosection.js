import React from 'react'

function Herosection() {
    return (
        <div ClassName='hero-container'>
            <video src='https://youtu.be/82PsUyCKuUc'autoPlay loop muted/>
            <h1>Adventure Awaits</h1> 
            <p>What are you waiting for?</p>
            <div className="hero-btn">
                <Button className= 'btn--outline' buttonsize='btn--large'>GET STARTED</Button>
            </div>
        </div>
    )
}

export default Herosection
