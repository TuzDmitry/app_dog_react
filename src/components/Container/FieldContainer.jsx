import React from 'react';
import style from './FieldContainer.module.css';
import Dog from "../Dog/Dog";

class FieldContainer extends React.Component {
    render = () => {
        let dogs = this.props.state.dogs.map(dog => <Dog key={dog.id}
                                                         id={dog.id}
                                                         catchDog={this.props.catchDog}
                                                         random={this.props.state.randomVal}/>)
        return (
            <div className={style.wrapper}>
                {dogs}
            </div>
        );
    }
}

export default FieldContainer;
