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
            <div className={classes.content}>
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
                <p className={classes.description}>
                    Mô tả về gói trong vài dòng ngắn gọn, có thể hiển thị tối đa đến 3 dòng. Nếu nhiều hơn thì ấn vào button Tải xuống ứng dụng để xem full mô tả.
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
                <p className={classes.description}>
                Mô tả về gói trong vài dòng ngắn gọn, có thể hiển thị tối đa đến 3 dòng. Nếu nhiều hơn thì ấn vào button Tải xuống ứng dụng để xem full mô tả.
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductPackages