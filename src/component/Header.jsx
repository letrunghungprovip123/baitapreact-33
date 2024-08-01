
function Header() {
  return (
    <div id="header" className="header">
      <div className="container-fluid pt-lg-2 px-lg-5">
        <div className="header-content d-flex justify-content-between align-items-center py-2">
          <div className="content-left">
            <ul>
              <li>
                <a href="./index.html">HOME</a>
              </li>
              <li>
                <a href="#">NEW RELEASES</a>
              </li>
              <li>
                <a href="#">BRANDS</a>
              </li>
              <li>
                <a href="#">CATEGORIES</a>
              </li>
              <li>
                <a href="#">SALE</a>
              </li>
            </ul>
          </div>
          <div className="content-center">
            <img src="./src/assets/image/logo.png" alt />
          </div>
          <div className="content-right">
            <div className="content-text">
              <ul>
                <li>
                  <a href>RELEASES</a>
                </li>
                <li>
                  <a href>BLOG</a>
                </li>
                <li>
                  <a href>LOCATION</a>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <a>REGISTER</a>
                  <span className="line" />
                  <i className="fa-solid fa-cart-shopping" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./image/logo.png" alt />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
              <a className="nav-link" href="#">
                NEW RELEASES
              </a>
              <a className="nav-link" href="#">
                BRANDS
              </a>
              <a className="nav-link">CATEGORIES</a>
              <a className="nav-link">SALE</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
