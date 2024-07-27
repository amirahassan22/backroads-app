import React from 'react';

import Title from './Title';
import tour1 from "../Images/tour-1.jpeg";
import tour2 from "../Images/tour-2.jpeg";
import tour3 from "../Images/tour-3.jpeg";
import tour4 from "../Images/tour-4.jpeg";
import Tour from './Tour';
// import { tours } from './data';

export default function Tours() {
  const tours = [
    {
      id: 1,
      img: tour1,
      tourDate: "august 26th, 2020",
      title: "Tibet Adventure",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
      city: "china",
      days: 6,
      price: 2100,
    },
    {
      id: 2,
      img: tour2,
      tourDate: "october 1th, 2020",
      title: "best of java",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
      city: "indonesia",
      days: 11,
      price: 1400,
    },
    {
      id: 3,
      img: tour3,
      tourDate: "september 15th, 2020",
      title: "explore hong kong",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
      city: "hong kong",
      days: 8,
      price: 5000,
    },
    {
      id: 4,
      img: tour4,
      tourDate: "december 5th, 2019",
      title: "kenya highlights",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
      city: "kenya",
      days: 20,
      price: 3300,
    },
  ];

  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {tours.map(tour =>{
            return (
              <Tour key={tour.id} {...tour}/>
            );
        })}
        </div>
      </section>
    </>
  );
}
