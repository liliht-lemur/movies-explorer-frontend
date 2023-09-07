import { useState, useCallback } from 'react';
// import { VALIDATION } from '../utils/constants';

function useFormValidation({ initialValues } = {}) {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const target = e.target;
    // const name = target.name;
    // const value = target.value;
    // switch (name) {
    //   case 'username':
    //     target.validity.patternMismatch
    //       ? target.setCustomValidity(VALIDATION.username.message)
    //       : target.setCustomValidity('')
    //     break;
    //   case 'email':
    //     target.validity.patternMismatch
    //       ? target.setCustomValidity(VALIDATION.email.message)
    //       : target.setCustomValidity('')
    //     break;
    //   default: target.setCustomValidity('')
    // }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}

export default useFormValidation;