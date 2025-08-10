import { setLanguage } from '@ronas-it/react-native-common-modules/i18n';

import { Stack } from 'expo-router';
import { ReactElement } from 'react';

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
  return (
    <Stack>
      <Stack.Screen name='index' />
    </Stack>
  );
}

export default function RootLayout(): ReactElement | null {
  useLanguage('en');

  return <App />;
}
