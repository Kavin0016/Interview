import ImageSlider from "./ImageSlider";
import Image1 from "./images/image-1.jpg";
import Image2 from "./images/image-2.jpg";
import Image3 from "./images/image-3.jpg";
import Image4 from "./images/image-4.jpg";
import Image5 from "./images/image-5.jpg";
const ImageCaurosel = () => {
  const slides = [
    { url: Image1, title: "beach" },
    { url: Image2, title: "boat" },
    { url: Image3, title: "forest" },
    { url: Image4, title: "city" },
    { url: Image5, title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>      
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default ImageCaurosel;
