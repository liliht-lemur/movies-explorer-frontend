import './CheckboxSwitch.css';
import { useState } from 'react';

function CheckboxSwitch() {
  const [isShort, setIsShot] = useState(false);
  function toggleCheckboxSwitch() {
    setIsShot(!isShort);
  }
  return (
    <label className="checkbox" >
      <input
        className="checkbox__input"
        type="checkbox"
        id="checkbox"
        onChange={toggleCheckboxSwitch}
      />
      <span
        className={` checkbox__slider ${isShort ? 'checkbox__slider_active' : ''
          }`}
      />
      Короткометражки
    </label>
  );
}

export default CheckboxSwitch;