import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./MyNavbar.css";
import { isLogin } from "../../Utils";
import { useEffect } from "react";
function MyNavbar() {
  const expand = "md";
  const [loginStatus, setLoginStatus] = useState(isLogin() ? "Exit" : "Login");
  function logOutHandler() {
    document.cookie =
      "username=admin; expires=Thu, 19 Dec 2010 12:00:00 UTC; path=/";
    setLoginStatus("Login");
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setLoginStatus(isLogin() ? "Exit" : "Login");
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ background: "#F2F2F2" }}>
      <Navbar expand={expand} className="mb-3">
        <Container>
          <Navbar.Brand
            href="#"
            style={{
              fontFamily: "serif",
              fontSize: "32px",
              color: "black",
            }}
          >
            flowers blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                style={{ color: "black" }}
                id={`offcanvasNavbarLabel-expand-${expand}`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  style={{ color: "black" }}
                  to={"/"}
                  className="nav-link itemColor"
                >
                  Home
                </NavLink>
                <NavLink
                  style={{ color: "black" }}
                  to={"/about"}
                  className="nav-link "
                >
                  About us
                </NavLink>
                <NavLink
                  style={{ color: "black" }}
                  to={"/article"}
                  className="nav-link "
                >
                  Article
                </NavLink>
                <NavLink
                  style={{ color: "black" }}
                  to={"/panel"}
                  className="nav-link "
                >
                  Panel
                </NavLink>
                {isLogin() ? (
                  <NavLink
                    onClick={logOutHandler}
                    style={{ color: "black" }}
                    to={"/login"}
                    className="nav-link "
                  >
                    {loginStatus}
                  </NavLink>
                ) : (
                  <NavLink
                    style={{ color: "black" }}
                    to={"/login"}
                    className="nav-link "
                  >
                    {loginStatus}
                  </NavLink>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
