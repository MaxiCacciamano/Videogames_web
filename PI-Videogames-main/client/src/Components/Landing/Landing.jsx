import React from 'react'
import {Link} from 'react-router-dom'; 
import style from './Landing.module.css'

export const Landing = () => {
  return (
    <div className={style.landing}>
      
      
    {/* < className={style.conten}> */}
    <div>

        <h1 className={style.title}>fan page video game</h1>
    
        <h2 className={style.subtitle}>Hello!</h2>
    </div>
        <button className={style.button}>
            <Link to='/home' className={style.but}>
                Home
            </Link>
        </button>
    </div>
  )
}
export default Landing;
