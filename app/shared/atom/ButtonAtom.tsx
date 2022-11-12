import {Button, ButtonProps} from '@rneui/base'
import React from 'react'
import colors from '../../theme/colors'

interface ButtonAtomProps extends ButtonProps {
  gradient?: 'PRIMARY' | 'SECONDARY' | 'TERNARY' | 'WHITE'
}

const ButtonAtom = (props: ButtonAtomProps) => {
  return (
    <Button
      {...props}
      buttonStyle={[
        {
          backgroundColor:
            props.gradient === 'PRIMARY'
              ? colors.primary
              : props.gradient === 'TERNARY'
              ? colors.ternary
              : props.gradient === 'WHITE'
              ? colors.white
              : colors.secondary,
        },
        props.buttonStyle,
      ]}
      titleProps={{numberOfLines: 1}}
    />
  )
}

export default ButtonAtom
