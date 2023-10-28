import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutComp = () => {
      return (
        <div className="About">
            <Container>
                <Row>
                    <Col className="text-dark">
                        <h1 className="text-center">Tentang</h1>
                        <div>
                            <div className=" text-faq1 h-100">
                                <p>
                                    Mulyoharjo merupakan salah satu desa yang berada di kecamatan Pagerbarang, Kabupaten Tegal, provinsi Jawa Tengah, Indonesia. Di desa ini terdapat banyak home industri nuggets, otak - otak dan makanan - makanan ringan lainnya. 100 persen penduduk kampung ini muslim. Terdapat suatu majlis ilmu Ahlussunah di bawah Badan Hukum Yayasan Sulthan Sholahuddin Al Ayyubi. Sebuah yayasan yang gigih dalam kegiatan keagamaan.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutComp;
