import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from '../actions';

class Clock extends Component {
    componentDidMount(){
        setInterval(this.props.tick, 1000);
    }

    render(){
        console.log('Clock Props:', this.props);

        return (
            <h1>{this.props.time}</h1>
        );
    }
}

function mapStateToProps(state){
    return {
        time: state.clock.time
    }
}

export default connect(mapStateToProps, { tick: tick })(Clock);
