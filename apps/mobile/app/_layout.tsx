import { commonStyle } from '@react-native-workshop/mobile/shared/ui/styles';
import { PrimaryHeader } from '@react-native-workshop/mobile/shared/ui/ui-kit';
import { setLanguage, useTranslation } from '@ronas-it/react-native-common-modules/i18n';

import { Stack } from 'expo-router';
import { ReactElement } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export { ErrorBoundary } from 'expo-router';

const translations = {
  en: {
    ...require('i18n/mobile/app/en.json'),
    ...require('i18n/mobile/shared/en.json'),
  },
};

const useLanguage = setLanguage(translations, 'en');

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  initialRouteName: 'index',
};

function App(): ReactElement {
  const translate = useTranslation('APP.LAYOUT');

  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: translate('TEXT_PROFILE'), header: PrimaryHeader }} />
    </Stack>
  );
}

export default function RootLayout(): ReactElement | null {
  useLanguage('en');

  return (
    <GestureHandlerRootView style={commonStyle.fullFlex}>
      <App />
    </GestureHandlerRootView>
  );
}
