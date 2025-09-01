import { IconName } from '../../icon';

export type AppBottomSheetAction = {
  title: string;
  onPress: () => void;
  iconName?: IconName;
};
