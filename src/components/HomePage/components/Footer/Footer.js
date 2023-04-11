import React from 'react'
import classes from './Footer.module.scss'
import DownApp from 'app//components/DownApp'
import Image from 'next/image'
import logoLandscape from '../../../../../image/logoLandscape.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.rowBetween}>
            <div className={classes.left}>
            <Link href={'/'}>
                <Image 
                    src={logoLandscape}
                    alt="img"
                    className={classes.img}
                />
                </Link>
                <p className={classes.text}>Công ty cổ phần BlueStar</p>
                <p className={classes.text}>Địa chỉ: 2F Quang Trung, P. Trần Hưng Đạo, Q. Hoàn Kiếm, Hà Nội, Việt Nam</p>
                <p>Email: <a href="mailto:contact@bluestarinvestment.vn">contact@bluestarinvestment.vn</a></p>
                <p>Hotline: <a href="tel:+84346996162">+8434 699 6162</a></p>
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