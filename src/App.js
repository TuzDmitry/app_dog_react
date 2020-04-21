import React from 'react';
import style from './App.module.css';
import FieldContainer from "./components/Container/FieldContainer";
import Counter from "./components/Counter/Counter";
import song from './assets/dog.mp3'

class App extends React.Component {

    componentDidMount() {
        setInterval(this.getRandomImageIndex, 1000)
    }

    state = {
        dogs: [
            {id: 0},
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6},
            {id: 7},
            {id: 8}
        ],
        counterValue: 0,
        randomVal: 0
    };

    getRandomImageIndex = () => {
        let randomNumb = Math.floor(Math.random() * 9);
        this.setState({randomVal: randomNumb})
    }

    catchDog = (ourTarget) => {
        let audio = new Audio(song)
        audio.currentTime = 0;

        if (ourTarget === this.state.randomVal) {
            audio.play();
            this.setState({counterValue: this.state.counterValue + 1})
        }
    }

    render = () => {
        return (
            <div className={style.App}>
                <div>The Game is "Catch if you can"</div>
                <FieldContainer state={this.state} catchDog={this.catchDog}/>
                <Counter state={this.state.counterValue}/>
            </div>
        );
    }
}

export default App;
