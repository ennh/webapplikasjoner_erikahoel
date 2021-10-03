import React, { useState } from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';


export default function App() {
    const food = ['Pizza', 'Hamburger', 'Coke'];
    const foodList = food.map(food => <li> {food} </li>)
    const detFunker = "It Works"

    const [inputFromChild, setInputFromChild] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    return (

    <div className="App">

        <MyComponent title = {detFunker}/>

        <Food foodList = {foodList} />
        
        <Wrapper className="flex"> 
            <p>Hello!</p>
            <p>How are you?</p>
            <p>Im good.</p> 
        </Wrapper>

        <Alert input = {setInputFromChild} clicked = {setIsClicked} />
            {isClicked ? (<p>{inputFromChild}</p>) : (<p></p>)}   
    </div>

    );
};


