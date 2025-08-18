import { ReactElement } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import { images } from '../assets';
import { Icon, IconName } from '../icon';
import { AppPressable } from '../pressable';
import { AvatarSize } from './enums';

export interface AppAvatarProps {
  source?: ImageSourcePropType;
  size?: AvatarSize;
  onPress?: () => void;
  badgeIconName?: IconName;
}

export function AppAvatar({
  size = AvatarSize.MEDIUM,
  source = images.emptyAvatar,
  onPress,
  badgeIconName,
}: AppAvatarProps): ReactElement {
  const avatarStyles = [
    styles.avatar,
    {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  ];

  return (
    <AppPressable style={avatarStyles} onPress={onPress} disabled={!onPress}>
      <Image source={source} style={[styles.image, { borderRadius: size / 2 }]} resizeMode='cover' />
      {badgeIconName && (
        <View style={styles.badge}>
          <Icon name={badgeIconName} />
        </View>
      )}
    </AppPressable>
  );
}

const styles = createStyles({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.5rem',
    width: '2.5rem',
    bottom: 0,
    right: 0,
    borderRadius: spacings.secondaryBorderRadius,
  },
});
