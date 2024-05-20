import React, { FC, useState } from 'react'
import cx from 'classnames'

import { SpeakerType } from 'types'
import { getSpeakerFullName } from 'utils/getSpeakerFullName'

import Image from 'components/Image'
import Modal from 'components/Modal'
import { LinkedinIcon, TwitterIcon, LinktrIcon, CloseButtonIcon } from 'components/icons'

type SpeakerCardProps = {
  speaker: SpeakerType,
}

const SpeakerCard: FC<SpeakerCardProps> = ({ speaker }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const {
    photo,
    firstName,
    lastName,
    title,
    linkedinUrl,
    twitterUrl,
    linktrUrl,
    position,
    backgroundColor,
    description,
  } = speaker
  const fullName = getSpeakerFullName(speaker)
  const imageUrl = photo?.url

  const getImagePlaceholderClasses = cx('speaker-card__image-placeholder', {
    [`-${backgroundColor}`]: backgroundColor,
  })

  const showModalFn = () => {
    setShowModal((prevValue) => !prevValue)
  }
  return (
    <div className="speaker-card" onClick={showModalFn}>
      <Modal className="speaker-card__modal" handleToggle={showModalFn} isOpen={showModal} title={title}>
        <button className="speaker-card__modal-button-close" onClick={showModalFn}>
          <CloseButtonIcon />
        </button>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={`speaker-card__modal-biography ${backgroundColor}`}>
          <div>
            <div>
              <div>
                <div className="speaker-card__modal-name">{firstName}</div>
                <div className="speaker-card__modal-name">{lastName}</div>
              </div>
              <p>{position}</p>
            </div>
            <p>Link</p>
            <p>twitter</p>
            <p>fb</p>
          </div>
          <div className="speaker-card__modal-biography-spacing">
            <p>BIOGRAPHY------{description}</p>
            <Image alt={fullName} url={imageUrl} />
          </div>
        </div>
      </Modal>
      <div className="speaker-card__content">
        <h3 className="speaker-card__title">
          <div className="speaker-card__title-text">{firstName}</div>
          <div className="speaker-card__title-text">{lastName}</div>
        </h3>
        <div className="speaker-card__subtitle">{title}</div>
      </div>
      <div className={getImagePlaceholderClasses}>
        <div className="speaker-card__social">
          {linkedinUrl && (
            <a className="speaker-card__link" href={linkedinUrl} rel="noopener noreferrer" target="_blank">
              <LinkedinIcon className="speaker-card__linkedin" />
            </a>
          )}
          {linktrUrl && (
            <a className="speaker-card__link" href={linktrUrl} rel="noopener noreferrer" target="_blank">
              <LinktrIcon className="speaker-card__linktr" />
            </a>
          )}
          {twitterUrl && (
            <a className="speaker-card__link" href={twitterUrl} rel="noopener noreferrer" target="_blank">
              <TwitterIcon className="speaker-card__twitter" />
            </a>
          )}
        </div>
        <Image alt={fullName} url={imageUrl} />
        <div className="speaker-card__position">{position}</div>
      </div>
    </div>
  )
}

export default SpeakerCard
