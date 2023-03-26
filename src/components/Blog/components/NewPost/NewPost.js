import React from 'react'
import classes from './NewPost.module.scss'
import VisionMission from '../../../../../image/VisionMission.png'
import Image from 'next/image'
const data=[{
    id: 1,
    text:'Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện...',
    status: 'Phân tích ngành',
    time:'4 phút trước',
    img:VisionMission
},{
    id: 2,
    text:'Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện...',
    status: 'Phân tích ngành',
    time:'4 phút trước',
    img:VisionMission
},{
    id: 3,
    text:'Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện...',
    status: 'Phân tích ngành',
    time:'4 phút trước',
    img:VisionMission
},{
    id: 4,
    text:'Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện...',
    status: 'Phân tích ngành',
    time:'4 phút trước',
    img:VisionMission
},{
    id: 5,
    text:'Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện...',
    status: 'Phân tích ngành',
    time:'4 phút trước',
    img:VisionMission
}]
const NewPost = () => {
  return (
    <div className={classes.container}>
        <div className={classes.contentRow}>
            <div className={classes.left}>
                <Image alt={'img'} 
                    src={data[0]?.img}
                    className={classes.img}
                />
                <div className={classes.content}>
                    <p className={classes.title}>{data[0]?.text}</p>
                    <div className={classes.row}>
                        <p className={classes.status}>{data[0]?.status}</p>
                        <div className={classes.contentTime}>
                            <div className={classes.dot} />
                            <p className={classes.time}>{data[0]?.time}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <p className={classes.title}>Bài viết mới nhất</p>
                {data && data.slice(1,5).map((item, index)=>(
                    <div key={`${item?.id}_${index}`} className={classes.item}>
                        <div className={classes.row}>
                            <Image alt='img' 
                                src={item?.img}
                                className={classes.img}
                            />
                            <div className={classes.content}>
                                <p className={classes.text}>{item?.text}</p>
                                <div className={classes.row}>
                                    <p className={classes.status}>{item?.status}</p>
                                    <div className={classes.contentTime}>
                                        <div className={classes.dot} />
                                        <p className={classes.time}>{item?.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewPost