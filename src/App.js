
import './App.css';
import { useState } from 'react';

function App() {
 const[count,setcount]= useState("0");  // initalize with zero
function decreasehandler(){
    setcount(count-1);
}

function increasehandler(){
  setcount(count+1);  
}

function resethandler(){
  setcount(0);
}

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
     
     <div className='text-[#0398d4] font-medium text-2xl '>Increment and decrement</div>
    
    <div className='flex justify-center items-center flex-row  gap-12 bg-white py-3 text-[25px] text-[#344151] '>
     <div >
      <button onClick={decreasehandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
        -
      </button>
     </div>

      <div className='font-bold gap-12 text-5xl'>
      {count}
      </div>
        
     <div>
     <button onClick={increasehandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
        +
     </button>
     </div>

     </div>
     
     
     <div>
      <button onClick={resethandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
        reset
      </button>
     </div>   

    </div>
  );
}

export default App;
