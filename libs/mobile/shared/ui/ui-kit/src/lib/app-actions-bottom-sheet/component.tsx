import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ReactElement, RefObject } from 'react';
import { Text, View } from 'react-native';
import { colors, createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppBottomSheet } from '../bottom-sheet';
import { Icon } from '../icon';
import { AppPressable } from '../pressable';
import { AppBottomSheetAction } from './types';

export interface AppActionsBottomSheetProps {
  actions: Array<AppBottomSheetAction>;
  ref?: RefObject<BottomSheetModal | null>;
}

export function AppActionsBottomSheet({ actions, ref }: AppActionsBottomSheetProps): ReactElement {
  const renderAction = (action: AppBottomSheetAction): ReactElement => (
    <AppPressable style={styles.actionContainer} onPress={action.onPress} key={action.title}>
      {action.iconName && <Icon name={action.iconName} />}
      <Text style={styles.actionText}>{action.title}</Text>
    </AppPressable>
  );

  return (
    <AppBottomSheet
      ref={ref}
      style={styles.container}
      isModal
      hasBackdrop
      headerless
      withoutBackground
      enablePanDownToClose={false}>
      <View style={styles.actionsContainer}>{actions.map(renderAction)}</View>
    </AppBottomSheet>
  );
}

const styles = createStyles({
  container: {
    paddingHorizontal: spacings.basicOffset,
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
  actionText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
});
