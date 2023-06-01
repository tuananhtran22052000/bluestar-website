import React from 'react'
import classes from './PrimaryButton.module.scss'
import clsx from 'clsx'

const PrimaryButton = ({className, classNameTitle, title, onClick}) => {
  return (
    <a onClick={onClick}>
      <div className={clsx(classes.container, className)}>
          <div className={classes.background} />
          <p className={clsx(classes.title, classNameTitle)}>
              {title}
          </p>
      </div>
    </a>
  )
}

export default PrimaryButton