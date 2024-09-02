import React, { FC, useState } from 'react'
import cx from 'classnames'

import { SpeakerType } from 'types'
import { getSpeakerFullName } from 'utils/getSpeakerFullName'

import Image from 'components/Image'
import Modal from 'components/Modal'
import { CloseButtonIcon } from 'components/icons'
import SpeakerCardSocial from './SpeakerCardSocial'

type SpeakerCardProps = {
  speaker: SpeakerType
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
    bio,
  } = speaker
  const fullName = getSpeakerFullName(speaker)
  const imageUrl = `${photo?.url}`

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
        <div className="speaker-card__modal-author-details">
          <div className="speaker-card__modal-accent" />
          <div className="speaker-card__modal-status">{position}</div>
          <div className="speaker-card__modal-name">{`${firstName} ${lastName}`}</div>
          <p className="speaker-card__modal-biography">{bio}</p>
          <Image alt={fullName} url={imageUrl} />
        </div>
        <div className="speaker-card__modal-icons">
          {linkedinUrl && <SpeakerCardSocial href={linkedinUrl} type={'linkedin'} />}
          {twitterUrl && <SpeakerCardSocial href={twitterUrl} type={'twitter'} />}
          {linktrUrl && <SpeakerCardSocial href={linktrUrl} type={'linktr'} />}
        </div>
        <div className={(backgroundColor || '') + ' speaker-card__modal-lecture-details'}>
          <h3 className="speaker-card__modal-title">{title}</h3>
          <p className="speaker-card__modal-description">{description}</p>
        </div>
        <span className="speaker-card__modal-accent" />
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
          {linkedinUrl && <SpeakerCardSocial href={linkedinUrl} type={'linkedin'} />}
          {twitterUrl && <SpeakerCardSocial href={twitterUrl} type={'twitter'} />}
          {linktrUrl && <SpeakerCardSocial href={linktrUrl} type={'linktr'} />}
        </div>
        <Image alt={fullName} url={imageUrl} />
        <div className="speaker-card__position">{position}</div>
      </div>
    </div>
  )
}

export default SpeakerCard
