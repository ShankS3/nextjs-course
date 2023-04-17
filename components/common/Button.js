import Link from 'next/link';
import React from 'react'
import classes from './Button.module.css';

function Button({children, link}) {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
}

export default Button;