import React, {useState} from 'react'
import classes from './Header.module.scss'
import PrimaryButton from 'app//commons/PrimaryButton'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
// images
import logoLandscape from '../../../../../image/logo-landscape.png'
import { useRouter } from 'next/router'
import menuMobile from '../../../../../image/menuMobile.svg'
import iconClose from '../../../../../image/closeIcon.svg'

export default function Header({customHeader}){
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  console.log('useRouter',router)

  const handleClick =() =>{
    setOpenMenu(false)
  }
  return (
    <div className={clsx(classes.container, customHeader)}>
        <div className={classes.contentImg}>
          <Link href={'/'}>
          <Image 
              src={logoLandscape}
              alt="img"
              className={classes.img}
          />
        </Link>
        </div>
        
        <div className={classes.rowBetween}>
          {/* <Link href={'/product'} className={clsx(classes.menu, router?.asPath ==='/product' && classes.linkActive)}>Sản phẩm</Link>
          <Link href={'/blog'} className={clsx(classes.menu, classes.mrBtn, router?.asPath ==='/blog' && classes.linkActive)} >Blog</Link> */}
          <PrimaryButton 
              title={'Tải ứng dụng'}
              className={classes.primary}
          />
        </div>

       {!openMenu && <div className={classes.menuMobile} onClick={()=>setOpenMenu(true)}>
          <Image 
                src={menuMobile}
                alt="img"
                className={classes.imgMenu}
            />
        </div>}
        {/* {openMenu  
        && <div className={classes.menu}>
            <div className={classes.close} >
            <Image 
                  src={iconClose}
                  alt="img"
                  className={classes.imgMenu}
                  onClick={()=>setOpenMenu(false)}
              />
            </div>
            <div className={classes.contentMenu}>
              <Link href={'/product'} className={clsx(classes.textMenu, router?.asPath ==='/product' && classes.textLinkActive)} onClick={handleClick}>Sản phẩm</Link>
              <Link href={'/blog'} className={clsx(classes.textMenu, classes.mrBtn, router?.asPath ==='/blog' && classes.textLinkActive)} onClick={handleClick}>Blog</Link>
              <a className={classes.textMenu} onClick={handleClick}>Tải ứng dụng</a>
            </div>
           </div>
        } */}
        {/* {openMenu && <div className={classes.blur} onClick={()=>setOpenMenu(false)} />} */}
        
    </div>
  )
}

// export default Header