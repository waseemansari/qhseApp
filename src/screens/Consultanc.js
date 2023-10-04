import React from 'react'
import { WebView } from 'react-native-webview';
export default function Consultanc({ navigation }) {
  return (
    <WebView source={{ uri: 'https://www.qhseinternational.com/consultancy-services/' }} style={{ flex: 1 }} />
  )
};


