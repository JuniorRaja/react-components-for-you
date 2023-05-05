import "./App.css";
import ScrollGallery from "./Components/ScrollGallery/ScrollGallery";

function App() {
  return (
    <div className="ParentDiv">
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

      <div className="logo_slider">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <br />
      <br />
      {/* <ScrollGallery /> */}
    </div>
  );
}

export default App;
