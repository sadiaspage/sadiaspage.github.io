  import './Illustrations.css';
  import { useState } from 'react';
  import React from 'react';

  const objIllustrations = [
    {
    id: 1,
    title: "Swimming Tiger",
    alt_text: "Tiger swimming in water",
    src: "./src/assets/illustration_tigerSwim_CMYK.png"
  },
  {
    id: 2,
    title: "Medalist",
    alt_text: "Girl in front of a blue background with bubbles around her",
    src: "./src/assets/illustration_medalist.png"
  },
  {
    id: 3,
    title: "Lion Dance Styles",
    alt_text: "Three lions are in a circle chasing each other, with lion dance instruments and elements surrounding them",
    src: "./src/assets/illustration_threeLionStyles.png"
  },
  {
    id: 4,
    title: "Dragonfruit",
    alt_text: "A story about two lions breaking into a wine shop, drinking all of the alcohol, and getting drunk. The Buddha, and the wine shop owner, confronts the lions.",
    src: "./src/assets/illustration_dragonfruit.png"
  },
    {
    id: 5,
    title: "See You Next Time!",
    alt_text: "A hamster and tiger, hand in hand, run through a reel of photos, reminiscing on their friendship together.",
    src: "./src/assets/illustration_seeYouNextTime.png"
  }
]

export const Illustrations = () => {
    return (
        <section>Illustrations!
            {objIllustrations.map(({ id, title, alt_text, src }) => (
                <img key={id} class='img_illustration' src={src}></img>
            ))}
        </section>
    );
};
