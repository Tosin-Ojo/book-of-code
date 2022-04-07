import React from "react";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo-2.png";
import "./Cover.css";

interface Props {
  last?: boolean;
}

const Cover: React.FC<Props> = ({ last }) => {
  const lastStyle = {
    backgroundImage: "linear-gradient(90deg, #00c99a 0%, #64ffda 18%)",
  };

  return (
    <div className="book__cover" style={last ? lastStyle : {}}>
      <img src={last ? Logo2 : Logo} alt="" />
    </div>
  );
};

export default Cover;
