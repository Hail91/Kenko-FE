import { useState } from "react";

const useInput = (initialState) => {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.name]:
          event.target.type === "text" ||
          event.target.type === "password" ||
          event.target.type === "textarea"
            ? event.target.value
            : event.target.checked,
      });
    },
  ];
};

export default useInput;
