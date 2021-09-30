import React from "react";

const Gallery = () => {
  return (
    <div className="gallery main-container">
      <div className="gallery-row">
        <div className="gallery-card gallery-card--1 shadow-s">
          <a href="#!" data-micromodal-trigger="modal-1">
            <span>Full-Stack Social Media App</span>
          </a>
        </div>
        <div className="gallery-card gallery-card--2 shadow-s">
          <a href="#!" data-micromodal-trigger="modal-2">
            <span>Would You Rather Game</span>
          </a>
        </div>
      </div>
      <div className="gallery-row">
        <div className="gallery-card gallery-card--3 shadow-s">
          <a href="#!" data-micromodal-trigger="modal-3">
            <span>Gatsby Contentful Blog</span>
          </a>
        </div>
        <div className="gallery-card gallery-card--5 shadow-s">
          <a href="#!" data-micromodal-trigger="modal-5">
            <span>Flashcards Mobile App</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
