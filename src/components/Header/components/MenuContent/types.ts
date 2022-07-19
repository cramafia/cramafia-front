import { Theme } from '@/theme/color'

export interface Props {
  theme: Theme
  toggleExpanded: React.Dispatch<React.SetStateAction<boolean>>
}
