import { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { colors, createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppAvatar, AvatarSize } from '@react-native-workshop/mobile/shared/ui/ui-kit';

export interface ProfileAvatarProps {
  name: string;
  email: string;
  onPress: () => void;
}

export function ProfileAvatar({ name, email, onPress }: ProfileAvatarProps): ReactElement {
  return (
    <View style={styles.avatarContainer}>
      <AppAvatar size={AvatarSize.LARGE} badgeIconName='edit' onPress={onPress} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = createStyles({
  avatarContainer: {
    alignItems: 'center',
    gap: spacings.basicOffset,
  },
  infoContainer: {
    alignItems: 'center',
    gap: spacings.elementOffset,
  },
  name: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: 'bold',
  },
  email: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});
