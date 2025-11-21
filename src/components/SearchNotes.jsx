import React from 'react'
import { useState } from 'react';
import SavedNotes from './SavedNotes';

const SearchNotes = (props) => {

  const [search,setSearch]=useState('');

  const searchTask=props.task.filter(elem=>
    elem.title.toLowerCase().includes(search.toLowerCase()) ||
    elem.detail.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <div> 
    <div className='m-15 flex justify-between'> 
       <div>
          <h3 className='px-5 py-5 text-4xl font-bold text-black'>Recent Notes</h3>
        </div>

        <div className='h-10 rounded font-semibold w-100 border mt-5 px-2 py-2 text-gray-500' >  
          <input
          onChange={(e)=>{
            setSearch(e.target.value);
          }} 
          className='outline-none' 
          type='text' 
          placeholder='Search Notes' />
        </div>       
    </div>
          <SavedNotes task={searchTask} deleteNote={props.deleteNote}/>
        </div>

  )
}

export default SearchNotes
