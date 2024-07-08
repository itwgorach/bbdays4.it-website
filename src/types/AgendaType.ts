import ModalProps from './ModalProps'

export type Lecture = {
  title: string
  startHour: string
  subtitle?: string
  room?: number
  backgroundColor?: string
  logo?: { url: string }
}

export type Speaker = {
  name: string
}
export type Vote = {
  educationalValue: number
  speech: number
  feedback: string
  nick: string
}

export type VoteError = {
  educationalValue: boolean
  speech: boolean
  name: boolean
}

export type RatingEvent = {
  name: string
  rate?: number
  event?: React.ChangeEvent<HTMLInputElement>
}

export type AgendaLiveInformationProps = {
  dateOfLectures: string
  handleModalToggle: (event: React.MouseEvent, modalProps: ModalProps) => void
  lectures: Lecture[]
  speakers: Speaker[]
}
