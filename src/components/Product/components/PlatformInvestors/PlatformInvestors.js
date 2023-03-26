import clsx from 'clsx'
import React from 'react'
import classes from './PlatformInvestors.module.scss'
import Image from 'next/image'

import Rectangle2 from '../../../../../image/Rectangle2.png'

const PlatformInvestors = () => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.left}>
                <div className={classes.row}>
                    <p className={classes.title}>
                        BlueStar - Nền tảng cho nhà đầu tư 
                    </p>
                    <p className={clsx(classes.title, classes.color)}>
                        Thành Công
                    </p>
                </div>
                <p className={classes.text}>
                    Sở hữu BỘ TIÊU CHÍ ĐẦU TƯ TOÀN DIỆN - ĐỘC QUYỀN và DUY NHẤT tại Việt Nam gồm 6 tiêu chí lớn và 36 tiêu chí con theo tiêu chuẩn quốc tế đã được đăng ký sở hữu trí tuệ
                </p>
                <p className={classes.text}>
                    Ứng dụng BlueStar là nền tảng giúp tất cả mọi người được tiếp cận thông tin một cách bình đẳng như các nhà đầu tư chuyên nghiệp, giúp nhà đầu tư chủ động hơn trong các lựa chọn của mình thông qua các hiểu biết sâu sắc về kinh tế và đầu tư. Chúng tôi cung cấp thông tin chi tiết hữu ích về ngành, về doanh nghiệp từ nghiên cứu độc lập của chúng tôi giúp việc xây dựng chiến lược đầu tư toàn diện của bạn trở nên dễ dàng hơn bao giờ hết.
                </p>
            </div>
            <div className={classes.right}>
                <Image alt='img' className={classes.img} src={Rectangle2}/>
                <Image alt='img' className={classes.img1} src={Rectangle2}/>
                <Image alt='img' className={classes.img2} src={Rectangle2}/>
            </div>
        </div>
    </div>
  )
}

export default PlatformInvestors