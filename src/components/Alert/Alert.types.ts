import { Color, getColor } from '@/theme/color'

export enum AlertType {
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
}

export const getAlertVariant = (type: AlertType): string => {
  return alertVariants[type]
}

const alertVariants: { [key in AlertType]: string } = {
  [AlertType.DANGER]: getColor(Color.RED_400),
  [AlertType.SUCCESS]: getColor(Color.GREEN_100),
  [AlertType.WARNING]: getColor(Color.YELLOW_500),
}
