import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTranslation } from '@ronas-it/react-native-common-modules/i18n';
import { ReactElement, useRef } from 'react';
import { View, Text } from 'react-native';
import { colors, createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import {
  AppActionsBottomSheet,
  AppAvatar,
  AppBottomSheetAction,
  AvatarSize,
} from '@react-native-workshop/mobile/shared/ui/ui-kit';
import { AlertService } from '@react-native-workshop/mobile/shared/utils/alert-service';

export function Profile(): ReactElement {
  const translate = useTranslation('ACCOUNT.PROFILE');
  const actionsRef = useRef<BottomSheetModal>(null);

  const showUnderConstruction = (): void => AlertService.showUnderConstruction();

  const openActions = (): void => actionsRef.current?.present();

  const actions: Array<AppBottomSheetAction> = [
    { title: translate('BUTTON_CHANGE_PHOTO'), iconName: 'edit', onPress: showUnderConstruction },
    { title: translate('BUTTON_DELETE_PHOTO'), iconName: 'trash', onPress: showUnderConstruction },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <AppAvatar size={AvatarSize.LARGE} badgeIconName='edit' onPress={openActions} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{'Johnathan Johnson'}</Text>
          <Text style={styles.email}>{'john123@gmail.com'}</Text>
        </View>
      </View>
      <AppActionsBottomSheet ref={actionsRef} actions={actions} />
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
