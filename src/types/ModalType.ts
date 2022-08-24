import { SpeakerType } from 'types'

type ModalType = SpeakerType & {
  hour: string,
  room: number,
  handleModalToggle: () => void,
  handleNextLectureClick: (name: string) => void,
  handlePrevLectureClick: (name: string) => void,
  prevLecture: string | null,
  nextLecture: string | null,
  location: unknown,
}

export default ModalType
