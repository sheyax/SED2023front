import React from 'react';
import Hackaton from '../assets/images/Hackaton.jpg'

export default function HackathonForm({open}) {


  if(!open) return null;

  return (
    <div className="">
    <div className="flex justify-center items-center">
      <img src={Hackaton} alt="" className='object-cover w-56 h-56'/>
      <div>
<h3>
  Register for Hackathon
</h3>
      </div>
    </div>
    </div>
  );
}
