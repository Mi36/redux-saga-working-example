import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
  addDataAction,
  fetchDataAction,
  fetchSuccessAction,
  fetchFailedAction,
} from '../actions/index';

export class Movies extends Component {
  render() {
    console.log(this.props.data);
    return (
      <View style={{paddingTop: 23}}>
        <TouchableOpacity
          style={{backgroundColor: 'red', alignItems: 'center', width: '100%'}}
          onPress={() => {
            this.props.onFetchData();
          }}>
          <Text style={{fontSize: 30}}>FETCH-DATA-TO-CONSOLE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: () => {
      dispatch(fetchDataAction());
    },
    onAddData: (newMovie) => {
      dispatch(addDataAction(newMovie));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
