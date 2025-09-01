import { ReactElement } from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';
import { colors, createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppAvatar, AvatarSize } from '@react-native-workshop/mobile/shared/ui/ui-kit';

export interface ProfileAvatarProps {
  name: string;
  email: string;
  userName: string;
  onPress: () => void;
  source?: ImageSourcePropType;
}

export function ProfileAvatar({ name, email, userName, source, onPress }: ProfileAvatarProps): ReactElement {
  return (
    <View style={styles.container}>
      <AppAvatar size={AvatarSize.LARGE} source={source} onPress={onPress} badgeIconName='edit' />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.secondaryText, styles.email]}>{email}</Text>
        <Text style={styles.secondaryText}>{userName}</Text>
      </View>
    </View>
  );
}

const styles = createStyles({
  container: {
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: spacings.basicOffset,
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacings.elementOffset,
  },
  secondaryText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  email: {
    marginBottom: 4,
  },
});
