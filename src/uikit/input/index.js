import React from 'react'
import { StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { InputItem } from 'antd-mobile-rn'
import { boxShadow } from '../shared'

export default (props) => {
  const Input = !props.animation
    ? InputItem
    : Animatable.createAnimatableComponent(InputItem);

  return (
    <Input
      {...props}
      onFocus={() => {
        if (props.onPress) {
          props.onPress();
        }
        if (props.onFocus) {
          props.onFocus();
        }
      }}
      style={{
        backgroundColor: '#fff',
        marginLeft: 0,
        paddingLeft: 15,
        height: 50,
        borderRadius: 3,
        borderBottomWidth: 0,
        ...boxShadow,
        ...StyleSheet.flatten(props.style || {})
      }}
    />
  )
}