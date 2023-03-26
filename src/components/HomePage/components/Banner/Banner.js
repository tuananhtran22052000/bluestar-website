import React from 'react'
import classes from './Banner.module.scss'
import Image from 'next/image'
import DownApp from 'app//components/DownApp'

import heroImg from '../../../../../image/heroImg.png'

const Banner = () => {
  return (
    <div className={classes.container}>
        <div className={classes.rowBetween}>
            <div className={classes.left}>
                <p className={classes.title}>
                    3.2% Đánh giá cổ phiếu Danh sách tiềm năng Điểm danh mục của bạn 4,8
                </p>
                <div className={classes.contentText}>
                    <span className={classes.text}>  Mô tả giá trị này trong giới hạn hiển thị có thể tối đa là 3 dòng.</span><br/>
                    <span className={classes.text}> Dưới đây là dòng mô tả thứ 2...</span><br/>
                    <span className={classes.text}>Đây là dòng mô tả thứ 3</span>
                </div>
                <DownApp />
            </div>
            <div className={classes.right}>
                <Image 
                    alt="img"
                    src={heroImg}
                    className={classes.img}
                />
            </div>
        </div>
    </div>
  )
}

export default Banner