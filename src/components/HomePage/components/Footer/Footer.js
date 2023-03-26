import React from 'react'
import classes from './Footer.module.scss'
import DownApp from 'app//components/DownApp'
import Image from 'next/image'
import logoLandscape from '../../../../../image/logoLandscape.png'

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.rowBetween}>
            <div className={classes.left}>
                <Image 
                    src={logoLandscape}
                    alt="img"
                    className={classes.img}
                />
                <p className={classes.text}>Công ty cổ phần BlueStar</p>
                <p className={classes.text}>Địa chỉ:</p>
                <p className={classes.text}>© 2022 | Bản quyền thuộc về BlueStar</p>
            </div>
            <div className={classes.right}>
                <DownApp 
                    customText={classes.customText}
                />
            </div>
        </div>
    </div>
  )
}

export default Footer