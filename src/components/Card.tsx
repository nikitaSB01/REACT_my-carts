import React from "react";

interface CardProps {
  title: string;
  text: string;
  buttonText: string;
  imageUrl?: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  text,
  buttonText,
  imageUrl,
  onButtonClick,
  children,
}) => {
  return (
    <div className="card">
      {imageUrl && (
        <img src={imageUrl} className="card-img-top" alt="Card cap" />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {children}
        <button className="btn btn-primary" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
