import React, { useState } from 'react';
import classes from './Staking.module.css';
import stakeIcon from '../assets/stake.png';
import unstakeIcon from '../assets/unstake.png';
import icon from '../assets/icon.png';

const Staking = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [blockaddress, setblockaddress] = useState('');
  const [UnstakeinputValue, setunstakeInputValue] = useState('');

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    props.inputHandler(event.target.value);
  };

  const UnstakeinputChangeHandler = (event) => {
    event.preventDefault();
    setunstakeInputValue(event.target.value);
    props.inputHandler(event.target.value);
  };

  const goMax = () => {
    setInputValue(props.userBalance);
    props.inputHandler(props.userBalance);
  };

  return (
    <div className={classes.Staking}>
      <img src={icon} alt="logo" className={classes.icon} />
      <h1>Token Staking DAPP</h1>
    <h3>
       <a style={{color:'yellowgreen'}} 
       href={`https://rinkeby.etherscan.io/address/${props.account}`}>{props.account}</a>
      </h3>
      <h3>
        {props.apy}% (APY) - {props.apy / 365}% Daily Earnings
      </h3>
      <h3>
       <a style={{color:'yellowgreen'}} 
       href={`https://rinkeby.etherscan.io/tx/${blockaddress}/`}>View Transaction History!</a>
      </h3>
      <div className={classes.inputDiv}>
        <input
          className={classes.input}
          type="number"
          min="0"
          step="1"
          placeholder='Enter Amount'
          onChange={inputChangeHandler}
          value={inputValue}
        ></input>
      </div>
      <button
        className={classes.stakeButton}
        onClick={() => {
          props.stakeHandler();
          setInputValue('');
        }}
      >
        <img src={stakeIcon} alt="stake icon" className={classes.stakeIcon} />
        <p>Stake</p>
      </button>
      &nbsp; &nbsp;
      <div className={classes.inputDiv}>
        <input
          className={classes.input}
          type="number"
          min="0"
          step="1"
          placeholder='Enter Amount'
          onChange={UnstakeinputChangeHandler}
          value={UnstakeinputValue}
        ></input>
      </div>
      <button className={classes.unstakeButton} onClick={props.unStakeHandler}>
        <img
          src={unstakeIcon}
          alt="unstake icon"
          className={classes.stakeIcon}
        />
        <p>Unstake All</p>
      </button>
      <div className={classes.totals}>
        <h4>
          Total Staked (by all users): {props.totalStaked} Token (Tst)
        </h4>
        <div>&nbsp;</div>
        <h5>My Stake: {props.myStake} Token (Tst) </h5>
        <h5>
          My Estimated Reward:{' '}
          {((props.myStake * props.apy) / 36500).toFixed(3)} Token (Tst)
        </h5>
        <h5 onClick={goMax} className={classes.goMax}>
          My balance: {props.userBalance} Token (Tst)
        </h5>
      </div>
    </div>
  );
};
//My balance: 504304.394968082 Token (Tst)
export default Staking;
