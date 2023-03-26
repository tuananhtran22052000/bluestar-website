import React from 'react'
import classes from './HotNewsHighlights.module.scss'
import HotNews from '../HotNews/HotNews'
import Highlights from '../Highlights/Highlights'

const HotNewsHighlights = ({titleNew, dataNews, srcBanner,titleHigh, dataHighlights}) => {
  return (
    <div className={classes.container}>
        <div className={classes.row}>
            <div className={classes.left}>
                <HotNews 
                    title={titleNew}
                    dataNews={dataNews}
                />
            </div>
            <div className={classes.right}>
                <Highlights 
                    srcBanner={srcBanner}
                    title={titleHigh}
                     dataHighlights={dataHighlights}
                />
            </div>
        </div>
    </div>
  )
}

export default HotNewsHighlights