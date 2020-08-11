import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {loadImages} from '../actions/index';

export class Images extends Component {
  render() {
    console.log('ssss', this.props);

    return (
      <View style={{paddingTop: 25}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            alignItems: 'center',
            width: '100%',
          }}
          onPress={() => {
            this.props.onFetchImages();
          }}>
          <Text style={{fontSize: 20}}>FETCH-IMAGE-DATA-TO-CONSOLE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.images,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchImages: () => {
      dispatch(loadImages('aaaaaaaaaaaa'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
