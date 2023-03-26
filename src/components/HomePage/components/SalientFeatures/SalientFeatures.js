import React from 'react'
import classes from './SalientFeatures.module.scss'
import Image from 'next/image'

//img
import imgCheck from '../../../../../image/star-check-mark.png'
import imgMessages from '../../../../../image/Messages.png'
import imgChart from '../../../../../image/table-edit-chart.png'

const data = [{
    id: 1,
    img: imgCheck,
    text: 'Thông tin hữu ích',
    description: 'Nền tảng BlueStar cung cấp thông tin giúp việc xây dựng chiến lược đầu tư toàn diện của bạn trở nên dễ dàng hơn bao giờ hết.'
}, {
    id: 2,
    img: imgChart,
    text: 'Phân tích dữ liệu',
    description: 'Giúp nhà đầu tư tự tin trong việc ra quyết định nhờ được tiếp sức bởi cam kết của chúng tôi về các nghiên cứu hệ thống nhất quán'
},{
    id: 3,
    img: imgMessages,
    text: 'Đa dạng nội dung',
    description: 'Đa dạng tin tức về xu hướng ngành, lợi thế cạnh tranh của doanh nghiệp cùng các quan điểm của nhà đầu tư chuyên nghiệp, quỹ.'
}]
const SalientFeatures = () => {
  return (
    <div className={classes.container}>
        <p className={classes.title}>
            Tính Năng Nổi Bật
        </p>
        <div className={classes.row}>
            {data && data.map((item,index)=>(
                <div className={classes.content} key={`${item.id}-${index}`}>
                    <div className={classes.contentImg}>
                        <div className={classes.image}>
                            <Image 
                                alt='img'
                                src={item?.img}
                                className={classes.img}
                            />
                        </div>
                    </div>
                    <p className={classes.text}>{item?.text}</p>
                    <p className={classes.description}>{item?.description}</p>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default SalientFeatures