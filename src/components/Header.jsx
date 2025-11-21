import React from 'react'
import note from '../images/note.png'
const Header = () => {
  return (
    <div> 
        <div className='py-10 px-10 h-full w-full text-5xl font-bold flex justify-center gap-5'>
            <h1>Keep Notes</h1>
            <img  className='object-cover relative h-full w-15 ' src={note} alt="Note Icon" />
        </div>
    </div>
  )
}

export default Header
