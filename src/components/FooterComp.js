import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
    const footerStyle = {
        height: "45vh",
        width: "100%",
        display: "flex",
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
    };

    const paragraphStyle = {
        display: "flex",
    };

    return (
        <div className="footer" style={footerStyle}>
            <Container>
                <Row>
                    <h1 className="text-center text-white">Kontak</h1>
                    <Col >
                        <div className="w-100 text-white" style={gridStyle}>
                            <div className=" ">
                                <p style={paragraphStyle}>Email :</p>
                                <p style={paragraphStyle}>riskiikhval@gmail.com</p>
                                <p style={paragraphStyle}>Kontak / WA :</p>
                                <p style={paragraphStyle}>+62-838-6135-5925</p>
                                <p style={paragraphStyle}>Instagram :</p>
                                <p style={paragraphStyle}>@rizky__val</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-dark">
                        <div>
                            <div className="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.569087940163!2d109.06208833492123!3d-7.0219476407768555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbdeda66da341%3A0xee5997bf11f36a4!2sMulyoharjo%2C%20Kec.%20Pagerbarang%2C%20Kabupaten%20Tegal%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1698491199837!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                    width="100%"
                                    height="230"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </Col>
                    <h2 className="t-footer text-center text-white">copy@right 2023 Desa Mulyoharjo</h2>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComp;
