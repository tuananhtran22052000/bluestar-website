import React from 'react'
import classes from './ BlueStarTeam.module.scss'

import Image from 'next/image'
import clsx from 'clsx'

//img 
import NgaNguyen from '../../../../../image/NgaNguyen.png'
import DucCao from '../../../../../image/DucCao.png'
import HoaTran from '../../../../../image/HoaTran.png'
import HuongVu from '../../../../../image/HuongVu.png'
import NamNguyen from '../../../../../image/NamNguyen.png'
import QuangAnhPham from '../../../../../image/QuangAnhPham.png'
import BachPham from '../../../../../image/BachPham.png'


const data = [{
    id: 1,
    img: BachPham,
    title: 'Founder & CEO',
    name: 'Bach Pham'
},{
    id: 2,
    img: HuongVu,
    title: 'Founder & COO',
    name: 'Huong Vu'
}
// ,{
//     id: 3,
//     img: QuangAnhPham,
//     title: 'Founder & CFO',
//     name: 'Quang Anh Pham'
// },{
//     id: 4,
//     img: NamNguyen,
//     title: 'Founder & CIO',
//     name: 'Nam Nguyen'
// },{
//     id: 5,
//     img: DucCao,
//     title: 'Founder & CIO',
//     name: 'Duc Cao'
// },{
//     id: 6,
//     img: HoaTran,
//     title: 'Founder & CIO',
//     name: 'Hoa Tran'
// },{
//     id: 7,
//     img: NgaNguyen,
//     title: 'Founder & CCO',
//     name: 'Nga Nguyen'
// }
]
const  BlueStarTeam = () => {
  return (
    <div className={classes.container}> 
    <div className={classes.row}>
        <p className={classes.title}>Đội Ngũ</p>
        <p className={clsx(classes.title, classes.color)}>BlueStar</p>
    </div>
    <div className={classes.content}>
        {data && data.map((item, index) =>(
            <div key={`${item.id}_${index}`} className={classes.item}>
                <Image 
                    alt='img'
                    src={item?.img}
                    className={classes.img}
                />
                <p className={classes.name}>{item?.name}</p>
                <p className={classes.text}>{item?.title}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default  BlueStarTeam