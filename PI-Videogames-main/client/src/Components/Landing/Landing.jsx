import React from 'react'
import {Link} from 'react-router-dom'; 

export const Landing = () => {
  return (
    <>
    <div>
        <h1>look for the video games you like the most</h1>
        <h2>Video games</h2>
        <button>
            <Link to='/home'>
                Home
            </Link>
        </button>
    </div>
    </>
  )
}
export default Landing;
