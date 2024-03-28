import React from 'react'
interface CustomButtonProps {
  backgroundColor: string;
  text: string;
  onClick: () => void;
  borderColor?: string;
  textColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ backgroundColor, text, onClick, borderColor, textColor }) => {
  return (
    <div onClick={onClick} style={{ backgroundColor, borderColor, color: textColor,padding:10, border: `1px solid ${borderColor}`, borderRadius: '20px', cursor: 'pointer', textAlign: 'center', width:70, height:15, alignItems:"center", justifyContent:"center", display:"flex" }}>
      <span style={{fontSize:13}}>
      {text}
      </span>
    </div>
  );
};

export default CustomButton
