import { SpeakerType } from 'types'

type SpeakerDetailsType = {
  speaker: SpeakerType | null,
  handleToggleModal?: () => void,
  handleClick?: () => void,
  isOpen: boolean,
}

export default SpeakerDetailsType
