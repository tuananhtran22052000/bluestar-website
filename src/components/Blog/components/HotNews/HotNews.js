import React from 'react'
import classes from './HotNews.module.scss'
import Image from 'next/image'
import moment from 'moment'

const HotNews = ({title, dataNews}) => {
  return (
    <div className={classes.container}>
        <div className={classes.rowBetween}>
            <p className={classes.title}>{title}</p>
            <a href='#' className={classes.link}>Xem tất cả</a>
        </div>
        <div className={classes.content}>
            {dataNews && dataNews.slice(0, 3).map((item, index) =>(
                <div key={`${item?.id}_${index}`} className={classes.item}>
                    <Image alt='img' 
                        src={item?.img}
                        className={classes.img}
                    />
                    <div className={classes.contentText}>
                        <p className={classes.title}>{item?.title}</p>
                        <p className={classes.text}>{item?.text}</p>
                        <div className={classes.row}>
                            <p className={classes.status}>
                                {item?.status}
                            </p>
                            <div className={classes.dot} />
                            <p className={classes.date}>{moment(item?.date,'YYYYMMDD').format('DD/MM/YYYY')}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HotNews