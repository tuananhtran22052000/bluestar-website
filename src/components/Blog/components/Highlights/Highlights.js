import React from 'react'
import classes from './Highlights.module.scss'
import Image from 'next/image'

const Highlights = ({srcBanner,title, dataHighlights}) => {
  return (
    <div className={classes.container}>
        <Image alt='img' className={classes.img} src={srcBanner} />
       
        <div className={classes.content}>
          <p className={classes.title}>
                  {title}
          </p>
            {dataHighlights && dataHighlights.map((item, index) =>(
                <div key={`${item?.id}_${index}`} className={classes.item}>
                    <p className={classes.label}>{item?.label}</p>
                    <p className={classes.text}>(30)</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Highlights