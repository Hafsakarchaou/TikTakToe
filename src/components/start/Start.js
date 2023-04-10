import React from 'react'
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);
  return (
    <div className='start'>
         <div className="card "> 
         <h1 className="text-lg">Let's play!</h1>
         
         <div className="start__btns">
         <button className="btn btn-orang" onClick={() => {
          setActiveUser("x");
          handleStart("cpu");
          }}>
             new game (vs CPU)
            </button>
            <button className="btn btn-mint" onClick={() => handleStart("user")}>
            {" "}
            new game (vs Player)
            </button>
        </div>

         </div>
    </div>
  )
}

export default Start