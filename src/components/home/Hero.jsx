const heroImage = `${import.meta.env.BASE_URL}images/home/home.png`;

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-wrapper">

        <div className="hero-content">
          <span className="hero-badge">30+ Years of Experience</span>

          <h1>
            Powering Businesses with Smart POS & Software Solutions
          </h1>

          <p>
            Sigma Software Solutions delivers innovative POS software,
            business applications, barcode systems, enterprise hardware,
            and IT consulting to help businesses improve efficiency,
            streamline operations, and accelerate growth.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Services</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src={heroImage}
            alt="Sigma Software Solutions"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
