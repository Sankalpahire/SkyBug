import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useAuth } from "../../Context/Auth";
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    setIsMobileMenuOpen(false); // Close the mobile menu after logout
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="logo"
              className="d-inline-block align-text-top logo"
            />
          </Link>
          <button
            className={`navbar-toggler ${isMobileMenuOpen ? "dark" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMobileMenu}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/view-all-products" className="nav-link">
                  Products
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>

            <li className="nav-item dropdown">
             <NavLink  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {auth?.user?.name}
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to={`/dashboard/${auth?.user?.role===1 ? 'admin' : 'user'}`} className="dropdown-item" >Dashboard</NavLink></li>
              <li className="dropdown-item">
              <NavLink
                onClick={handleLogout}
                to="/login"
                className="nav-link"
              >
                Logout
              </NavLink>
            </li>
            </ul>
          </li>
            
          </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
