import React from 'react'
import '../../src/app.css';

function FlexDirection() {
  return (
    <div className='flexDirection'>
        <h1>Flex Direction </h1>
        <h3>: row ;</h3>
        <div className='row'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <h3>: row-reverse ;</h3>
        <div className='row-reverse'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <h3>: column ;</h3>
        <div className='column'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <h3>: column-reverse ;</h3>
        <div className='column-reverse'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
  )
}

export default FlexDirection