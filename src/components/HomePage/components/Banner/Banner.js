import React from 'react'
import classes from './Banner.module.scss'
import Image from 'next/image'
import DownApp from 'app//components/DownApp'

import heroImg from '../../../../../image/heroImg.png'

const Banner = () => {
  return (
    <div className={classes.container}>
        <div className={classes.rowBetween}>
        <div className={classes.mobile}>
                <Image 
                    alt="img"
                    src={heroImg}
                    className={classes.img}
                />
            </div>
            <div className={classes.left}>
                <p className={classes.title}>
                Đầu tư hiệu quả dựa trên giá trị cốt lõi & bền vững
                </p>
                <div className={classes.contentText}>
                    <p className={classes.text}>  Ứng dụng hỗ trợ bạn ra quyết định đầu tư tốt nhất với  giải pháp BlueStar Rating - ĐỘC QUYỀN và DUY NHẤT tại Việt Nam gồm 6 tiêu chí lớn và 36 tiêu chí con theo tiêu chuẩn quốc tế đã được đăng ký sở hữu trí tuệ.</p>
                    {/* <br/>
                    <span className={classes.text}> Dưới đây là dòng mô tả thứ 2...</span><br/>
                    <span className={classes.text}>Đây là dòng mô tả thứ 3</span> */}
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