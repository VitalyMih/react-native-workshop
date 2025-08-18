import { Profile } from '@react-native-workshop/mobile/account/features/profile';
import { AppScreen } from '@react-native-workshop/mobile/shared/ui/ui-kit';
import { ReactElement } from 'react';

export default function ProfileScreen(): ReactElement {
  return (
    <AppScreen scrollDisabled>
      <Profile />
    </AppScreen>
  );
}
