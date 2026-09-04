import React from "react";
import './card.css'
export function CardSupport({data}) {
  return (
    <>
      <span className={data}>|</span>
    </>
  );
}
export function Card({ name, detail, className }) {
  return (
    <>
      <div className={className}>
        <div className="BannerName">{name}</div>
        <div className="Bannerdetail">{detail}</div>
      </div>
    </>
  );
}

// export default Card;
