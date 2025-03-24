import { ChangeEvent, FC } from "react";
import classes from "../MyInput/MyInput.module.css";

interface MyInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
}
const MyInput: FC<MyInputProps> = ({
  disabled,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={classes.input}
      type="text"
    />
  );
};

export default MyInput;
