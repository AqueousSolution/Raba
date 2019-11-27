import React from "react";
import SignedOut from "../Navigation/SignedOut";

const LandingPage = () => {
  return (
    <div>
      <section className="full landingpgone">
        <SignedOut />
        <div className="maincontent">
          <h1>DISTRIBUTE YOUR CONTENT WORLDWIDE</h1>
        </div>
        <ul className="mainsectionlist">
          <li>
            Get your content on Spotify, iTunes/Apple Music, Tidal, Deezer,
            Amazon Music and many more.
          </li>
          <li>Share your content and grow your fan base.</li>
          <li>
            Keep 100% of the sales revenue from the content you distribute.
          </li>
        </ul>
        <button className="getStarted">GET STARTED</button>
      </section>
      <section className="partners">
        <img src="./images/ApplePartner.png" alt="apple" />
        <img src="./images/SoundCloudPartner.png" alt="Soundcloud" />
        <img src="./images/YoutubePartner.png" alt="Youtube" />
        <img src="./images/AmazonPartner.png" />
        <img src="./images/SpotifyPartner.png" />
      </section>
      <section>
        <h1 className="sectionthree">Make your content available worldwide</h1>
        <p className="sectionthree">
          RABA helps content creators distribute their content on Soundcloud,
          Apple music, Spotify, Youtube and other top digital stores worldwide.
          Benefit from our large network of partners to sell your content and
          develop your creative career. We offer digital distribution, client
          support, artist and label services, expertise and all the tools you
          need to succeed in the creative industry environment.
        </p>
        <h1 className="sectionthree">
          Create an account and get started for free now!
        </h1>
        <button className="getStartedMiddle">GET STARTED</button>
      </section>
    </div>
  );
};

export default LandingPage;
