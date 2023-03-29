import React from 'react'
import classes from './ Evaluate.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

import Rectangle1 from '../../../../../image/Rectangle1.png'
import Rectangle2 from '../../../../../image/Rectangle2.png'
import Rectangle3 from '../../../../../image/Rectangle3.png'

const data = [Rectangle1, Rectangle2, Rectangle3]

const  Evaluate = () => {
  return (
    <div className={classes.container}> 
        <div className={classes.rowBetween}>
            <div className={classes.left}>
                <div className={classes.contentText}>
                    <p className={classes.title}>Đánh Giá</p>
                    <p className={clsx(classes.title, classes.color)}>Độc Quyền</p>
                </div>
                <p className={classes.text}>
                    BlueStar sử dụng phương pháp kết hợp giữa đánh giá của đội ngũ chuyên gia và hệ thống đánh giá định lượng thành 6 tiêu chí lớn quan trọng và cần thiết để dự báo tiềm năng và cơ hội đầu tư đối với từng cổ phiếu trong tương lai.
                    Bộ tiêu chí đầu tư và phương pháp luận được đúc kết và tổng hợp theo các tiêu chuẩn đầu tư cao nhất trên thế giới được các huyền thoại đầu tư sử dụng như: Warren Buffett, Charlie Munger hay Peter Lynch...
                    Bộ tiêu chí đầu tư của BlueStar là sản phẩm độc quyền và duy nhất tại Việt Nam đã được đăng ký sở hữu trí tuệ.
                </p>
            </div>
            <div className={classes.right}>
                {data && data.map((item, index)=>(
                    <div key={index} className={classes.item}>
                        <Image alt='img' 
                            src={item}
                            className={clsx(
                                classes.img,
                                item === data[1] && classes.img1,
                                item === data[2] && classes.img2,
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>  
  )
}

export default  Evaluate