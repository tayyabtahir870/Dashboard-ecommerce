import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Drawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" className="my-3 " onClick={handleShow}>
        <AiOutlineMenuUnfold />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-black">
          <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <Menu className="Slidebar1">
              <SubMenu label="Charts">
                <MenuItem className="bg-black"> Pie charts </MenuItem>
                <MenuItem className="bg-black"> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Home </MenuItem>
              <MenuItem>
                {" "}
                <Link className="Link" to="/">
                  Product
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link className="Link" to="/contact">
                  Contact Us
                </Link>{" "}
              </MenuItem>
              <MenuItem> About Us </MenuItem>
              <MenuItem> Record </MenuItem>
              <MenuItem> News </MenuItem>
            </Menu>
          </Sidebar>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Drawer;
