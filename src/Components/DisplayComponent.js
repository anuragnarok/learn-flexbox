import React from 'react'
import '../../src/app.css';

function DisplayComponent() {
  return (
    <div className='display'> 
        <h1>Display Property</h1> 
        <h3>display : flex</h3>
        <div className='displaymain'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
  )
}

export default DisplayComponent