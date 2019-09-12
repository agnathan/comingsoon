import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa"

import Newsletter from "../components/newsletter"

const bgVideo = require("../dist/mp4/bg.mp4")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    
    <div class="body-inner">
      
      <header id="header" class="header header-transparent">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            
            <a class="navbar-brand" href="#">
              <img src="images/logos/logo.png" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto">
                <li class="dropdown nav-item active">
                  <a href="#" class="" data-toggle="dropdown"
                    >Home <i class="fa fa-angle-down"></i
                  ></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="index.html">Home One</a></li>
                    <li><a href="index-2.html">Home Two</a></li>
                    <li><a href="index-3.html">Home Three</a></li>
                    <li><a href="index-4.html">Home Four</a></li>
                    <li><a href="index-5.html">Home Five</a></li>
                  </ul>
                </li>
                <li class="dropdown nav-item">
                  <a href="#" class="" data-toggle="dropdown"
                    >About <i class="fa fa-angle-down"></i
                  ></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="pricing.html">Pricing Table</a></li>
                    <li><a href="sponsors-1.html">Sponsors</a></li>
                    <li><a href="venue.html">Venue</a></li>
                    <li><a href="404.html">Erro Page</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="" data-toggle="dropdown"
                    >Speakers <i class="fa fa-angle-down"></i
                  ></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="speakers-1.html">Speakers-1</a></li>
                    <li><a href="speakers-2.html">Speakers-2</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a href="#" class="" data-toggle="dropdown"
                    >Schedule <i class="fa fa-angle-down"></i
                  ></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="schedule-list.html">Schedule List</a></li>
                    <li><a href="schedule-tab-1.html">Schedule Tab 1</a></li>
                    <li><a href="schedule-tab-2.html">Schedule Tab 2</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a href="#"> Blog <i class="fa fa-angle-down"></i></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="news-single.html">Blog Details</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="contact.html">Contact</a>
                </li>
                <li class="header-ticket nav-item">
                  <a class="ticket-btn btn" href="pricing.html"> Buy Ticket </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        
      </header>
      

      <div
        id="page-banner-area"
        class="page-banner-area"
        style="background-image:url(./images/hero_area/banner_bg.jpg)"
      >
        
        <div class="page-banner-title">
          <div class="text-center">
            <h2>Error Page</h2>
            <ol class="breadcrumb">
              <li>
                <a href="#">Exibit /</a>
              </li>
              <li>
                404
              </li>
            </ol>
          </div>
        </div>
        
      </div>
      

      <section id="main-container" class="main-container">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div class="error-page text-center">
                <div class="error-code">
                  <h2><strong>404</strong></h2>
                </div>
                <div class="error-message">
                  <h3>Oops... Page Not Found!</h3>
                </div>
                <div class="error-body">
                  Try using the button below to go to main page of the site
                  <br />
                  <a href="index.html" class="btn">Back to Home Page</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
      

      
      <div class="footer-area">
        
        <section
          class="ts-book-seat"
          style="background-image: url(./images/book_seat_img.jpg)"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="book-seat-content text-center mb-70">
                  <h2 class="section-title white">
                    <span>Hurry up!</span>
                    Book your Seat
                  </h2>
                  <a href="#" class="btn">Buy Ticket</a>
                </div>
                
              </div>
              
            </div>
            
            <div class="ts-footer-newsletter">
              <div
                class="ts-newsletter"
                style="background-image: url(./images/shap/subscribe_pattern.png)"
              >
                <div class="row">
                  <div class="col-lg-6 mx-auto">
                    <div class="ts-newsletter-content">
                      <h2 class="section-title">
                        <span>sUBSCRIBE TO nEWSLETTER</span>
                        Want something extra?
                      </h2>
                    </div>
                    <div class="newsletter-form">
                      <form
                        action="#"
                        method="post"
                        class="media align-items-end"
                      >
                        <div class="email-form-group media-body">
                          <input
                            type="email"
                            name="email"
                            id="newsletter-form-email"
                            class="form-control"
                            placeholder="Your Email"
                            autocomplete="off"
                            required=""
                          />
                        </div>
                        <div class="d-flex ts-submit-btn">
                          <button class="btn">Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        

        
        <footer class="ts-footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="ts-footer-social text-center mb-30">
                  <ul>
                    <li>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-google-plus"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
                
                <div class="footer-menu text-center mb-25">
                  <ul>
                    <li><a href="#">About Eventime</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Tickets</a></li>
                    <li><a href="#">Venue</a></li>
                  </ul>
                </div>
                
                <div class="copyright-text text-center">
                  <p>Copyright © 2018 Exhibit. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
      

      <!-- Javascript Files
            ================================================== -->
      
      <script src="js/jquery.js"></script>

      <script src="js/popper.min.js"></script>
      
      <script src="js/bootstrap.min.js"></script>
      
      <script src="js/jquery.appear.min.js"></script>
      
      <script src="js/jquery.jCounter.js"></script>
      
      <script src="js/jquery.magnific-popup.min.js"></script>
      
      <script src="js/owl.carousel.min.js"></script>
      
      <script src="js/wow.min.js"></script>
      
      <script src="js/isotope.pkgd.min.js"></script>

      
      <script src="js/main.js"></script>
    </div>
  </Layout>
)

export default IndexPage
