import './App.css';
import React from "react";
import {connect} from "react-redux";
import {decrement, increment} from "./actions";

function App(props) {

    function handleIncrement() {
        props.incrementCount(1);
    }

    function handleDecrement() {
        props.decrementCount(1);
    }

    return (
        <div className="App">
            <div>{props.counter}</div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: number => dispatch(increment(number)),
        decrementCount: number => dispatch(decrement(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
