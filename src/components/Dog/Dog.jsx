import React from 'react';
import style from './Dog.module.css';
import im from '../../assets/dog.jpg'

class Dog extends React.Component {

    gav = () => {
        this.props.catchDog(this.props.id);
    }

    render = () => {

        let classForDog = this.props.random === this.props.id ? `${style.photo} ${style.show}` : `${style.photo}`;
        return (
            <div onClick={this.gav} className={style.item}>
                <img src={im} className={classForDog} alt=""/>
            </div>
        );
    }
}

export default Dog;
