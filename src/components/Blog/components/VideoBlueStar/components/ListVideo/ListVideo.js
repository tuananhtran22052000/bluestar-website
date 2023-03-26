import React, { useMemo } from 'react'
import classes from './ListVideo.module.scss'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), {ssr: false})

 const ListVideo = ({data, handleClick}) => {
 
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            {data && data.slice(1,6).map((item, index)=>(
                <div key={`${item?.id}_${index}`} className={classes.item} onClick={()=>handleClick(item)}>
                    <div className={classes.video}>
                    {item && item.url 
                    && <ReactPlayer 
                            url={item?.url} 
                            controls={true}
                            width = '132px'
                            height = '74px'
                            light = {true}
                            playIcon= {<div />}
                        />}
                    </div>
                    <div className={classes.contentText}>
                        <p className={classes.title}>{item?.title}</p>
                        <div className={classes.row}>
                            <p className={classes.text}>{item?.text}</p>
                            <div className={classes.dot} />
                            <p className={classes.text}>{item?.time}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default ListVideo
