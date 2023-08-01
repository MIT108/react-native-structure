import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import icon from "../../config/icons";
import defaultStyles from '../../config/styles';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <icon.HomeIcon />
      <Image source={icon.HomeImage} width={200} height={300} style={defaultStyles.imageStyle} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})