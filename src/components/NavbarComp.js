import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {
    return (
        <div>
            <Navbar  expand="lg" className=" nav fixed-top">
                <Container>
                    <Navbar.Brand href="NavbarComp" style={{ fontSize: "14px"}}>
                        <div className="d-flex align-items-center">
                            <img src="/icon/logo.png" alt="Logo" width="50" height="50" />
                            <span className="ms-2 fw-bold text-white">Desa Mulyoharjo <br /> Kec.Pagerbarang Kab.Tegal</span>
                        </div>
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Nav.Link href="NavbarComp" className="mx-1 text-white">Home</Nav.Link>
                            <Nav.Link href="GalleryComp" className="mx-1 text-white">Gallery</Nav.Link>
                            <Nav.Link href="DeskripComp" className="mx-1 text-white">Data</Nav.Link>
                            <Nav.Link href="AboutComp" className="mx-1 text-white">Tentang</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
