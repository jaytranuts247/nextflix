import React, { useState, useRef } from "react";
import SignIn from "./SignIn";

import { questionsAndAnswer } from "../utils";
import QnaItem from "./QnaItem";

import "./LoginPage.css";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);
  const ref = useRef();

  const handleScroll = () => {
    setSignIn((prev) => !prev);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header ref={ref}>
        <div className="loginPage">
          <div className="loginPage__header">
            <img
              className="loginPage__logo"
              src="../../images/xflix_2.svg"
              alt=""
            />
            <button className="loginPage__button" onClick={handleScroll}>
              Sign In
            </button>
            <div className="loginPage__gradient"></div>
          </div>
          <div className="loginPage__body">
            <div className="loginPage__background">
              <img
                className="concord-img vlv-creative"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/4b723240-7bae-4ffe-96d0-91fba08c69ee/US-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/4b723240-7bae-4ffe-96d0-91fba08c69ee/US-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/4b723240-7bae-4ffe-96d0-91fba08c69ee/US-en-20210607-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/4b723240-7bae-4ffe-96d0-91fba08c69ee/US-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                alt=""
              />
              <div className="loginPage__background--overlay"></div>
            </div>
            <div className="loginPage__body-container">
              {signIn ? (
                <SignIn setSignIn={setSignIn} />
              ) : (
                <>
                  <h1>Unlimited movies, TV shows and more.</h1>
                  <h2>Watch anywhere, Cancel any time.</h2>
                  <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership
                  </h3>

                  <div className="loginPage__input">
                    <form action="">
                      <input type="email" placeholder="Email Address" />
                      <button
                        className="loginPage__getStarted"
                        onClick={() => setSignIn(true)}
                      >
                        GET STARTED
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="story-cards">
          <div className="jumbotron">
            <div className="jumbotron-container flex">
              <div className="jumbotron__contents col">
                <h1>Enjoy on your TV</h1>
                <h2>
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more
                </h2>
              </div>
              <div className="jumbotron__media col">
                <img
                  alt=""
                  className="our-story-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  data-uia="our-story-card-img"
                />
                <div className="jumbotron__media--video">
                  <video
                    muted
                    autoPlay
                    playsInline
                    loop
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  ></video>
                </div>
              </div>
            </div>
          </div>

          <div className="jumbotron">
            <div className="jumbotron-container flex">
              <div className="jumbotron__contents col">
                <h1>Download your shows to watch offline.</h1>
                <h2>
                  Save your favorites easily and always have something to watch.
                </h2>
              </div>
              <div className="jumbotron__media col">
                <img
                  alt=""
                  className="our-story-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  data-uia="our-story-card-img"
                />
              </div>
            </div>
          </div>

          <div className="jumbotron">
            <div className="jumbotron-container flex">
              <div className="jumbotron__contents col">
                <h1>Watch everywhere.</h1>
                <h2>
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV without paying more.
                </h2>
              </div>
              <div className="jumbotron__media col">
                <img
                  alt=""
                  className="our-story-card-img"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                  data-uia="our-story-card-img"
                />
                <div className="jumbotron__media--video">
                  <video
                    muted
                    autoPlay
                    playsInline
                    loop
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  ></video>
                </div>
              </div>
            </div>
          </div>

          <div className="jumbotron">
            <div className="jumbotron-container flex">
              <div className="jumbotron__contents col">
                <h1>Create profiles for kids.</h1>
                <h2>
                  Send kids on adventures with their favorite characters in a
                  space made just for them—free with your membership.
                </h2>
              </div>
              <div className="jumbotron__media col">
                <img
                  alt=""
                  className="our-story-card-img"
                  src="https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
                  data-uia="our-story-card-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="fqa-section">
          <h1>Frequently Asked Questions</h1>
          <div className="qna">
            <div className="qna-container">
              {questionsAndAnswer.map((item, idx) => (
                <QnaItem key={idx} item={item}></QnaItem>
              ))}
            </div>
          </div>
          <button className="" onClick={handleScroll}>
            Finish Sign Up
          </button>
        </section>
      </main>
      <footer>
        <div className="footer">
          <div className="footer__title">Questions? Contact us.</div>
          <div className="footer__body">
            <ul>
              <li>
                <span>FQA</span>{" "}
              </li>
              <li>
                <span>Investor Relations</span>{" "}
              </li>
              <li>
                <span>Ways to Watch</span>{" "}
              </li>
              <li>
                <span>Corporate Information</span>{" "}
              </li>
              <li>
                <span>XFlix Originals</span>{" "}
              </li>
              <li>
                <span>Help Centre</span>{" "}
              </li>
              <li>
                <span>Jobs</span>{" "}
              </li>
              <li>
                <span>Terms of Use</span>{" "}
              </li>
              <li>
                <span>Contact Us</span>{" "}
              </li>
              <li>
                <span>Account</span>{" "}
              </li>
              <li>
                <span>Redeem gift cards</span>{" "}
              </li>
              <li>
                <span>Privacy</span>{" "}
              </li>
              <li>
                <span>Speed Test</span>{" "}
              </li>
              <li>
                <span>Media Centre</span>{" "}
              </li>
              <li>
                <span>Buy gift cards</span>{" "}
              </li>
              <li>
                <span>Cookie Preferences</span>{" "}
              </li>
              <li>
                <span>Legal Notices</span>{" "}
              </li>
            </ul>
          </div>
          <p>XFlix United State</p>
        </div>
      </footer>
    </>
  );
};

export default LoginPage;
