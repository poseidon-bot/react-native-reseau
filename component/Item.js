import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function ({
  children,
  sectionID,
  rowID,
  itemInfo,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}
