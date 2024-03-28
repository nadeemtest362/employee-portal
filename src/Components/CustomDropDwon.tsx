import React from "react";
interface CustomInputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options: { name: string; label: string }[];
}
const CustomDropDwon: React.FC<CustomInputProps> = ({
  placeholder,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div style={{ marginRight: 53 }}>
      <select
        name={name}
        style={{
          border: "none",
          borderBottom: "1px solid #000",
          width: 175, // Customize width here
          height: 25, // Customize height here
          marginTop: 15,
        }}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option
            key={option.name}
            value={option.name}
            style={{
              backgroundColor: "#fff",
              color: "#000",
              top: 50,
            }}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropDwon;
