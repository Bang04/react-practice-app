import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enterValues, setEnteredValues] = useState(defaultValue);

  //사용자가 건드렸는지 여부
  const [didEdit, setDidEdit] = useState(false);

  //validation 실행
  const valueIsValid = validationFn(enterValues);
  
  function handleInputChange(event) {
    setEnteredValues(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur(identifier) {
    setDidEdit(true);
  }

  return {
    value: enterValues,
    handleInputChange,
    handleInputBlur,
    hasError : didEdit && !valueIsValid
  };
}
