import { ReactNode } from 'react';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { colors } from '@react-native-workshop/mobile/shared/ui/styles';
import { Icons } from '../assets';
import { IconName } from './types';

export interface IconProps extends SvgProps {
  name: IconName;
  color?: ColorValue;
}

const defaultColor = colors.textPrimary;

export function Icon({ name, color = defaultColor, style, ...props }: IconProps): ReactNode {
  const Component = name in Icons && Icons[name];

  return Component ? <Component color={color} style={style} {...props} /> : null;
}
