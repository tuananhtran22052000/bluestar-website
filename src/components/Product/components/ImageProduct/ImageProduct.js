import React from 'react'
import classes from './ImageProduct.module.scss'
import Image from 'next/image'
import clsx from 'clsx'

import VisionMission from '../../../../../image/VisionMission.png'
const ImageProduct = () => {
  return (
    <div className={classes.container}>
        <Image alt='img' className={clsx( classes.img,classes.imgLeft)} src={VisionMission}/>
        <Image alt='img' className={clsx(classes.img,classes.imgCenter)} src={VisionMission}/>
        <Image alt='img' className={clsx(classes.img,classes.imgRight)} src={VisionMission}/>
    </div>
  )
}

export default ImageProduct