import React, { FC } from 'react'
import cx from 'classnames'
import { ModalType } from 'types'
import Image from 'components/Image'
import {
  ArrowButtonIcon,
  ClockIcon,
  CloseButtonIcon,
  CopyIcon,
  DateIcon,
  LinkedinIcon,
  LinktrIcon,
  TwitterIcon,
} from 'components/icons'

const LectureDetails: FC<ModalType> = ({
  backgroundColor,
  description,
  firstName,
  lastName,
  linkedinUrl,
  linktrUrl,
  photo,
  position,
  title,
  twitterUrl,
  hour,
  room,
  handleModalToggle,
  handlePrevLectureClick,
  handleNextLectureClick,
  prevLecture,
  nextLecture,
}) => {
  const getClassesWithColor = (baseClass: string) => {
    const classes = cx(baseClass, {
      '-primary': backgroundColor === 'primary',
      '-secondary': backgroundColor === 'secondary',
      '-tertiary': backgroundColor === 'tertiary',
    })

    return classes
  }

  const getPrevButtonClasses = cx('lecture-details__prev', {
    '-disabled': !prevLecture,
  })

  const getNextButtonClasses = cx('lecture-details__next', {
    '-disabled': !nextLecture,
  })

  const generateUrlToCopy = () => {
    const speakerName = `${firstName}-${lastName}`.toLocaleLowerCase()

    return `google.com/${speakerName}`
  }

  const urlToCopy = generateUrlToCopy()

  const getRoom = (room: number) => {
    return room === 1 ? 'Aula głowna ATH' : 'Sala druga ATH'
  }

  return (
    <div className="lecture-details">
      <button className="lecture-details__button-close" onClick={handleModalToggle}>
        <CloseButtonIcon />
      </button>
      <div className="lecture-details__description">
        <div className={getClassesWithColor('lecture-details__description-speaker')}>
          <div className="lecture-details__speaker-position">{position}</div>
          <div className="lecture-details__speaker-name">{`${firstName} ${lastName}`}</div>
        </div>
        <div className="lecture-details__header">
          <div className="lecture-details__header-text">
            <DateIcon />
            <span>10 września 2022</span>
          </div>
          <div className="lecture-details__header-text">
            <ClockIcon />
            <span>
              {hour} - {getRoom(room)}
            </span>
          </div>
        </div>
        <div className={getClassesWithColor('lecture-details__title')}>{title}</div>
        <div className="lecture-details__explanation">{description}</div>
        <div className="lecture-details__share">
          <span className="lecture-details__share-text">Udostępnij</span>
          <div className="lecture-details__copy">
            <input className="lecture-details__copy-input" name="lectureHref" readOnly type="text" value={urlToCopy} />
            <button className="lecture-details__copy-button" onClick={() => navigator.clipboard.writeText(urlToCopy)}>
              <CopyIcon />
              <span>Kopiuj link</span>
            </button>
          </div>
        </div>
      </div>
      <div className={getClassesWithColor('lecture-details__speaker')}>
        <div className="lecture-details__header -desktop">
          <div className="lecture-details__header-text">
            <DateIcon />
            <span>10 września 2022</span>
          </div>
          <div className="lecture-details__header-text">
            <ClockIcon />
            <span>
              {hour} - {getRoom(room)}
            </span>
          </div>
        </div>
        <div className="lecture-details__speaker-socials">
          {linkedinUrl && (
            <a className="lecture-details__speaker-link" href={linkedinUrl} rel="noopener noreferrer" target="_blank">
              <LinkedinIcon className="lecture-details__speaker-linkedin" />
            </a>
          )}
          {linktrUrl && (
            <a className="lecture-details__speaker-link" href={linktrUrl} rel="noopener noreferrer" target="_blank">
              <LinktrIcon className="lecture-details__speaker-twitter" />
            </a>
          )}
          {twitterUrl && (
            <a className="lecture-details__speaker-link" href={twitterUrl} rel="noopener noreferrer" target="_blank">
              <TwitterIcon className="lecture-details__speaker-linktr" />
            </a>
          )}
        </div>
        <Image alt={`${firstName} ${lastName}`} url={photo && photo.url} />
        <div className="lecture-details__speaker-info">
          <div className="lecture-details__speaker-name">{`${firstName} ${lastName}`}</div>
          <div className="lecture-details__speaker-position">{position}</div>
        </div>
      </div>
      <div className="lecture-details__navigation">
        <button
          className={getPrevButtonClasses}
          onClick={prevLecture ? () => handlePrevLectureClick(`${firstName} ${lastName}`) : undefined}>
          <div className="lecture-details__prev-text">
            <ArrowButtonIcon className="-left" />
            <span className="lecture-details__prev-direction">Wcześniej</span>
            <span className="lecture-details__prev-name">{prevLecture}</span>
          </div>
        </button>
        <button
          className={getNextButtonClasses}
          onClick={nextLecture ? () => handleNextLectureClick(`${firstName} ${lastName}`) : undefined}>
          <div className="lecture-details__next-text">
            <span className="lecture-details__next-direction">Dalej</span>
            <span className="lecture-details__next-name">{nextLecture}</span>
            <ArrowButtonIcon className="-right" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default LectureDetails
