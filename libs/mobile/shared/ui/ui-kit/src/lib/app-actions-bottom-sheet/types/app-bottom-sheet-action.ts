import { IconName } from '../../icon';
import { ActionStatus } from '../enums';

export type AppBottomSheetAction = {
  title: string;
  onPress: () => void;
  iconName?: IconName;
  isContentCentered?: boolean;
  status?: ActionStatus;
};
