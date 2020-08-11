import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {watchDecrement, watchIncrement} from '../actions';

export class Main extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{backgroundColor: 'pink', alignItems: 'center', width: '100%'}}
          onPress={() => {
            this.props.onIncrement();
          }}>
          <Text style={{fontSize: 85}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            alignItems: 'center',
            width: '100%',
          }}
          onPress={() => {
            this.props.onDecrement();
          }}>
          <Text style={{fontSize: 85}}>-</Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            width: 120,
            height: 120,
            backgroundColor: 'green',
          }}>
          <Text style={{fontSize: 100}}>{this.props.times}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    times: state.counter.age,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: (step) => {
      dispatch(watchIncrement(step));
    },
    onIncrement: (step) => {
      dispatch(watchDecrement(step));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
