import React, { useState } from 'react';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const [poolStatus, setPoolStatus] = useState('default');

  const changePool = (val) => {
    if (val === poolStatus) {
    } else {
      setPoolStatus(val);
      props.changePage();
    }
  };

  return (
    <div className={classes.navigation}>
      <button
        className={
          poolStatus === 'default'
            ? classes.buttonActive
            : classes.buttonNonActive
        }
        onClick={() => {
          changePool('default');
          props.isStaking(true);
        }}
      >
        Staking
      </button>
      <button
        className={
          poolStatus === 'custom'
            ? classes.buttonActive
            : classes.buttonNonActive
        }
        onClick={() => {
          props.isStaking(false)
        }}
      >
        Borrow
      </button>
    </div>
  );
};

export default Navigation;
