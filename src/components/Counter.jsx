import React, { useState } from 'react';
import Dashboard from './Dashboard';
import '../App.css'

export default function App() {
  function divby10(num) {
    if (num%5 === 0 && num !== 0) {
      return (
        alert('Number is divisible by 5')
      );
    }
  }

  const [count, setCount] = useState(0);
  return (
    <div>
      <Dashboard/>
      <div className="bg-[#092038] fixed top-0 left-0 my-10 h-full w-full flex flex-row">
        <div className="bg-[#14152f] w-3/4 h-3/4  m-auto rounded-2xl flex flex-col items-center justify-center">
          <div>
              <p className='font-bold mb-4'>Counter Demo</p>
              <p>You clicked {count} times</p>
              <div className='mx-5 mt-5 text-black'>
                <button className='bg-slate-300' onClick={() => {setCount(count - 1), divby10(count-1)}}>
                  -
                </button>
                <button className='bg-slate-300' onClick={() => setCount(0)}>
                  Reset
                </button>
                <button className='bg-slate-300' onClick={() => {setCount(count + 1), divby10(count+1)}}>
                  +
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
