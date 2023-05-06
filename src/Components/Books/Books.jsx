import React from "react";
import "./Books.css";

const Books = () => {
  return (
    <div className="outerDiv">
      <div id="book_1">
        <a className="bookPerspective">
          <div className="bookRotateWrapper">
            <div className="bookGuideSplit">
              <div className="bookBind"></div>
              <div className="bookFace">
                <div className="bookFace_contents">
                  <h3>Sapiens</h3>
                  <p>A Brief History of Humankind</p>
                  <small>Yual Noah Harrari</small>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div id="book_2">
        <a className="bookPerspective">
          <div className="bookRotateWrapper book2">
            <div className="bookGuideSplit">
              <div className="bookBind"></div>
              <div className="bookFace">
                <div className="bookFace_contents">
                  <h3>48 Laws of Human Nature</h3>
                  <p>Laws of Human Nature</p>
                  <small>Robert Greene</small>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div id="book_3">
        <a className="bookPerspective">
          <div className="bookRotateWrapper book3">
            <div className="bookGuideSplit">
              <div className="bookBind"></div>
              <div className="bookFace">
                <div className="bookFace_contents">
                  <h3>IKIGAI</h3>
                  <p>The Japanese Secret</p>
                  <small>Héctor García, Francesc Miralles</small>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Books;
