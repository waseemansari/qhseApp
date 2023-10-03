import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function HeaderLogo() {
  return <Image source={require('../assets/HeaderLogo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 100,
    paddingLeft:20,
  },
})
