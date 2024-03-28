import React, { useEffect, useState } from 'react'
import { FaTimesCircle, FaQuestionCircle } from 'react-icons/fa'
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import axios from 'axios';

interface CustomInputProps {
  placeholder: string;
  name: string;
  type: string;
  // buttonName: string;
  value:any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, name, type, onChange, value, onSubmit}) => {

  return (
    <div style={{ display: 'flex', alignItems: 'center', }}>
      <input
        style={{
          border: 'none',     
          borderBottom: '1px solid #000',
          outline: 'none',  
          boxSizing: 'border-box', 
          padding: '8px', 
          marginRight: '10px'
        }}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onSubmit={onSubmit}
      />
      <MdOutlineClose
        style={{
          cursor: 'pointer'
        }}
        size={15}
        onClick={() => console.log('Cross icon clicked')}
      />
      <AiOutlineQuestionCircle
        style={{
          marginLeft: '10px', 
          cursor: 'pointer'
        }}
        size={15}
        onClick={() => console.log('Question mark icon clicked')}
      />
    </div>
  );
};
export default CustomInput
