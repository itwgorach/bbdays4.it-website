import React, { FC, useEffect, useState } from 'react'
import cx from 'classnames'
import { ModalType } from 'types'
import Image from 'components/Image'
import {
  ArrowButtonIconLong,
  ArrowButtonIconShort,
  ClockIcon,
  CloseButtonIcon,
  CopyIcon,
  DateIcon,
  LinkedinIcon,
  LinktrIcon,
  TwitterIcon,
} from 'components/icons'
import { useLanguageContext } from 'contexts/LanguageContext'

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
  handleModalToggle,
  handlePrevLectureClick,
  handleNextLectureClick,
  prevLecture,
  nextLecture,
  location,
}) => {
  const [copyAlertVisible, setCopyAlertVisible] = useState(false)

  const { language } = useLanguageContext()

  const firstNameTrimmed = firstName?.trim()
  const lastNameTrimmed = lastName?.trim()

  const getClassesWithColor = (baseClass: string) => {
    const classes = cx(baseClass, {
      [`-${backgroundColor}`]: backgroundColor,
    })

    return classes
  }

  const getSpeakerClasses = cx('lecture-details__speaker', {
    [`-${backgroundColor}`]: backgroundColor,
    '-short': !prevLecture || !nextLecture,
  })

  const getPrevButtonClasses = cx('lecture-details__prev', {
    '-disabled': !prevLecture,
    '-long': !nextLecture,
  })

  const getNextButtonClasses = cx('lecture-details__next', {
    '-disabled': !nextLecture,
    '-long': !prevLecture,
  })

  const generateUrlToCopy = () => {
    const speakerName = `${firstNameTrimmed}-${lastNameTrimmed}`.toLocaleLowerCase()

    return `${location.origin}/?lecture=${speakerName}#agenda`
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(generateUrlToCopy())

    setCopyAlertVisible(true)

    setTimeout(() => setCopyAlertVisible(false), 2000)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'ArrowRight' && nextLecture) {
        handleNextLectureClick(`${firstNameTrimmed} ${lastNameTrimmed}`)
      }

      if (event.code === 'ArrowLeft' && prevLecture) {
        handlePrevLectureClick(`${firstNameTrimmed} ${lastNameTrimmed}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [firstNameTrimmed, lastNameTrimmed])

  return (
    <>
      <button className="lecture-details__button-close" onClick={handleModalToggle}>
        <CloseButtonIcon />
      </button>
      <div className="lecture-details__inner">
        <div className="lecture-details__description">
          <div className={getClassesWithColor('lecture-details__description-speaker')}>
            <div className="lecture-details__speaker-position">{position}</div>
            <div className="lecture-details__speaker-name">{`${firstNameTrimmed} ${lastNameTrimmed}`}</div>
          </div>
          <div className="lecture-details__header">
            <div className="lecture-details__header-text">
              <DateIcon />
              <span>{language === 'pl' ? '14 września 2024' : 'September 14, 2024'}</span>
            </div>
            <div className="lecture-details__header-text">
              <ClockIcon />
              <span>{hour}</span>
            </div>
          </div>
          <div className={getClassesWithColor('lecture-details__title')}>{title}</div>
          <div className="lecture-details__explanation">{description}</div>
          <div className="lecture-details__share">
            <span className="lecture-details__share-text">{language === 'pl' ? 'Udostępnij' : 'Share'}</span>
            <div className="lecture-details__copy">
              <input
                className="lecture-details__copy-input"
                name="lectureHref"
                readOnly
                type="text"
                value={generateUrlToCopy()}
              />
              <button className="lecture-details__copy-button" onClick={handleCopyClick}>
                <CopyIcon />
                <span>{language === 'pl' ? 'Kopiuj link' : 'Copy link'}</span>
              </button>
            </div>
          </div>
        </div>
        <div className={getSpeakerClasses}>
          <div className="lecture-details__header -desktop">
            <div className="lecture-details__header-text">
              <DateIcon />
              <span>{language === 'pl' ? '14 września 2024' : 'September 14, 2024'}</span>
            </div>
            <div className="lecture-details__header-text">
              <ClockIcon />
              <span>{hour}</span>
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
                <LinktrIcon className="lecture-details__speaker-linktr" />
              </a>
            )}
            {twitterUrl && (
              <a className="lecture-details__speaker-link" href={twitterUrl} rel="noopener noreferrer" target="_blank">
                <TwitterIcon className="lecture-details__speaker-twitter" />
              </a>
            )}
          </div>
          <Image
            alt={`${firstNameTrimmed} ${lastNameTrimmed}`}
            style={{ maxHeight: '480px', minWidth: 'unset' }}
            url={photo &&  photo.url}
          />
          <div className="lecture-details__speaker-info">
            <div className="lecture-details__speaker-name">{`${firstNameTrimmed} ${lastNameTrimmed}`}</div>
            <div className="lecture-details__speaker-position">{position}</div>
          </div>
        </div>
      </div>
      <div className="lecture-details__navigation">
        <button
          className={getPrevButtonClasses}
          onClick={prevLecture ? () => handlePrevLectureClick(`${firstNameTrimmed} ${lastNameTrimmed}`) : undefined}>
          <div className="lecture-details__arrow">
            <ArrowButtonIconLong className="-left -long" />
            <ArrowButtonIconShort className="-left -short" />
          </div>
          <div className="lecture-details__prev-text">
            <span className="lecture-details__prev-direction">{language === 'pl' ? 'Wcześniej' : 'Before'}</span>
            <span className="lecture-details__prev-name">{prevLecture}</span>
          </div>
        </button>
        <button
          className={getNextButtonClasses}
          onClick={nextLecture ? () => handleNextLectureClick(`${firstNameTrimmed} ${lastNameTrimmed}`) : undefined}>
          <div className="lecture-details__next-text">
            <span className="lecture-details__next-direction">{language === 'pl' ? 'Dalej' : 'Next'}</span>
            <span className="lecture-details__next-name">{nextLecture}</span>
          </div>
          <div className="lecture-details__arrow">
            <ArrowButtonIconLong className="-right -long" />
            <ArrowButtonIconShort className="-right -short" />
          </div>
        </button>
      </div>
      <div className="lecture-details__copy-alert" style={{ display: copyAlertVisible ? 'block' : 'none' }}>
        {language === 'pl' ? 'Skopiowano!' : 'Copied!'}
      </div>
    </>
  )
}

export default LectureDetails
