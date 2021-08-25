import React from "react";
import {
  Navbar,
  Nav,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Styles.css";

function Header() {
  let history = useHistory();
  let user = JSON.parse(localStorage.getItem("user-info"));

  function signOut() {
    localStorage.clear();
    history.push("/login");
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto navbar-nav">
            <Link className="btn" to="/">
              E-Com
            </Link>
            {localStorage.getItem("user-info") ? (
              <>
                <Link className="btn" to="/add">
                  Add Product
                </Link>
                <Link className="btn" to="/update">
                  Update Product
                </Link>
              </>
            ) : (
              <>
                <Link className="btn" to="/login">
                  Login
                </Link>
                <Link className="btn" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
          <Nav>
            {localStorage.getItem("user-info") ? (
              <DropdownButton id="dropdown-item-button" title={user && user.name}>
                <Dropdown.Item as="button">Account</Dropdown.Item>
                <Dropdown.Item as="button" onClick={signOut}>
                  Logout
                </Dropdown.Item>
              </DropdownButton>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
