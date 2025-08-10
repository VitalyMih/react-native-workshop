import { createStyles } from '@react-native-workshop/mobile/shared/ui/styles';
import { ReactElement } from 'react';
import { View, Text } from 'react-native';

export default function RootScreen(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
