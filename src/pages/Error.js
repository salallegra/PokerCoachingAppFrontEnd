import img from "../assets/images/not-found.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

const Landing = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Not Found" />
        <h3>Oh Snap! Page Not Found</h3>
        <p>We can't find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Landing;
