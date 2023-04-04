import React from 'react'
import classes from './DownApp.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

//img
import googlePlay from '../../../image/googlePlay.png'
import appStore from '../../../image/AppStore.png'

const DownApp = ({customText}) => {
  return (
    <div className={classes.container}>
        <p className={clsx(classes.title, customText)}>Tải về ứng dụng</p>
        <div className={classes.content}>
            <a href='https://apps.apple.com/vn/app/bluestar-investment/id1662455149'>
            <Image 
                src={appStore}
                alt="img"
                className={classes.img}
            />
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.bluestarinvestment'>
             <Image 
                src={googlePlay}
                alt="img"
                className={clsx(classes.img, classes.mr)}
            />
            </a>
        </div>
    </div>
  )
}

export default DownApp