import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetProps,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { ForwardedRef, ReactElement, ReactNode, RefObject, useCallback, useMemo } from 'react';
import { Platform, ViewStyle } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';
import { colors, createStyles, screenHeight, spacings } from '@react-native-workshop/mobile/shared/ui/styles';

export interface AppBottomSheetProps extends BottomSheetProps {
  children: ReactNode;
  isModal?: boolean;
  isScrollable?: boolean;
  hasBackdrop?: boolean;
  hasTopOffset?: boolean;
  headerless?: boolean;
  withoutBackground?: boolean;
  withOverlay?: boolean;
  onBackdropPress?: () => void;
  bottomSheetViewStyle?: ViewStyle;
  ref?: ForwardedRef<BottomSheet | BottomSheetModal>;
}

export function AppBottomSheet({
  children,
  isModal,
  isScrollable,
  hasBackdrop,
  hasTopOffset,
  headerless,
  withoutBackground,
  withOverlay,
  style,
  backgroundStyle,
  handleStyle,
  handleIndicatorStyle,
  snapPoints,
  onBackdropPress,
  bottomSheetViewStyle,
  ref,
  ...props
}: AppBottomSheetProps): ReactElement {
  const isAndroid = Platform.OS === 'android';

  const Component = useMemo(() => (isModal ? BottomSheetModal : BottomSheet), [isModal]);

  const ContainerComponent = useCallback(
    // workaround: https://github.com/gorhom/react-native-bottom-sheet/issues/1644
    ({ children }: { children?: ReactNode }) => <FullWindowOverlay>{children}</FullWindowOverlay>,
    [],
  );

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) =>
      hasBackdrop ? (
        <BottomSheetBackdrop
          {...props}
          opacity={0.3}
          // workaround: https://github.com/gorhom/react-native-bottom-sheet/issues/857#issuecomment-1107475282
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          onPress={onBackdropPress}
        />
      ) : null,
    [hasBackdrop],
  );

  const content = useMemo(
    () =>
      isScrollable ? (
        <BottomSheetScrollView showsVerticalScrollIndicator={false} style={bottomSheetViewStyle}>
          {children}
        </BottomSheetScrollView>
      ) : (
        <BottomSheetView style={bottomSheetViewStyle}>{children}</BottomSheetView>
      ),
    [isScrollable, children],
  );

  return (
    <Component
      ref={ref as RefObject<BottomSheetModal>}
      containerComponent={withOverlay && !isAndroid ? ContainerComponent : undefined}
      backdropComponent={renderBackdrop}
      style={[style, hasTopOffset && styles.bottomSheetWithTopOffset]}
      backgroundStyle={[backgroundStyle, withoutBackground && styles.bottomSheetWithoutBackground]}
      handleStyle={[handleStyle, headerless && styles.handleHeaderless]}
      handleIndicatorStyle={[styles.indicator, handleIndicatorStyle, headerless && styles.handleIndicatorHeaderless]}
      enableDynamicSizing={!snapPoints}
      snapPoints={snapPoints}
      maxDynamicContentSize={screenHeight * 0.9}
      {...props}>
      {content}
    </Component>
  );
}

const styles = createStyles({
  bottomSheetWithTopOffset: {
    paddingTop: spacings.basicOffset,
  },
  bottomSheetWithoutBackground: {
    backgroundColor: 'transparent',
  },
  handleHeaderless: {
    padding: 0,
  },
  handleIndicatorHeaderless: {
    height: 0,
  },
  indicator: {
    backgroundColor: colors.backgroundTertiary,
    width: 56,
    height: 5,
  },
});
