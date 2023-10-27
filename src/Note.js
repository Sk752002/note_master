import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
// import Createnote from './Createnote';

const Note = (props) =>
{

  const deletevent = () =>
  {
    props.deleteitem(props.id);
  }
    return(
      <>
        <div className='note'>

         <h1  className='title'>{props.title}</h1>
         
         <p className='content'>{props.content}</p>
        
        
         
         <button className='btntwo' onClick={deletevent}> <DeleteOutlineIcon className='icontwo' /></button>
       
        </div>
      </>
    );
}

export default Note;