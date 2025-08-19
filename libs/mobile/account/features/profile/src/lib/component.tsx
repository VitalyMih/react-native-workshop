import { ReactElement } from 'react';
import { View, Text } from 'react-native';
import { colors, createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppAvatar, AvatarSize } from '@react-native-workshop/mobile/shared/ui/ui-kit';
import { AlertService } from '@react-native-workshop/mobile/shared/utils/alert-service';

export function Profile(): ReactElement {
  const onEditAvatarPress = (): void => AlertService.showUnderConstruction();

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <AppAvatar size={AvatarSize.LARGE} badgeIconName='edit' onPress={onEditAvatarPress} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{'Johnathan Johnson'}</Text>
          <Text style={styles.email}>{'john123@gmail.com'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    alignItems: 'center',
  },
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
