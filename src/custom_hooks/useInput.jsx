import { useState } from "react";

const useInput = (initialState) => {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.name]: event.target.value,
      });
    },
  ];
};

export default useInput;
