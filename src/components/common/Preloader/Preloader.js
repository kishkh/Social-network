import React from 'react';
import preloader from '../../../assets/images/preloader1.svg';
import classes from './Preloader.module.css'

const Preloader = (props) => {
  return (
    <div>
      <img className={classes.preloader} src={preloader}></img>
    </div> 
  )
}

export default Preloader;