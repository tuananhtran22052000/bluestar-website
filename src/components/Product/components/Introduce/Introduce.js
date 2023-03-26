import React from 'react'
import classes from './Introduce.module.scss'

const data=[{
    id: 1,
    title: 'Tiếp cận thông tin bình đẳng như nhà đầu tư chuyên nghiệp',
    label: [
        'Hệ thống tin tức hiển thi khoa học, được sắp xếp hợp lý giúp nhà đầu tư dễ dàng tiếp cận thông tin đa chiều',
        'Cập nhật tin tức thị trường trong nước và quốc tế',
        'Cập nhật lịch sự kiện doanh nghiệp',
        'Cập nhật biến động ngành'
    ]
},{
    id: 2,
    title: 'Hỗ trợ tìm kiếm cơ hội đầu tư tốt nhất',
    label: [
        'Nhận diện cơ hội đầu tư đơn giản và nhanh chóng với Bluestar Rating bên cạnh mỗi cổ phiếu',
        'Dễ dàng tra cứu, tìm hiểu mô hình kinh doanh của doanh nghiệp',
        'Top danh mục đầu tư được cập nhật liên tục với các tiêu chí rõ ràng, khách quan, minh bạch',
        'Khám phá xu hướng các danh mục định kỳ'
    ]
},{
    id: 3,
    title: 'Đánh giá toàn diện cơ hội đầu tư với ',
    label: [
        'Quản lý rủi ro đầu tư trong danh mục của bạn',
        'Quản lý tin tức, sự kiện ảnh hưởng tới danh mục đầu tư của bạn',
        'Đánh giá danh mục đầu tư',
    ]
},{
    id: 4,
    title: 'Tiếp cận thông tin bình đẳng như nhà đầu tư chuyên nghiệp',
    label: [
        'Bộ 36 tiêu chí đánh giá theo tiêu chuẩn quốc tế ĐỘC QUYỀN và DUY NHẤT tại Việt Nam đã được đăng ký sở hữu trí tuệ.',
        'Tự lập kế hoạch đầu tư một cách chuyên nghiệp và chia sẻ với bạn bè.',
    ]
}]

const colors = ['#0937B8','#4BD83A',' #019C8C',  '#0461AA']
const Introduce = () => {
  return (
    <div className={classes.container}>
        {data && data.map((item, index)=>(
            <div key={item?.id} className={(classes.item)}>
                <div style={{backgroundColor: colors[index], height: '6px', marginBottom: '29px'}} />
                <p className={classes.title}>{item?.title}</p>
                <div className={classes.content}>
                    {item?.label?.map((iText, indexText)=>(
                        <p key={indexText} className={classes.text}>-{iText}</p>
                    ))}
                </div>
                <div style={{backgroundColor: colors[index], height: '6px', marginTop: '29px'}} />
            </div>
        ))}
    </div>
  )
}

export default Introduce