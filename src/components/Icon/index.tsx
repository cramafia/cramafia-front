import Alcohol from '@/assets/icons/alcohol.svg'
import Camera from '@/assets/icons/camera.svg'
import Doctor from '@/assets/icons/doctor.svg'
import Don from '@/assets/icons/don.svg'
import Mafia from '@/assets/icons/mafia.svg'
import Network from '@/assets/icons/network.svg'
import Over18 from '@/assets/icons/over18.svg'
import Peace from '@/assets/icons/peace.svg'
import Promotion from '@/assets/icons/promotion.svg'
import Reward from '@/assets/icons/reward.svg'
import Sheriff from '@/assets/icons/sheriff.svg'
import Cross from '@/assets/icons/cross.svg'
import Facebook from '@/assets/icons/facebook.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Mastercard from '@/assets/icons/mastercard.svg'
import Telegram from '@/assets/icons/telegram.svg'
import Twitch from '@/assets/icons/twitch.svg'
import Visa from '@/assets/icons/visa.svg'
import Vk from '@/assets/icons/vk.svg'
import Youtube from '@/assets/icons/youtube.svg'
import ToTopButton from '@/assets/icons/toTopButton.svg'

export enum IconType {
  ALCOHOL = 'ALCOHOL',
  CAMERA = 'CAMERA',
  DOCTOR = 'DOCTOR',
  DON = 'DON',
  MAFIA = 'MAFIA',
  NETWORK = 'NETWORK',
  OVER_18 = 'OVER_18',
  PEACE = 'PEACE',
  PROMOTION = 'PROMOTION',
  REWARD = 'REWARD',
  SHERIFF = 'SHERIFF',
  CSOSS = 'CROSS',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  MASTER_CARD = 'MASTER_CARD',
  TELEGRAM = 'TELEGRAM',
  TWITCH = 'TWITCH',
  VISA = 'VISA',
  VK = 'VK',
  YOUTUBE = 'YOUTUBE',
  TO_TOP_BUTTON = 'TO_TOP_BUTTON',
}

export const getIcon = (t: IconType): Function => {
  return icons[t]
}

const icons: { [key in IconType]: Function } = {
  [IconType.ALCOHOL]: Alcohol,
  [IconType.CAMERA]: Camera,
  [IconType.DOCTOR]: Doctor,
  [IconType.DON]: Don,
  [IconType.MAFIA]: Mafia,
  [IconType.NETWORK]: Network,
  [IconType.OVER_18]: Over18,
  [IconType.PEACE]: Peace,
  [IconType.PROMOTION]: Promotion,
  [IconType.REWARD]: Reward,
  [IconType.SHERIFF]: Sheriff,
  [IconType.CSOSS]: Cross,
  [IconType.FACEBOOK]: Facebook,
  [IconType.INSTAGRAM]: Instagram,
  [IconType.MASTER_CARD]: Mastercard,
  [IconType.TELEGRAM]: Telegram,
  [IconType.TWITCH]: Twitch,
  [IconType.VISA]: Visa,
  [IconType.VK]: Vk,
  [IconType.YOUTUBE]: Youtube,
  [IconType.TO_TOP_BUTTON]: ToTopButton,
}
