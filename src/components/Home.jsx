import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/Home.css";
import { Link } from "react-router-dom";


// IMPORT YOUR IMAGES
import hero1 from "../assets/heroimgone.jpg";
import hero2 from "../assets/heroimgtwo.jpg";
// import hero3 from "../assets/heroimgtheer.jpg";
// import hero4 from "../assets/iour.jpg";

import fege from "../assets/fege.jpg";

import takeoff from "../assets/takeoff.jpg";
import callImg from "../assets/call.jpg";
import shoppingImg from "../assets/shopping.jpg";
import supportImg from "../assets/support.jpg";
import { color } from "framer-motion";


function Home() {

  // HERO SLIDESHOW IMAGES
  const images = [hero1, hero2 ];

  const [currentImage, setCurrentImage] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);

  // AOS ANIMATION
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // SLIDESHOW EFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        (prevImage + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);


    const serviceCards = [
    {
      image: takeoff,
      title: "Book a Flight",
      description:
        "Facilitate travel arrangements for a service member's approved leave.",
      button: "Initiate Request",
    },
    {
      image: callImg,
      title: "Purchase Call Time",
      description:
        "Help your service member stay connected through satellite or international calls.",
      button: "Initiate Request",
    },
    {
      image: shoppingImg,
      title: "Request Shopping",
      description:
        "Arrange for essential personal items or care packages.",
      button: "Initiate Request",
    },
    {
      image: supportImg,
      title: "Support Our Troops",
      description:
        "Your contribution helps fund morale and welfare programs.",
      button: "Make a Donation",
    },
  ];


  const supportCards = [
  {
    title: "Active Deployed Soldiers",
    text: `“Soldiers are very dedicated to their jobs, to the point that they are reluctant to take leave. It is good to know that they are really dedicated, but they also need to make their own well-being and their families a priority.”`,
  },
  {
    title: "Engage with other Veterans",
    text: `View the service histories of over 2,037,711 U.S. military service-members, from WW2 to present day, including their memories and photos. Participate in our forums and find new friends with similar interests.`,
  },
  {
    title: "Remember Your Service",
    text: `Memorial Day is a time to celebrate and appreciate fallen soldiers. It is very important, especially on military holidays. Even if they've passed, you can still celebrate their life and service by placing a flag on their grave.`,
  },
];

