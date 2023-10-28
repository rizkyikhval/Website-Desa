import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Gallery1 from "../assets/img/gallery/mondes.jpg";
import Gallery2 from "../assets/img/gallery/masjid.jpg";
import Gallery3 from "../assets/img/gallery/nama-desa.png";
import Gallery4 from "../assets/img/gallery/gerbang2.jpg";
import Gallery5 from "../assets/img/gallery/kolam renang.jpg";
import Gallery6 from "../assets/img/gallery/tank.jpg";
import Gallery7 from "../assets/img/gallery/covid.jpg";
import Gallery8 from "../assets/img/gallery/sd.jpg";
import Gallery9 from "../assets/img/gallery/bola api.jpg";
import Gallery10 from "../assets/img/gallery/bumdes.jpeg";

const GalleryComp = () => {
    return (
        <div className="gallery">
            <Container>
                <Row>
                    <Col className="text-dark text-center">
                        <h1>Gallery</h1>
                    </Col>
                </Row>
                <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                    <Col>
                        <img src={Gallery1} alt="unsplash.com" className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery2} alt="unsplash.com" className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery3} alt="unsplash.com" className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery4} alt="unsplash.com" className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery5} alt="unsplash.com" className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery6} alt="unsplash.com" className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery7} alt="unsplash.com" className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery8} alt="unsplash.com" className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery9} alt="unsplash.com" className="w-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GalleryComp;
