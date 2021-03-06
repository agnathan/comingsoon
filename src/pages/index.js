import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import Newsletter from "../components/newsletter";

const bgVideo = require("../dist/mp4/bg.mp4");
const bgImage = require("../dist/img/win-background.jpg");
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div
      class="overlay"
      style={{ backgroundImage: "url(" + bgImage + ")" }}
    ></div>
    {/* <video
      playsinline="playsinline"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
    >
      <source src={bgVideo} type="video/mp4" />
    </video> */}

    <div class="masthead">
      <div class="masthead-bg"></div>
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-12 my-auto">
            <div class="masthead-content text-white py-5 py-md-0">
              <h1 class="mb-3">Coming Soon!</h1>
              <h2>Willamette Investors Network</h2>
              <p class="mb-5">
                We're working hard to finish the development of this site. Our
                target launch date is
                <strong> October 2019</strong>! Sign up for updates using the
                form below!
              </p>

              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="social-icons">
      <ul class="list-unstyled text-center mb-0">
        {/* <li class="list-unstyled-item">
          <a href="#">
            <FaTwitter />
          </a>
        </li> */}
        <li class="list-unstyled-item">
          <a href="https://www.facebook.com/Willamette-Investor-Network-108007533874139/">
            <FaFacebookF />
          </a>
        </li>
        <li class="list-unstyled-item">
          <a href="https://www.instagram.com/willametteinvestornetwork/">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
