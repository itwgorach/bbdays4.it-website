import { SpeakerType } from 'types'

export const getSpeakerFullName = ({ firstName, lastName }: SpeakerType) => `${firstName} ${lastName}`
