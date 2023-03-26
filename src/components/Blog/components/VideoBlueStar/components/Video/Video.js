import React from 'react'
import classes from './Video.module.scss'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), {ssr: false})

const Video = ({dataVideo, autoPlay}) => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            {dataVideo && dataVideo.url 
            && <ReactPlayer 
                    url={dataVideo?.url} 
                    controls={true}
                    // play={autoPlay}
                    playing={autoPlay}
                    width="100%"
                    
                />}
            <div className={classes.contentText}>
                <p className={classes.titleVideo}>{dataVideo?.title}</p>
                <div className={classes.row}>
                    <p className={classes.text}>{dataVideo?.text}</p>
                    <div className={classes.dot} />
                    <p className={classes.text}>{dataVideo?.time}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video