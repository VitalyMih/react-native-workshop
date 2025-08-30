import { colors, createStyles } from '@react-native-workshop/mobile/shared/ui/styles';
import { AppScreen } from '@react-native-workshop/mobile/shared/ui/ui-kit';
import { ReactElement } from 'react';
import { Text } from 'react-native';

export default function ProfileScreen(): ReactElement {
  return (
    <AppScreen scrollDisabled>
      <Text style={styles.text}>{'Hello world!'}</Text>
    </AppScreen>
  );
}

const styles = createStyles({
  text: {
    color: colors.textPrimary,
    alignSelf: 'center',
  },
});
