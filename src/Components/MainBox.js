import React from 'react'
import '../../src/app.css';
function MainBox(props) {
  return (
    <div className='mainbox'>
        <h1>{props.head}</h1>
        <h3>: {props.head2} ;</h3>
        <div className= {props.head2}>
            <div className='maindiv'>1</div>
            <div className='maindiv'>2</div>
            <div className='maindiv'>3</div>
        </div>
    </div>
  )
}

export default MainBox