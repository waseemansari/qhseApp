import React from 'react'
import { WebView } from 'react-native-webview';
export default function BroucherDetail({ navigation }) {
  return (
    <WebView source={{ uri: 'https://www.qhseinternational.com/qhse-international-brochures/' }} style={{ flex: 1 }} />
  )
};


