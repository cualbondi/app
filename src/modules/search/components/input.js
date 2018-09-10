import React from 'react';
import { SearchBar } from 'react-native-elements';

export default props => (
  <SearchBar
    round
    lightTheme
    noIcon
    placeholder={`Escribe algo...`}
    clearIcon={{
      color: '#43484d',
      style: {
        paddingRight: 2,
      },
    }}
    {...props}
    containerStyle={{
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      borderTopWidth: 0,
      paddingHorizontal: 3,
      ...(props.containerStyle || {}),
    }}
    inputStyle={{
      backgroundColor: '#fff',
      color: '#43484d',
      paddingLeft: 12,
      ...(props.inputStyle || {}),
    }}
  />
);
