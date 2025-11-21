import React from 'react'
import saved from '../images/savednote.png'
import SavedNotesContent from './SavedNotesContent'
const SavedNotes = (props) => {
  return (
    <div>
      <div className='m-15  w-full overflow-hidden shrink-0 relative flex flex-wrap gap-10'>
        {props.task.map(function(elem,idx){ 
          return(
          <div className='relative h-100 w-90' key={idx} > 
          <img className=' h-full w-full object-cover ' src={elem.bg.savednote} alt='notes icon'/>
           <SavedNotesContent title={elem.title} detail={elem.detail} deleteNote={props.deleteNote} />
           </div>
          )
      })} 
      </div>
    </div>
  )
}

export default SavedNotes
