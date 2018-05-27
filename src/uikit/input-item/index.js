import React from 'react'
import * as Animatable from 'react-native-animatable';
import InputItem from 'antd-mobile/lib/input-item'

export default (props) => {
  let Input = !props.animation 
    ? InputItem 
    : Animatable.createAnimatableComponent(InputItem);

  return (
    <Input
      {...props} 
      style={{ 
        backgroundColor: '#fff',
        marginLeft: 0, 
        paddingLeft: 15,
        height: 40,
        borderRadius: 3,
        borderBottomWidth: 0,
        ...(props.style || {})
      }}
    />
  )
}