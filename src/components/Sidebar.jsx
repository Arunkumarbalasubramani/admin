import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [components, setComponents] = useState(false);
  const [utilities, setUtilities] = useState(false);
  const [pages, setPages] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div id="wrapper">
        {/* Sidebar */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* Sidebar - Brand */}
          <Nav.Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </Nav.Link>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <Nav.Link className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </Nav.Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Interface</div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <Nav.Link
              className="collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
              onClick={() => {
                setComponents(!components);
                navigate("/");
              }}
            >
              <i className="fas fa-fw fa-cog" />
              <span>Components</span>
            </Nav.Link>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            ></div>
            {components ? (
              <div className="inner-items-container">
                <h6 className="collapse-header">Custom Components:</h6>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/buttons")}
                >
                  Buttons
                </Nav.Link>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/cards")}
                >
                  Cards
                </Nav.Link>
              </div>
            ) : null}
          </li>
          {/* Nav Item - Utilities Collapse Menu */}
          <li className="nav-item">
            <Nav.Link
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
              onClick={() => setUtilities(!utilities)}
            >
              <i className="fas fa-fw fa-wrench" />
              <span>Utilities</span>
            </Nav.Link>
            <div
              id="collapseUtilities"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            ></div>
            {utilities ? (
              <div className="inner-items-container">
                <h6 className="collapse-header">Custom Utilities</h6>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/colors")}
                >
                  Colors
                </Nav.Link>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/borders")}
                >
                  Borders
                </Nav.Link>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/animations")}
                >
                  Animations
                </Nav.Link>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/others")}
                >
                  Other
                </Nav.Link>
              </div>
            ) : null}
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">Addons</div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <Nav.Link
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
              onClick={() => setPages(!pages)}
            >
              <i className="fas fa-fw fa-folder" />
              <span>Pages</span>
            </Nav.Link>
            <div
              id="collapsePages"
              className="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            ></div>
            {pages ? (
              <div className="inner-items-container">
                <h6 className="collapse-header">Login Screens:</h6>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/forgotpassword")}
                >
                  Forgot Password
                </Nav.Link>
                <h6 className="collapse-header">Other Pages:</h6>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("*")}
                >
                  404 Page
                </Nav.Link>
                <Nav.Link
                  className="innerItems"
                  style={{ color: "black" }}
                  onClick={() => navigate("/newPage")}
                >
                  Blank Page
                </Nav.Link>
              </div>
            ) : null}
          </li>
          {/* Nav Item - Charts */}
          <li className="nav-item">
            <Nav.Link className="nav-link" onClick={() => navigate("/charts")}>
              <i className="fas fa-fw fa-chart-area" />
              <span>Charts</span>
            </Nav.Link>
          </li>
          {/* Nav Item - Tables */}
          <li className="nav-item">
            <Nav.Link className="nav-link" onClick={() => navigate("/tables")}>
              <i className="fas fa-fw fa-table" />
              <span>Tables</span>
            </Nav.Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
          {/* Sidebar Message */}
          <div className="sidebar-card d-none d-lg-flex">
            <img
              className="sidebar-card-illustration mb-2"
              src="img/undraw_rocket.svg"
              alt="..."
            />
            <p className="text-center mb-2">
              <strong>SB Admin Pro</strong> is packed with premium features,
              components, and more!
            </p>
            <Nav.Link
              className="btn btn-success btn-sm"
              href="https://startbootstrap.com/theme/sb-admin-pro"
            >
              Upgrade to Pro!
            </Nav.Link>
          </div>
        </ul>
        {/* End of Sidebar */}
      </div>
    </div>
  );
};

export default Sidebar;
