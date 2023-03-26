import React from 'react'
import classes from './Button.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

const Button = ({text, customBtn, customText, onClick}) => {
  return (
        <Link className={clsx(classes.btn, customBtn)} onClick={onClick}>
            <p className={clsx(classes.title, customText)}>{text}</p>
        </Link>
  )
}

export default Button