import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick, setTextColor } from '../actions';

class Clock extends Component {
    componentDidMount(){
        setInterval(this.props.tick, 1000);
    }

    render(){
        // console.log('Clock Props:', this.props);
        const { time, date, setTextColor } = this.props;

        const style = {
            color: this.props.textColor
        }

        return (
            <div style={style}>
                <h1>{time}</h1>
                <h2>{date}</h2>
                <button onClick={() => setTextColor('red')}>Red</button> 
                <button onClick={() => setTextColor('green')}>Green</button> 
                <button onClick={() => setTextColor('yellow')}>Yellow</button>
            </div>
            
        );
    }
}

function mapStateToProps(state){
    console.log('State:', state);

    return {
        date: state.clock.date,
        time: state.clock.time,
        textColor: state.theme.textColor
    }
}

export default connect(mapStateToProps, { 
    tick: tick,
    setTextColor: setTextColor
})(Clock);
