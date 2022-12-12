import { useState } from 'react';
import mainLogo from './assets/logo.svg';
import headerImage from "./assets/image-retro-pcs.jpg";
import menuClose from "./assets/icon-menu-close.svg";
import image3 from "./assets/image-gaming-growth.jpg";
import image4 from "./assets/image-retro-pcs.jpg";
import image5 from "./assets/image-web-3-desktop.jpg";
import mobileHeader from "./assets/image-web-3-mobile.jpg";
import iconMenu from "./assets/icon-menu.svg";
import image6 from "./assets/image-top-laptops.jpg";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  {
    /* <img src={headerImage} className="logo.svg" alt="React logo" /> */
  }

  return (
    <>
      <header>
        <div className="content">
          <img src={mainLogo} className="logo.svg" alt="React logo" />
          <ul className="desk">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categroies</li>
          </ul>
          <div className="menu mob">
            <img id="men" src={iconMenu} className="mob" alt="menu" />
            <img id="close" src={menuClose} className="mob" alt="menu" />
          </div>
          <div className="overlay hide"></div>
        </div>
        <div className="menu mob">
          <ul className="desk">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categroies</li>
          </ul>
        </div>
      </header>

      {/* Main section */}

      <main>
        <section className="hero-section">
          <picture>
            <source media="(min-width: 768px" srcSet={image5}></source>
            <img className="hero-image" src={mobileHeader} />
          </picture>
          <article>
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read More</button>
            </div>
          </article>
        </section>
        <aside>
          <div className="aside-container">
            <h2>New</h2>
            <div className="">
              <h5>Hydrogen VS Electric Cars</h5>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="aside-info">
              <h5>The Downsides of AI Artistry</h5>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
            <div className="aside-info">
              <h5>Is VC Funding Drying Up?</h5>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
          </div>
        </aside>
      </main>

      {/* Blog */}
      <section className="blog">
        <div className="vlog1">
          <div>
            <img className="image-retro" src={image3} />
          </div>
          <div className="retro-info">
            <h5>01</h5>
            <h6>Reviving Retro PCs</h6>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="vlog1">
          <div>
            <img className="image-retro" src={image4} />
          </div>
          <div className="retro-info">
            <h5>01</h5>
            <h6>Reviving Retro PCs</h6>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="vlog1">
          <div>
            <img className="image-retro" src={image6} />
          </div>
          <div className="retro-info">
            <h5>01</h5>
            <h6>Reviving Retro PCs</h6>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App
