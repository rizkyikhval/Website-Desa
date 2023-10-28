import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/GalleryComp";
import DeskripComp from "./components/DeskripComp";
import AboutComp from "./components/AboutComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <div>
      <NavbarComp />
      <HeroComp />
      
      {/* Content */}
      <GalleryComp />
      <DeskripComp />
      <AboutComp />
      {/* Content */}

      <FooterComp />
    </div>
  );
}

export default App;
