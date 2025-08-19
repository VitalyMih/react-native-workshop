import { i18n } from '@ronas-it/react-native-common-modules/i18n';
import { Alert } from 'react-native';

interface AlertButton {
  text: string;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

interface AlertOptions {
  title: string;
  message: string;
  buttons?: Array<AlertButton>;
}

export class AlertService {
  public static show(options: AlertOptions): void {
    const { title, message, buttons = [] } = options;
    const hasCancelButton = buttons.some((button) => button.style === 'cancel');
    const defaultCancelButton: AlertButton = { text: i18n.t('SHARED.ALERT_SERVICE.BUTTON_CANCEL'), style: 'cancel' };
    const finalButtons: Array<AlertButton> = hasCancelButton ? buttons : [...buttons, defaultCancelButton];

    Alert.alert(
      title,
      message,
      finalButtons.map((button) => ({
        text: button.text,
        onPress: button.onPress,
        style: button.style,
      })),
    );
  }

  public static showUnderConstruction(): void {
    Alert.alert(i18n.t('SHARED.ALERT_SERVICE.TEXT_WE_ARE_WORKING_ON_THIS_SECTION'));
  }
}
