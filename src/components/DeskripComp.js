import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const DeskripComp = () => {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
    };

    const paragraphStyle = {
        display: "flex",
        justifyContent: "center",
    };

    return (
        <div className="deskrip">
            <Container>
                <Row>
                    <Col className="text-dark">
                        <h1 className="data text-center">Data Desa</h1>
                        <div style={gridStyle}>
                            <div >
                                <p1 style={paragraphStyle}>Nama Desa</p1>
                                <p2 style={paragraphStyle}>Kecamatan</p2>
                                <p3 style={paragraphStyle}>Kabupaten</p3>
                                <p4 style={paragraphStyle}>Provinsi</p4>
                                <p5 style={paragraphStyle}>Kepadatan Warga</p5>
                                <p6 style={paragraphStyle}>Jumlah Penduduk</p6>
                                <p7 style={paragraphStyle}>Jumlah Pria</p7>
                                <p8 style={paragraphStyle}>Jumlah Wanita</p8>
                                <p9 style={paragraphStyle}>Jumlah KK</p9>
                                <p10 style={paragraphStyle}>Topologi</p10>
                                <p11 style={paragraphStyle}>Luas</p11>
                                <p12 style={paragraphStyle}>Koordinat</p12>
                                <p13 style={paragraphStyle}>Ketinggian</p13>
                            </div>
                            <div>
                                <p1 style={paragraphStyle}>Mulyoharjo</p1>
                                <p2 style={paragraphStyle}>Pagerbarang</p2>
                                <p3 style={paragraphStyle}>Tegal</p3>
                                <p4 style={paragraphStyle}>Jawa Tengah</p4>
                                <p5 style={paragraphStyle}>1804</p5>
                                <p6 style={paragraphStyle}>4078</p6>
                                <p7 style={paragraphStyle}>2094</p7>
                                <p8 style={paragraphStyle}>1984</p8>
                                <p9 style={paragraphStyle}>1200</p9>
                                <p10 style={paragraphStyle}>Pesawahan</p10>
                                <p11 style={paragraphStyle}>226.00m2</p11>
                                <p12 style={paragraphStyle}>-7.027690,109.079550</p12>
                                <p13 style={paragraphStyle}>12.00mdpl</p13>
                            </div>
                        </div>
                    </Col>
                    <Col className="text-dark">
                        <h1 className="statistik text-center">Statistik Desa</h1>
                        <div>
                            <div className="text-statistik">
                                <p>Menurut Data Desa yang ada, desa Mulyoharjo Kecamatan Pagerbarang Kabupaten Tegal Memiliki Wilayah Yang cukup padat, karena memiliki kepadatan sejumlah 1804. Dengan total penduduk Mulyoharjo sejumlah 4078 menjadi acuan ketika mendekati pemilu / pemilihan umum, karena Desa Mulyoharjo saja sudah luas apalagi Kecamatan Pagerbarang yang luas.</p>
                                <p>Ketika menilik jumlah penduduk pria di Mulyoharjo sejumlah 2094, hal ini tentu dipengaruhi oleh topologi Desa Mulyoharjo yang sebagian besar area pesawahan. Dengan jumlah wanita di Desa Mulyoharjo sejumlah 1984, selisih yang tidak banyak dari jumlah pria yang ada di Desa Mulyoharjo, Pagerbarang, Kab. Tegal, Jawa Tengah, Indonesia.</p>
                                <p>Setelah mengetahui penduduk dengan masing-masing total pria dan wanita, kemudian jumlah KK (Kepala Keluarga) yang ada di Mulyoharjo sejumlah 1200. Mulyoharjo merupakan sebuah desa dengan luas 226.00m2 yang berada diKecamatan Pagerbarang Kabupaten Tegal, Desa Mulyoharjo memiliki potensi wisata di Tegal.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DeskripComp;
