import useClose from '../../hooks/useClose';
import './InfoTooltip.css';


const InfoTooltip = ({ onClose, isOpen, tooltipSettings, onOverlayClick }) => {
  useClose(isOpen, onClose);

  const caption = `${tooltipSettings.message}`

  return (
    <section
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      id='popup-info-tooltip'
      onClick={onOverlayClick}
    >
      <div className='popup__wrapper'>
        <button
          type='button'
          className='popup__button-close'
          onClick={onClose}
        />
        <p className='popup__caption popup__caption_place_info-tooltip'>{caption}</p>
      </div>
    </section>
  )
}

export default InfoTooltip;