import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTranslation } from '@ronas-it/react-native-common-modules/i18n';
import { AppSafeAreaView } from '@ronas-it/react-native-common-modules/safe-area-view';
import { ReactElement, RefObject } from 'react';
import { Platform, Text, View } from 'react-native';
import { colors, createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppBottomSheet } from '../bottom-sheet';
import { Icon } from '../icon';
import { AppPressable } from '../pressable';
import { ActionStatus } from './enums';
import { AppBottomSheetAction } from './types';

export interface AppActionsBottomSheetProps {
  actions: Array<AppBottomSheetAction>;
  ref?: RefObject<BottomSheetModal | null>;
}

export function AppActionsBottomSheet({ actions, ref }: AppActionsBottomSheetProps): ReactElement {
  const translate = useTranslation('SHARED.APP_ACTIONS_BOTTOM_SHEET');

  const closeModal = (): void => ref?.current?.close();

  const cancelAction: AppBottomSheetAction = {
    title: translate('BUTTON_CANCEL'),
    onPress: closeModal,
    isContentCentered: true,
  };

  const renderAction = (action: AppBottomSheetAction): ReactElement => {
    const isDestructive = action.status === ActionStatus.DESTRUCTIVE;
    const isCancelAction = action === cancelAction;

    return (
      <AppPressable
        style={[
          styles.actionContainer,
          action.isContentCentered && styles.centeredAction,
          isCancelAction && styles.cancelAction,
        ]}
        onPress={action.onPress}
        key={action.title}>
        {action.iconName && <Icon name={action.iconName} color={isDestructive ? colors.error : undefined} />}
        <Text style={[styles.actionText, isDestructive && styles.destructiveText]}>{action.title}</Text>
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
      enablePanDownToClose={false}>
      <AppSafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
        <View style={styles.actionsContainer}>{actions.map(renderAction)}</View>
        {renderAction(cancelAction)}
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
  centeredAction: {
    justifyContent: 'center',
  },
  cancelAction: {
    marginTop: spacings.contentOffset,
    borderRadius: spacings.secondaryBorderRadius,
  },
  actionText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  destructiveText: {
    color: colors.error,
  },
});
