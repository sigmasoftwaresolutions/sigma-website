const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">

<div className="logo">
    <img
        src="/images/logo/sigma-logo.svg"
        alt="Sigma Consultants Logo"
        className="logo-img"
    />

    <h2>Sigma Consultants</h2>
</div>

        <nav>
          <ul className="nav-links">
              <li><a href="/#home">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#products">Products</a></li>
              <li><a href="/#why">Why us</a></li>
              <li><a href="/#industries">Industries</a></li>
              <li><a href="/#contactus">Contact Us</a></li>
              <li><a href="/#locateus">Locate Us</a></li>
              <li><a href="/enquiry">Enquiry</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
