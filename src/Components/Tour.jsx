import React from "react";

export default function Tour({
  img,
  tourDate,
  title,
  text,
  city,
  days,
  price,
}) {
  return (
    <>
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{tourDate}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{text}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>{" "}
              {city}
            </p>
            <p>{days} days</p>
            <p>from ${price}</p>
          </div>
        </div>
      </article>
    </>
  );
}
