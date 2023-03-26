import React from 'react'
import classes from './ BlueStarTeam.module.scss'
import Rectangle22 from '../../../../../image/Rectangle22.png'
import Image from 'next/image'
import clsx from 'clsx'

const data = [{
    id: 1,
    img: Rectangle22,
    title: 'title',
    name: 'Nguyễn Văn A'
},{
    id: 2,
    img: Rectangle22,
    title: 'title',
    name: 'Nguyễn Văn A'
},{
    id: 3,
    img: Rectangle22,
    title: 'title',
    name: 'Nguyễn Văn A'
},{
    id: 4,
    img: Rectangle22,
    title: 'title',
    name: 'Nguyễn Văn A'
},{
    id: 5,
    img: Rectangle22,
    title: 'title',
    name: 'Nguyễn Văn A'
},{
    id: 6,
    img: Rectangle22,
    title: 'title',
    name: 'Nguyễn Văn A'
},{
    id: 7,
    img: Rectangle22,
    title: 'title',
    name: 'Nguyễn Văn A'
},{
    id: 8,
    img: Rectangle22,
    title: 'title',
    name: 'Nguyễn Văn A'
}]
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