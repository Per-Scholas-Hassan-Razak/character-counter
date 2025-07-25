import { useState } from "react";
import type { TextInputProps } from "../../types";

const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder,
  initialValue,
}) => {
  const [value, setValue] = useState(initialValue || "");

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <textarea
      className="txt-inpt-area"
      value={value}
      placeholder={placeholder}
      rows={6}
      onChange={(e) => handleTextInputChange(e)}
    />
  );
};

export default TextInput;
