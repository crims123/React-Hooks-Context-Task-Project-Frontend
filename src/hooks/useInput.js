import { useState } from 'react';

function useInput(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  return [values, handleChange, setValues];
}

export default useInput;