const leaveInfo = [
  {
    title: "Managing Military Leave and Military Family Leave",
    content:
      "Encourages service members to take leave whenever possible; however, it's not always possible due to deployments and operational commitments. Extensions may be granted for long deployments when necessary.",
  },
  {
    title: "Family and Medical Leave Act (FMLA)",
    content:
      "The Family and Medical Leave Act provides eligible service members with leave to manage qualifying family-related military responsibilities, including active-duty obligations.",
  },
  {
    title: "Restored Annual Leave",
    content:
      "All restored annual leave must be scheduled and used before the end of the leave year ending two years from the year it was earned.",
  },
];


  return (
    <div className="homepage">

      {/* HERO SECTION */}
      <div
        className="homehero"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      > 

        {/* DARK OVERLAY */}
        <div className="overlay"></div>

        <h1 data-aos="zoom-in">
          U.S. Military Leave Department
        </h1>

        <h3 data-aos="fade-up" data-aos-delay="300">
          Supporting Our Heroes, Connecting Their Families.
          Your dedicated resource for seamless leave processing.
        </h3>

        <Link to="/EmergencyLeave">
  <button data-aos="fade-up" data-aos-delay="500">
    Begin Application
  </button>
</Link>

      </div>

      {/* SUPPORT SECTION */}
      <section className="support-section">

        <div className="container">

          <h1 data-aos="fade-down">
            A Four-Step Process for All Support Requests
          </h1>

          <p
            className="subtitle"
            data-aos="fade-up"
          >
            We are steadfast in our dedication to providing
            a secure, reliable, and compassionate service.
            Every request is handled with the urgency and
            respect our military families deserve.
          </p>

          <div className="cards">

            <div
              className="card"
              data-aos="fade-right"
            >
              <span className="step-number">01</span>
              <h2>Enter Member ID</h2>
              <p>
                Begin by entering the service member's official ID number in the secure portal below to quickly locate and access their verified profile.
              </p>
            </div>

            <div
              className="card"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <span className="step-number">02</span>
              <h2>Verify Profile</h2>
              <p>
                Carefully review the member's profile information to confirm that all identification details are accurate before continuing.
              </p>
            </div>

            <div
              className="card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="step-number">03</span>
              <h2>Select Service</h2>
              <p>
                Choose the support service that best matches your request from the list of available military assistance options.
              </p>
            </div>

            <div
              className="card"
              data-aos="fade-left"
              data-aos-delay="450"
            >
              <span className="step-number">04</span>
              <h2>Submit Form</h2>
              <p>
                Complete all required fields, review your information for accuracy, and submit your request for processing.
              </p>
            </div>

          </div>
          
        </div>
        
      </section>

<div className="idApplication" data-aos="fade-up">
  <div className="idApplicationContent">

    <h1>Leave Application Portal</h1>

    <p>
      To begin a support request, you must first verify the service member.
      Please enter their official Member ID number in the portal below.
    </p>

    <div className="searchContainer">
      <input
        type="text"
        placeholder="Enter Member ID Number"
      />

      <button>
        🔍
      </button>
       </div>

      </div>
     </div>


    <div className="Committed">
        <section className="serviceSection">
  <div className="serviceContent">

    {/* Left Side */}
    <div className="serviceText">
      <h1>
        Committed to Service, Honor,
        <br />
        and Family
      </h1>

      <p>
        The U.S. Military Leave Department is a dedicated
        administrative body established to streamline and
        manage the leave process for active-duty service
        members across all branches...
      </p>

      <div className="coreValues">
        <h2>Core Values</h2>

        {/* <ul> */}
          <li><p>
             Integrity: Upholding the highest standards
            of verification and trust.</p>
          </li>

          <li> <p>
             Efficiency: Providing timely processing
            of all requests.</p>
          </li>

          <li> <p>
            Support: Offering unwavering support
            to service members and their families.</p>
          </li>
        {/* </ul> */}
      </div>
    </div>

    {/* Right Side */}
    <div className="serviceImage">
      <img
        src={fege}
        alt="Military personnel"
      />
    </div>

  </div>
</section>
    </div>



   <div className="Available">
    <h1>Available Support Applications</h1>
  <div className="servicesGrid">
    {serviceCards.map((card, index) => (
      <div className="serviceCard" key={index}>
        <img
          src={card.image}
          alt={card.title}
          className="cardImage"
        />

        <div className="cardContent">
          <h2>{card.title}</h2>

          <p>{card.description}</p>

        <Link to="/Application"><button>{card.button}</button></Link>
        </div>
      </div>
    ))}
  </div>
</div>   




<div className="Supporting">
  <section className="supportingSection">
  <h1 className="supportingTitle">
    Supporting Our Service Members
  </h1>

  <div className="supportingGrid">
    {supportCards.map((card, index) => (
      <div
        className="supportingCard"
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 150}
      >
        <h2>{card.title}</h2>
        <p>{card.text}</p>
      </div>
    ))}
  </div>
</section>
</div>

<section className="leaveSection">
  <div className="leaveContainer">
    {leaveInfo.map((item, index) => (
      <div className="leaveItem" key={index}>
        <button
          className="leaveHeader"
          onClick={() =>
            setActiveIndex(activeIndex === index ? -1 : index)
          }
        >
          <span>{item.title}</span>

          <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
            ▼
          </span>
        </button>

        <div
          className={`leaveContent ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <p>{item.content}</p>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}

export default Home;