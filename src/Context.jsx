import React, { useContext, useState } from "react";
import stul from "./components/img/Stul.svg";
import tabu from "./components/img/tabu.svg";
import usimlik from "./components/img/usimlik.svg";
import lampa from "./components/img/lampa.svg";
import tortma from "./components/img/tortma.svg";
import livingroom from "./components/img/livingroom.svg";
import Kitchen from "./components/img/Kitchen.svg";
import bedroom from "./components/img/bedroom.svg";
import bathroom from "./components/img/bathroom.jpg";
import avatar from "./components/img/avatar.svg";
import avatar2 from "./components/img/avatar2.svg";
import qoshim from "./components/img/“.svg";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      img: stul,
      name: "Office chair",
      category: "Cream Office Chair",
      size: "40 x 50 x 60",
      price: "$ 50,00",
    },
    {
      id: 2,
      img: tabu,
      name: "Storage",
      category: "Celestra Grey Cabinet",
      size: "40 x 50 x 60",
      price: "$ 35,05",
    },
    {
      id: 3,
      img: usimlik,
      name: "Decoration",
      category: "Fejka Artificial Plant",
      size: "40 x 50 x 60",
      price: "$ 5,00",
    },
    {
      id: 4,
      img: lampa,
      name: "Lightings",
      category: "White Standing Lamp",
      size: "40 x 50 x 60",
      price: "$ 23,58",
    },
    {
      id: 5,
      img: tortma,
      name: "Bedside table",
      category: "Brown Wood Table",
      size: "40 x 50 x 60",
      price: "$ 23,58",
    },
    {
      id: 6,
      img: stul,
      name: "Office chair",
      category: "Cream Office Chair",
      size: "40 x 50 x 60",
      price: "$ 50,00",
    },
    {
      id: 7,
      img: tabu,
      name: "Storage",
      category: "Celestra Grey Cabinet",
      size: "40 x 50 x 60",
      price: "$ 35,05",
    },
    {
      id: 8,
      img: usimlik,
      name: "Decoration",
      category: "Fejka Artificial Plant",
      size: "40 x 50 x 60",
      price: "$ 5,00",
    },
    {
      id: 9,
      img: lampa,
      name: "Lightings",
      category: "White Standing Lamp",
      size: "40 x 50 x 60",
      price: "$ 23,58",
    },
    {
      id: 10,
      img: tortma,
      name: "Bedside table",
      category: "Brown Wood Table",
      size: "40 x 50 x 60",
      price: "$ 23,58",
    },
        {
      id: 1,
      img: stul,
      name: "Office chair",
      category: "Cream Office Chair",
      size: "40 x 50 x 60",
      price: "$ 50,00",
    },
    {
      id: 2,
      img: tabu,
      name: "Storage",
      category: "Celestra Grey Cabinet",
      size: "40 x 50 x 60",
      price: "$ 35,05",
    },
    {
      id: 3,
      img: usimlik,
      name: "Decoration",
      category: "Fejka Artificial Plant",
      size: "40 x 50 x 60",
      price: "$ 5,00",
    },
    {
      id: 4,
      img: lampa,
      name: "Lightings",
      category: "White Standing Lamp",
      size: "40 x 50 x 60",
      price: "$ 23,58",
    },
    {
      id: 5,
      img: tortma,
      name: "Bedside table",
      category: "Brown Wood Table",
      size: "40 x 50 x 60",
      price: "$ 23,58",
    },
    {
      id: 6,
      img: stul,
      name: "Office chair",
      category: "Cream Office Chair",
      size: "40 x 50 x 60",
      price: "$ 50,00",
    },
    {
      id: 7,
      img: tabu,
      name: "Storage",
      category: "Celestra Grey Cabinet",
      size: "40 x 50 x 60",
      price: "$ 35,05",
    },
    {
      id: 8,
      img: usimlik,
      name: "Decoration",
      category: "Fejka Artificial Plant",
      size: "40 x 50 x 60",
      price: "$ 5,00",
    },
    {
      id: 9,
      img: lampa,
      name: "Lightings",
      category: "White Standing Lamp",
      size: "40 x 50 x 60",
      price: "$ 23,58",
    },
    {
      id: 10,
      img: tortma,
      name: "Bedside table",
      category: "Brown Wood Table",
      size: "40 x 50 x 60",
      price: "$ 23,58",
    },
  ];
  const [open, setOpen] = useState(true);
  const click = () => {
    setOpen(!open);
  };
  const room = [
    {
      id: 1,
      img: Kitchen,
      name: "KICHEN",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 1,
      img: livingroom,
      name: "LIVINGROOM",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 3,
      img: bedroom,
      name: "BEDROOM",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 4,
      img: bathroom,
      name: "BATHROOM",
      category: "Architech & Interior Design - 2023",
    },
        {
      id: 1,
      img: Kitchen,
      name: "KICHEN",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 1,
      img: livingroom,
      name: "LIVINGROOM",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 3,
      img: bedroom,
      name: "BEDROOM",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 4,
      img: bathroom,
      name: "BATHROOM",
      category: "Architech & Interior Design - 2023",
    },
        {
      id: 1,
      img: Kitchen,
      name: "KICHEN",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 1,
      img: livingroom,
      name: "LIVINGROOM",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 3,
      img: bedroom,
      name: "BEDROOM",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 4,
      img: bathroom,
      name: "BATHROOM",
      category: "Architech & Interior Design - 2023",
    },
  ];

  const info = [
    {
      id: 1,
      img: avatar,
      img2: qoshim,
      name: "As expected, 10 years experience on furniture business will not disappointing at all",
      category:
        "As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.",
      text: "Roy Rakabuming",
    },
    {
      id: 2,
      img: avatar2,
      img2: qoshim,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vel odio tortor amet sagittis sed. ",
      category:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie est, dictum pellentesque turpis. Facilisis id cras amet tortor. Porttitor nascetur eget sit eget massa consectetur. Fringilla viverra sit magna.",
      text: "Dafit Bekam",
    },
  ];

  const [activeButton, setActiveButton] = useState(0);
  const handleClick = (index) => {
    setActiveButton(index);
  };
  const style = {
    button:
      "flex gap-[10px] justify-center items-center rounded-[4px] text-[#ffff] w-[168px] h-[56px]",
    text: "text-[60px] font-semibold  pt-[16px]  pb-[1px] ml:text-[40px]",
  };

  return (
    <AppContext.Provider
      value={{ products, room, info, style, handleClick, activeButton, click, open}}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
