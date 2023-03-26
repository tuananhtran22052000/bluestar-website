import React from 'react'
import classes from './Banner.module.scss'
import Image from 'next/image'

const Banner = ({src}) => {
  return (
    <div className={classes.container}>
        <Image 
            alt='img'
            className={classes.img}
            src={src}
        />
    </div>
  )
}

export default Banner