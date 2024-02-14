"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import wait from '../assect/wait.gif';
import accepted from '../assect/accept.gif';

const Home = () => {
  const [cnt,setCnt] = useState<number>(0);
  const [height,setHeight] = useState<number>(8);
  const [accept,setAccept] = useState<boolean>(false);
  const [no,setNo] = useState<boolean>(false);

  let myArray = ['No','Are You Sure?','Think Once Again','Reflect on Your Feelings','Consider All Angles','Examine Your Heart','Listen to Your Gut','No Rush, Just Reconsider','Take Another Look','Examine Your Feelings','Evaluate the Consequences','Consult Your Heart','Consider Future Implications','Review Your Decision'];
  if(cnt==myArray.length-1){
    setCnt(0);
  }
  const Yes = ()=>{
    setAccept(true);
    setHeight(8);
  }
  return (
    <>
    <div className='bg-[#f8fcfc] flex flex-col justify-center items-center  h-screen overflow-hidden'>
      {!accept && (
      <h1 className='font-bold text-[#ff0808] text-xl md:text-3xl'>Would you be my Valentine ?</h1>
      )}
    <Image src={accept?accepted:wait} height={200} width={200} alt='waiting'/>
    {accept && (
      <h1 className='font-bold text-[#ff0808] text-3xl'>I love you sona😘😘😘</h1>
      )}
    {!accept && (
      <section className='flex gap-2 mt-8 justify-center items-center'>
      <button style={{height:!no?'':`${height}svh`,width:!no?'':`${height}svw`}} className='bg-[#088948] p-2 rounded-md text-white font-bold text-3xl' onClick={()=>{Yes();setNo(false)}}>Yes</button>
      
      <button  onClick={()=>{setCnt(cnt+1);setHeight(height+10);setNo(true)}} className='bg-[#ff0808] p-2 rounded-md text-white font-bold text-3xl w-auto'><h1>{myArray[cnt]}</h1></button>
  </section>
    )}       
    {!no && (
    <h1 className='text-gray-500 absolute bottom-0'>Made with ❤️ by Pritam Joardar</h1>
    )} 
    </div>
    </>
  )
}

export default Home
