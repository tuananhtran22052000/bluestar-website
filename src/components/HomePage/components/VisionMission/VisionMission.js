import React from 'react'
import classes from './VisionMission.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

import visionMission from '../../../../../image/VisionMission.png'

const VisionMission = () => {
  return (
    <div className={classes.container}>
        <div className={classes.row}>
            <div className={classes.contentImg}>
                <Image 
                    alt='img'
                    src={visionMission}
                    className={classes.img}
                />
            </div>
            <div className={classes.content}>
              <p className={classes.title}>
                Tầm Nhìn & Sứ Mệnh
              </p>
              <p className={classes.text}>
                  Chúng tôi hiểu rằng, đầu tư là một kỹ năng thiết yếu mà mỗi chúng ta cần được trang bị càng sớm càng tốt. 
                  Trong xã hội càng phát triển, thu nhập người dân tăng lên thì nhu cầu tiết kiệm và đầu tư để đa dạng hóa và gia tăng lợi nhuận sẽ ngày càng tăng. 
                  Cùng với sự phát triển của Thị trường chứng khoán Việt Nam những năm gần đây, những thay đổi lớn trong cuộc cách mạng công nghệ giúp cho nhà đầu tư dễ dàng tiếp cận hơn các công cụ tài chính, sản phẩm đầu tư, 
                  đội ngũ tư vấn. Tuy nhiên, thị trường tài chính còn non trẻ, các sản phẩm đầu tư chưa thực sự chất lượng, các tiêu chuẩn nghề nghiệp chưa cao đã phần nào làm mất niềm tin của nhiều nhà đầu tư trên thị trường. 
                  Hiểu được những thách thức, khó khăn và nỗi đau nhà đầu tư gặp phải, chúng tôi nỗ lực không ngừng để tất cả mọi người được tiếp cận thông tin một cách bình đẳng như các nhà đầu tư chuyên nghiệp, giúp nhà đầu tư chủ động hơn trong các lựa chọn của mình thông qua các hiểu biết sâu sắc về kinh tế và đầu tư.
              </p>
            </div>
        </div>
    </div>
  )
}

export default VisionMission