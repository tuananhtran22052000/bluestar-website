import React,{useState} from 'react'
import classes from './SliderBlog.module.scss'
import Slider from 'react-slick'
import VisionMission from '../../../../../image/VisionMission.png'
import Image from 'next/image'
import SliderWrapper from "./_SlickSliderStyle";
const data = [{
    id: 0,
    text:'Chạy quảng cáo chương trình hay cái củ vẹo gì đó ở đây dài thành 2 dòng như thế này thôi',
    img: VisionMission
}
,{
    id: 1,
    text:'Chạy quảng cáo chương trình hay cái củ vẹo gì đó ở đây dài thành 2 dòng như thế này thôi',
    img: VisionMission
},{
    id: 2,
    text:'Chạy quảng cáo chương trình hay cái củ vẹo gì đó ở đây dài thành 2 dòng như thế này thôi',
    img: VisionMission
},{
    id: 3,
    text:'Chạy quảng cáo chương trình hay cái củ vẹo gì đó ở đây dài thành 2 dòng như thế này thôi',
    img: VisionMission
}
]

export default class SliderBlog extends React.Component{
    state = {
        slideIndex: 0,
        updateCount: 0
      };
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: false,
            appendDots: (dots) => <ul>{dots}</ul>,
            customPaging: (i) => (
            <div className="ft-slick__dots--custom">
            </div>
    )
          };
          return (
            <div className={classes.container}>
                <SliderWrapper>
                    <Slider {...settings}>
                    {data && data.map((item,index) =>(
                            <div key={`${item?.id}_${index}`} className={classes.content}>
                                <Image alt='img'
                                    src={item?.img}
                                    className={classes.img}
                                />
                                <p className={classes.title}>{item?.text}</p>
                            </div>
                        ))}
                    </Slider>
                </SliderWrapper>
            </div>
          )
    }

}

// const SliderBlog = () => {
    // const [slideIndex, setSlideIndex] = useState(0)
    // const [updateCount, setUpdateCount] = useState(0)

   
//   return (
//     <div className={classes.container}>
//          <Slider {...settings}>
//          {data && data.map((item,index) =>(
//                 <div key={`${item?.id}_${index}`} className={classes.content}>
//                     <Image alt='img'
//                         src={item?.img}
//                         className={classes.img}
//                     />
//                     <p className={classes.title}>{item?.text}</p>
//                 </div>
//             ))}
//         </Slider>
//     </div>
//   )
// }

// export default SliderBlog