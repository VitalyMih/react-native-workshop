import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { AppSafeAreaView } from '@ronas-it/react-native-common-modules/safe-area-view';
import { ReactElement } from 'react';
import { View, Text } from 'react-native';
import { colors, createStyles, spacings } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppPressableIcon } from '../pressable-icon';

export interface PrimaryHeaderProps {
  title?: string;
  headerRightComponent?: (props: { canGoBack: boolean }) => ReactElement;
  headerLeftComponent?: (props: { canGoBack: boolean }) => ReactElement;
  goBackFunction?: () => void;
}

export function PrimaryHeader({
  navigation,
  title,
  headerRightComponent,
  headerLeftComponent,
  goBackFunction,
  ...props
}: PrimaryHeaderProps & (BottomTabHeaderProps | NativeStackHeaderProps)): ReactElement {
  const canGoBack = navigation.canGoBack();
  const options = 'options' in props ? props.options : undefined;
  const titleText = title || options?.title;

  const headerTitleComponent = options?.headerTitle;

  const renderDefaultBackButton = (): ReactElement =>
    canGoBack || goBackFunction ? (
      <AppPressableIcon name='arrowLeft' onPress={goBackFunction || navigation.goBack} />
    ) : (
      <View />
    );

  return (
    <AppSafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          {headerLeftComponent ? headerLeftComponent({ canGoBack }) : renderDefaultBackButton()}
        </View>
        {headerRightComponent && <View style={styles.headerRight}>{headerRightComponent({ canGoBack })}</View>}
        <View style={styles.titleContainer}>
          {typeof headerTitleComponent === 'function' ? (
            headerTitleComponent({ children: titleText as string })
          ) : (
            <Text style={styles.text}>{titleText}</Text>
          )}
        </View>
      </View>
    </AppSafeAreaView>
  );
}

const styles = createStyles({
  container: {
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: spacings.basicOffset,
    paddingVertical: '0.625rem',
  },
  headerContainer: {
    width: '100%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  headerRight: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
});
