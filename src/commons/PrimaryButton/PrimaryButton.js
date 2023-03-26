import React from 'react'
import classes from './PrimaryButton.module.scss'
import clsx from 'clsx'

const PrimaryButton = ({className, classNameTitle, title}) => {
  return (
    <div className={clsx(classes.container, className)}>
        <div className={classes.background} />
        <p className={clsx(classes.title, classNameTitle)}>
            {title}
        </p>
    </div>
  )
}

export default PrimaryButton