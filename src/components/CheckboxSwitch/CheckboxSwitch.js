import './CheckboxSwitch.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function CheckboxSwitch({ handleCheckbox }) {
  const { pathname } = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    handleCheckbox(!isChecked);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const vaultIsShort = JSON.parse(localStorage.getItem('vaultIsShort'));
        vaultIsShort && setIsChecked(vaultIsShort);
    } else {
      setIsChecked(false);
    }
  }, [pathname]);


  return (
    <label className="checkbox" >
      <input
        className="checkbox__input"
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span
        className="checkbox__slider"
      />
      Короткометражки
    </label>
  );
}

export default CheckboxSwitch;
