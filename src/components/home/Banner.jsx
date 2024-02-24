import { useState } from "react";
import Slider from "react-slick";
import bannerImgOne from "../../assests/bannerImgOne.jpg";
import bannerImgTwo from "../../assests/bannerImgTwo.jpg";
import bannerImgThree from "../../assests/bannerImgThree.jpg";
import bannerImgFour from "../../assests/bannerImgFour.jpg";
import bannerImgFive from "../../assests/bannerImgFive.jpg";

const Banner = () => {
  const [docActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "0%",
          right: "0",
          margin: "0 auto",
          transform: "translate(-50% -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === docActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px red solid",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px blue solid",
              }
        }
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={bannerImgTwo} alt=" bannerimg" />
          </div>
          <div>
            <img src={bannerImgOne} alt=" bannerimg" />
          </div>
          <div>
            <img src={bannerImgThree} alt=" bannerimg" />
          </div>
          <div>
            <img src={bannerImgFour} alt=" bannerimg" />
          </div>
          <div>
            <img src={bannerImgFive} alt=" bannerimg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
