import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="Poker Coaching Logo" className="logo" />
      </nav>
      <div className="info">
        <h1>
          Poker <span>Coaching</span> App
        </h1>
        <p>Get hand reviews from a professional coach</p>
        <button className="btn btn-hero">Login/Register</button>
      </div>
      <img src={main} alt="Blah" className="img main-img"></img>
    </main>
  );
};

export default Landing;
