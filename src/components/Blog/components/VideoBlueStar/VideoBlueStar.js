import React, {useState} from 'react'
import classes from './VideoBlueStar.module.scss'
import Video from './components/Video'
import ListVideo from './components/ListVideo'

const data = [{
    id: 1,
    title: 'Hướng dẫn thiết lập tài khoản & danh mục để nhận điểm và tư vấn từ BlueStar',
    text: 'Tên chuyên mục',
    time: '2 ngày trước',
    url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
},{
    id: 2,
    title: 'Hướng dẫn thiết lập tài khoản & danh mục để nhận điểm và tư vấn từ BlueStar tuana nah',
    text: 'Tên chuyên mục',
    time: '2 ngày trước',
    url:'https://www.youtube.com/watch?v=Zmll4V4eOVc&list=RDZmll4V4eOVc&t=4s'
},{
    id: 3,
    title: 'Hướng dẫn thiết lập tài khoản & danh mục để nhận điểm và tư vấn từ BlueStar',
    text: 'Tên chuyên mục',
    time: '2 ngày trước',
    url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
},{
    id: 4,
    title: 'Hướng dẫn thiết lập tài khoản & danh mục để nhận điểm và tư vấn từ BlueStar',
    text: 'Tên chuyên mục',
    time: '2 ngày trước',
    url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
},{
    id: 5,
    title: 'Hướng dẫn thiết lập tài khoản & danh mục để nhận điểm và tư vấn từ BlueStar',
    text: 'Tên chuyên mục',
    time: '2 ngày trước',
    url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
},{
    id: 6,
    title: 'Hướng dẫn thiết lập tài khoản & danh mục để nhận điểm và tư vấn từ BlueStar',
    text: 'Tên chuyên mục',
    time: '2 ngày trước',
    url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
},{
    id: 7,
    title: 'Hướng dẫn thiết lập tài khoản & danh mục để nhận điểm và tư vấn từ BlueStar',
    text: 'Tên chuyên mục',
    time: '2 ngày trước',
    url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
}]
const VideoBlueStar = () => {
    const [video, setVideo] = useState(data[0])
    const [autoPlay, setAuto] = useState(false)

    const handleClickVideo= (itemVideo)=>{
        setVideo(itemVideo)
        setAuto(true)
    }
  return (
    <div className={classes.container}>
        <div className={classes.rowBetween}>
            <p className={classes.title}>Video từ BlueStar</p>
            <a className={classes.link}>Xem tất cả</a>
        </div>
        <div className={classes.row}>
            <div className={classes.left}>
                <Video 
                    dataVideo={video}
                    autoPlay={autoPlay}
                />
            </div>
            <div className={classes.right}>
                <ListVideo 
                    data={data}
                    handleClick={handleClickVideo}
                />
            </div>
        </div>
    </div>
  )
}

export default VideoBlueStar