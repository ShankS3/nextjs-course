import { Fragment } from 'react';
import classes from './ErrorAlert.module.css';
import Button from './Button';

function ErrorAlert(props) {
  return (
    <Fragment>
      <div className={classes.alert}>{props.children}</div>;
      <div className='center'>
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>
  );
}

export default ErrorAlert;
