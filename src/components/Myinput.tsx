import React from "react";
import styled from "styled-components";

interface InputProps {
  titleText: string;
  buttonText?: string;
  inputValue: string;
  inputOrText?: boolean;
  setinputValue: (value: string) => void;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
`;

const InputTitle = styled.h2`
  margin-right: 20px;
  width: 210px;
`;

const InputBox = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 20px;
`;

const InputComponent: React.FC<InputProps> = ({
  titleText,
  inputValue,
  inputOrText,
  setinputValue,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
  };

  return (
    <InputContainer>
      <InputTitle>{titleText}</InputTitle>
      {inputOrText ? (
        <InputBox
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={`${titleText}...`}
        />
      ) : (
        <div>{inputValue}</div>
      )}
    </InputContainer>
  );
};

export default InputComponent;
