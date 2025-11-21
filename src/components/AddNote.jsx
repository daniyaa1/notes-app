import React from 'react'
import { useState } from 'react';
import SearchNotes from './SearchNotes';
import SavedNotes from './SavedNotes';
import savednote from '../images/savednote.png'

const AddNote = () => {

const [title,setTitle]=useState('');
const [detail,setDetail]=useState('');
const [bg,setBg]=useState({savednote});

const [task,setTask]=useState([]); //we are storing the title and detail in the form of an array here

const submitHandler=(e)=>{
    e.preventDefault();

    const copyTask=[...task];
    copyTask.push({title,detail,bg})
    setTask(copyTask);

    setTitle('');
    setDetail('');
}


    const deleteNote=(idx)=>{ //delete func is here because the delete button is in the savednotescontent and through props we connect this fn to delete button because it has to delete copyYask which is in this file 
        const copyTask=[...task];
        copyTask.splice(idx,1);
        setTask(copyTask);
    }

  return (
    <div> 
    <div className='flex justify-center'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}> 
        <div className=' m-15 flex flex-col gap-3 w-full'>
            <input 
                    className='text-gray-500 border font-bold outline-none rounded bg-white h-15 max-w-200 min-w-100 px-2 py-2' 
                    type='text' 
                    placeholder='Title'
                    value={title}
                    onChange={(e)=>{
                      setTitle(e.target.value);
                    }}
            />

            <textarea 
            className='text-gray-500 font-semibold border rounded bg-white outline-none resize-none px-2 py-2 w-200 max-h-full min-h-50' 
            placeholder='Content'
            value={detail}
            onChange={(e)=>{
              setDetail(e.target.value);
            }} 
            />
            
            <button 
            className='text-white bg-emerald-600 rounded h-10 w-20 text-sm font-semibold outline-none active:scale-95 '
            >Add Note</button>
        </div>
        </form>
    </div>

      <SearchNotes task={task} deleteNote={deleteNote}/>   
           
    </div>
  )
}

export default AddNote
