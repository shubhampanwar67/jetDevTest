import React from 'react'
import {ActivityIndicator, ActivityIndicatorProps, View} from 'react-native'
import {verticalScale} from 'react-native-size-matters'
import colors from '../../theme/colors'

interface ListLoaderAtomProps extends ActivityIndicatorProps {
  show: boolean
}

const ListLoaderAtom = (props: ListLoaderAtomProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: verticalScale(props.show ? 5 : 0),
        marginVertical: verticalScale(10),
      }}>
      {props.show && (
        <ActivityIndicator size={'small'} color={colors.primary} {...props} />
      )}
    </View>
  )
}

export default ListLoaderAtom
