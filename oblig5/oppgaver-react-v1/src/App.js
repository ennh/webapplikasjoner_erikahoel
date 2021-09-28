import React from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';


export default function App() {
    const food = ['Pizza', 'Hamburger', 'Coke'];
    const foodList = food.map(food => <li> {food} </li>)
    const detFunker = "It Works"

    return (
    <div className="App">
        <MyComponent title = {detFunker}/>

        <Food foodList = {foodList} />

        <Wrapper> 
            
            <p>Hello</p>
            <p>Hello</p>
        
        </Wrapper>
    </div>

    );
}

