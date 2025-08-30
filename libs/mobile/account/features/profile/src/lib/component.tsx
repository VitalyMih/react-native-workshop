import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTranslation } from '@ronas-it/react-native-common-modules/i18n';
import {
  ImagePickerError,
  imagePickerService,
  ImagePickerSource,
} from '@ronas-it/react-native-common-modules/image-picker';
import { ReactElement, useRef } from 'react';
import { View } from 'react-native';
import { createStyles } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppActionsBottomSheet, AppBottomSheetAction } from '@react-native-workshop/mobile/shared/ui/ui-kit';
import { AlertService } from '@react-native-workshop/mobile/shared/utils/alert-service';
import { ProfileAvatar } from './components';

export function Profile(): ReactElement {
  const translate = useTranslation('ACCOUNT.PROFILE');
  const actionsRef = useRef<BottomSheetModal>(null);

  const showUnderConstruction = (): void => AlertService.showUnderConstruction();

  const openActions = (): void => actionsRef.current?.present();

  const handlePickImage = async (source: ImagePickerSource): Promise<void> => {
    const image = await imagePickerService.getImage(source);
    const asset =
      image !== ImagePickerError.UNAVAILABLE && image !== ImagePickerError.PERMISSION_DENIED
        ? image?.assets?.[0]
        : null;

    if (!asset) {
      return;
    }

    showUnderConstruction();
    // TODO: Implement logic to upload the image
    // const data = imagePickerService.getFormData(asset.uri);
  };

  const actions: Array<AppBottomSheetAction> = [
    {
      title: translate('BUTTON_CHANGE_PHOTO'),
      iconName: 'edit',
      onPress: () => handlePickImage(ImagePickerSource.GALLERY),
    },
    { title: translate('BUTTON_DELETE_PHOTO'), iconName: 'trash', onPress: showUnderConstruction },
  ];

  return (
    <View style={styles.container}>
      <ProfileAvatar name='Johnathan Johnson' email='john123@gmail.com' onPress={openActions} />
      <AppActionsBottomSheet ref={actionsRef} actions={actions} />
    </View>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
