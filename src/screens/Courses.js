import React from 'react'
import { WebView } from 'react-native-webview';
export default function Courses({ navigation }) {
  return (
    <WebView source={{ uri: 'https://www.qhseinternational.com/online-courses/' }} style={{ flex: 1 }} />
  )
};


