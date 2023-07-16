import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Intro = () => {
  const [textcoder] = useTypewriter({
    words: ["website Development", "App Development", "Logo Design"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          {/* <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span> */}
          <h1 className="text-6xl font-bold text-white">
          Hi, We 're 
        </h1>
          <span>bytesNpixcel</span>
          <h2 className="text-4xl font-bold ">
          <span>{textcoder}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
          <span>
        bytesNpixel is a professional website design, website development,<br></br>
        app development, seo and digital marketing organization that offers<br></br>
        a full capacity for planning a site and internet marketing at a sensible cost.<br></br>
        We have highly efficient developers & designers.We provide value to our customers<br></br>
        by benefits such as quick to market flexible solutions.We are offering best price <br></br>
        in this market & providing best quality of work for you. We can assure you that we <br></br>
        will provide the best professional and quality service within the time duration.<br></br>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact Us</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          {/* <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" /> */}
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
       

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Website" text2="Development" />
        </motion.div>
        <motion.div
          initial={{ top: "25%", left: "80%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Business" text2="Website" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="App" text2="Development" />
        </motion.div>

        <motion.div
          initial={{ left: "5rem", top: "10rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Logo" text2="Design" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
