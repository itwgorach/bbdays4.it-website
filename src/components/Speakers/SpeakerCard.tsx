import React, { FC, useState } from 'react'
import cx from 'classnames'

import { SpeakerType } from 'types'
import { getSpeakerFullName } from 'utils/getSpeakerFullName'

import Image from 'components/Image'
import Modal from 'components/Modal'
import { LinkedinIcon, TwitterIcon, LinktrIcon, CloseButtonIcon } from 'components/icons'
import SpeakerCardSocial from './SpeakerCardSocial'

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

        <div className={`speaker-card__modal-biography ${backgroundColor}`}>
          <div className="speaker-card__modal-biography-spacing">
            <div>
              <div className="speaker-card__modal-name">{`${firstName} ${lastName}`}</div>
              <p>{position}</p>
            </div>
            <div className="speaker-card__modal-biography-spacing">
              {linkedinUrl && <SpeakerCardSocial href={linkedinUrl} type={'linkedin'} />}
              {twitterUrl && <SpeakerCardSocial href={twitterUrl} type={'twitter'} />}
              {linktrUrl && <SpeakerCardSocial href={linktrUrl} type={'linktr'} />}
            </div>
          </div>
          <div className="speaker-card__modal-biography-spacing">
            <p>BIOGRAPHY------{description}</p>
            <Image alt={fullName} url={imageUrl} />
          </div>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
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
