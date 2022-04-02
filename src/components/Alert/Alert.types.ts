export interface AlertProps {}

export enum AlertType {
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
}

export const getAlertVariant = (type: AlertType) => {
  return alertVariants[type]
}

const alertVariants: { [key in AlertType]: string } = {
  [AlertType.DANGER]: 'danger',
  [AlertType.SUCCESS]: 'success',
  [AlertType.WARNING]: 'warning',
}
