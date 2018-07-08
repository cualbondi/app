import React from 'react'
import { Button } from 'antd-mobile-rn'
import { boxShadow } from '../shared'

export default (props) => (
  <Button
    {...props}
    style={{
      position: 'absolute',
      bottom: 30,
      right: 15,
      width: 65,
      height: 65,
      borderRadius: 65,
      borderWidth: 0,
      ...boxShadow,
      ...(props.style || {})
    }}>
    {props.children}
  </Button>
)