import React from 'react';
import style from './Counter.module.css';

class Counter extends React.Component {
    render = () => {
        let oneOrMore = this.props.state === 1 ? "time" : "times"

        return (
            <div className={style.counter}>
                You catched
                {` ${this.props.state} `}
                {oneOrMore}
            </div>
        );
    }
}


export default Counter;
