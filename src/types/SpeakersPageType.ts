import { SpeakerType } from 'types'

type SpeakersPageType = {
  speaker: SpeakerType,
  handleToggleModal?: () => void,
  isOpen: boolean,
  imageUrl: string | undefined,
  fullName: string,
}

export default SpeakersPageType
