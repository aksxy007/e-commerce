import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material";


const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    350:{items:2},
    568:{items: 3},
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

  return (
    <div className="relative px-4 lg:px-8">
      <div className=" relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
        //   autoPlay
        //   autoPlayInterval={1000}
          infinite
          responsive={responsive}
        />
        <Button variant="contained" className="z-50" sx={{postion:"absolute", top:"8rem" , right:"0rem", tranform:"translateX(50%) rotate(90deg)", bgcolor:"white" }} aria-label="next" >
            <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}} />
        </Button>
        <Button variant="contained" className="z-50" sx={{postion:"absolute", top:"8rem" , left:"0rem", tranform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} aria-label="next" >
            <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)",color:"black"}} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
