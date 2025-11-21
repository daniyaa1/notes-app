import React from 'react'

const SavedNotesContent = (props) => {

  return (
    <div className=' w-80 h-100 px-10 absolute mt-20 top-0 left-0 font-semibold'>
                <div className=' h-50 flex px-2 flex-col text-gray-800 '> 
                <p className='mb-20 ml-13 pl-5 text-black  uppercase font-bold text-2xl'>{props.title}</p>
                <div className='h-50 font-bold text-gray-500 py-3 -mt-18 px-3'>{props.detail}</div> 
                </div>

                <div className='pl-18 mt-10'> 
                    <button 
                    onClick={()=>{
                        props.deleteNote(props.idx);
                    }}
                    className='bg-red-400 h-10 w-20 px-3 py-2 rounded font-bold text-white active:scale-95'
                    >Delete</button>
                </div>     
    </div>
  )
}

export default SavedNotesContent
