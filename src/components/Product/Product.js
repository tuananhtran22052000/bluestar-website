import React from 'react'
import classes from './Product.module.scss'
import Header from '../HomePage/components/Header'
import PlatformInvestors from './components/PlatformInvestors'
import Introduce from './components/Introduce'
import ImageProduct from './components/ImageProduct'

const Product = () => {
  return (
    <div className={classes.container} >
        <div className={classes.content}>
            <Header  customHeader={classes.header}/>
            <div className={classes.Platform}>
                <PlatformInvestors />
            </div>
        </div>
        <div className={classes.introduce}>
            <Introduce />
        </div>
        <div>
        <ImageProduct />
            
        </div>
    </div>
  )
}

export default Product