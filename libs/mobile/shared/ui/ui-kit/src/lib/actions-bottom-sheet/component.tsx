import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTranslation } from '@ronas-it/react-native-common-modules/i18n';
import { AppSafeAreaView } from '@ronas-it/react-native-common-modules/safe-area-view';
import { ForwardedRef, ReactElement, RefObject } from 'react';
import { Platform, Text, View } from 'react-native';
import { colors, createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppBottomSheet, AppBottomSheetProps } from '../bottom-sheet';
import { Icon } from '../icon';
import { AppPressable } from '../pressable';
import { AppBottomSheetAction } from './types';

export interface AppActionsBottomSheetProps extends Omit<AppBottomSheetProps, 'children'> {
  actions: Array<AppBottomSheetAction>;
  ref?: ForwardedRef<BottomSheetModal | BottomSheet>;
}

export function AppActionsBottomSheet({ actions, ref, ...props }: AppActionsBottomSheetProps): ReactElement {
  const translate = useTranslation('SHARED.APP_ACTIONS_BOTTOM_SHEET');

  const closeModal = (): void => (ref as RefObject<BottomSheetModal | BottomSheet>)?.current.close();

  const cancelAction = {
    title: translate('BUTTON_CANCEL'),
    onPress: closeModal,
  };

  const renderActionRow = (action: AppBottomSheetAction): ReactElement => {
    const isCancelAction = action === cancelAction;

    return (
      <AppPressable
        style={[styles.actionContainer, isCancelAction && styles.cancelAction]}
        onPress={action.onPress}
        key={action.title}>
        {action.iconName && <Icon name={action.iconName} />}
        <Text style={styles.text}>{action.title}</Text>
      </AppPressable>
    );
  };

  return (
    <AppBottomSheet
      ref={ref}
      style={styles.container}
      isModal
      hasBackdrop
      headerless
      withoutBackground
      enablePanDownToClose={false}
      {...props}>
      <AppSafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
        <View style={styles.actionsContainer}>{actions.map(renderActionRow)}</View>
        {renderActionRow(cancelAction)}
      </AppSafeAreaView>
    </AppBottomSheet>
  );
}

const styles = createStyles({
  container: {
    paddingHorizontal: spacings.basicOffset,
  },
  safeAreaContainer: {
    paddingBottom: Platform.OS === 'android' ? spacings.basicOffset : 0,
  },
  actionsContainer: {
    overflow: 'hidden',
    borderRadius: spacings.secondaryBorderRadius,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.625rem',
    paddingVertical: spacings.contentOffset,
    paddingHorizontal: spacings.containerOffset,
    backgroundColor: colors.backgroundTertiary,
  },
  cancelAction: {
    marginTop: spacings.contentOffset,
    borderRadius: spacings.secondaryBorderRadius,
    justifyContent: 'center',
  },
  text: {
    color: colors.textPrimary,
    fontSize: 16,
  },
});
