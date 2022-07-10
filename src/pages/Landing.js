import logo from "../assets/images/logo.png";
import main from "../assets/images/main.png";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Poker Coaching Logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Poker <span>Coaching</span> App
          </h1>
          <p>Get hand reviews from a professional coach</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={main} alt="Blah" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3em;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600) l;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
