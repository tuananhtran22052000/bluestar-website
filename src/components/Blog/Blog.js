import React from 'react'
import classes from './Blog.module.scss'
import SliderBlog from './components/SliderBlog'
import NewPost from './components/NewPost'
import HotNewsHighlights from './components/HotNewsHighlights'
import Banner from './components/Banner'
import Header from '../HomePage/components/Header'
import VideoBlueStar from './components/VideoBlueStar'


import VisionMission from '../../../image/VisionMission.png'
import backgroundVision from  '../../../image/backgroundVision.png' 

const dataNews=[{
    id: 1,
    img: VisionMission,
    title: 'Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện nay (tối đa 3 dòng...) Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện nay ',
    text: 'Khu vực này là content sẽ được hiển thị như preview. Tuy nhiên cũng giới hạn hiển thị. Tương tự như ở trên, tối đa 2 dòng...',
    status: 'Category name',
    date: 20231101,
},
{
    id: 2,
    img: VisionMission,
    title: 'Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện nay (tối đa 3 dòng...)',
    text: 'Khu vực này là content sẽ được hiển thị như preview. Tuy nhiên cũng giới hạn hiển thị. Tương tự như ở trên, tối đa 2 dòng...',
    status: 'Category name',
    date: 20231101,
},{
    id: 3,
    img: VisionMission,
    title: 'Triển vọng phát triển lâu dài của những ngành đang nóng trên thị trường hiện nay (tối đa 3 dòng...)',
    text: 'Khu vực này là content sẽ được hiển thị như preview. Tuy nhiên cũng giới hạn hiển thị. Tương tự như ở trên, tối đa 2 dòng...',
    status: 'Category name',
    date: 20231101,
}]
const dataHighlights=[{
    id: 1,
    label: 'Category 01'
},{
    id: 2,
    label: 'Category 02'
},{
    id: 3,
    label: 'Category 03'
},{
    id: 4,
    label: 'Category 04'
},{
    id: 5,
    label: 'Category 05'
}]

const Blog = () => {
  return (
    <div className={classes.container}>
        <Header />
        <div className={classes.ContentSlide}>
            <SliderBlog />
        </div>
        <div className={classes.padding}>
            <div>
                <NewPost />
            </div>
           <div className={classes.mrT40}>
                <HotNewsHighlights 
                    titleNew={'Tin nổi bật'}
                     dataNews={dataNews}
                     srcBanner={VisionMission}
                     titleHigh={'Chuyên mục nổi bật từ BlueStar'}
                     dataHighlights={dataHighlights}
                />
           </div>
           <div className={classes.banner}>
            <Banner src={backgroundVision} />
           </div>
           <div className={classes.mrT40}>
                <VideoBlueStar/>
           </div>
           <div className={classes.mr}>
                <HotNewsHighlights 
                    titleNew={'Những người khác cũng đọc'}
                     dataNews={dataNews}
                     srcBanner={VisionMission}
                     titleHigh={'Chuyên mục nổi bật từ BlueStar'}
                     dataHighlights={dataHighlights}
                />
           </div>
        </div>
    </div>
  )
}

export default Blog