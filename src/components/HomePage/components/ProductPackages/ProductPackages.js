import React from 'react'
import classes from './ProductPackages.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import egg from '../../../../../image/egg.png'
import diamond from '../../../../../image/diamond.png'

const ProductPackages = () => {
  return (
    <div className={classes.container}>
        <p className={classes.title}>Các gói sản phẩm</p>
        <div className={classes.row}>
            <div className={clsx(classes.content, classes.contPd)}>
                <div className={classes.contentRow}>
                    <div className={classes.contentImg}>
                        <Image alt='img' 
                            className={classes.img}
                            src={egg}
                        />
                    </div>
                    <div>
                        <p className={classes.label}>Gói Cơ Bản</p>
                        <p className={classes.text}>Miễn phí</p>
                    </div>
                </div>
                <p className={classes.description1}>
                    Trải nghiệm miễn phí các tính năng cơ bản của BlueStar để tự mình lập kế hoạch đầu tư, đánh giá cổ phiếu và chia sẻ các thông tin hữu ích với bạn bè.
                </p>
            </div>
            <div className={classes.content}>
                <div className={classes.contentRow}>
                    <div className={classes.contentImg}>
                        <Image alt='img' 
                            className={classes.img}
                            src={diamond}
                        />
                    </div>
                    <div>
                        <p className={classes.label}>Gói Cơ Bản</p>
                        <div className={classes.rowPack}>
                            <div className={classes.package}>3 tháng</div>
                            <div className={clsx(classes.package, classes.mr5)}>6 tháng</div>
                            <div className={classes.package}>12 tháng</div>
                        </div>
                    </div>
                </div>
                <p className={classes.description1}>
                Sử dụng tất cả các tính năng của BlueStar như một nhà đầu tư chuyên nghiệp đồng thời được trải nghiệm các sản phẩm đầu tư độc quyền và mới nhất.
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductPackages