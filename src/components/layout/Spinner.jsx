import React from 'react';
import spinnerr from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img 
          width={180} 
          className='text-center mx-auto' 
          src= {spinnerr}
           alt="Loading..." />
    </div>
  )
}

export default Spinner