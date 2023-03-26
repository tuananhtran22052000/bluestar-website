import React from 'react'
import classes from './HomePage.module.scss'
import clsx from 'clsx'

import Banner from './components/Banner'
import SalientFeatures from './components/SalientFeatures'
import Evaluate from './components/ Evaluate'
import AboutUs from './components/ AboutUs'
import VisionMission from './components/VisionMission'
import BlueStarTeam from './components/ BlueStarTeam'
import ProductPackages from './components/ProductPackages'
import Header from './components/Header'

export default function HomePage(){
// const HomePage = () =>{

return(
    <div>
        <div className={classes.container}>
        <div>
        <Header />
        </div>
            <div className={classes.banner}>
                <Banner />
            </div>
            <div className={clsx(classes.padding, classes.mrT)}>
                <SalientFeatures />
            </div>
            <div className={classes.padding}>
                <Evaluate />
            </div>
            <div>
                <AboutUs />
            </div>
            <div className={classes.mrVision}>
                <VisionMission />
            </div>
            <div className={classes.padding}>
                <BlueStarTeam />
            </div>
            <div className={classes.padding}>
                <ProductPackages/>
            </div>
        
        </div>
    </div>
)
}
// export default HomePage