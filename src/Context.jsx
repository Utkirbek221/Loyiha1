import React, { useContext } from "react";
import stul from "./img/Stul.svg";
import tabu from "./img/tabu.svg";
import usimlik from "./img/usimlik.svg";
import lampa from "./img/lampa.svg";
import tortma from "./img/tortma.svg";
import livingroom from "./img/livingroom.svg";
import Kitchen from "./img/Kitchen.svg";
import bedroom from "./img/bedroom.svg";
import bathroom from "./img/bathroom.jpg";
import avatar from "./img/avatar.svg"
import avatar2 from "./img/avatar2.svg"
import qoshim from "./img/“.svg"



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
  ];

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
      id: 5,
      img: Kitchen,
      name: "KICHEN",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 6,
      img: livingroom,
      name: "LIVINGROOM",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 7,
      img: bedroom,
      name: "BEDROOM",
      category: "Architech & Interior Design - 2023",
    },
    {
      id: 8,
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
      category: "As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.",
      text:"Roy Rakabuming"
    },
    {
      id: 2,
      img: avatar2,
      img2: qoshim,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vel odio tortor amet sagittis sed. ",
      category: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie est, dictum pellentesque turpis. Facilisis id cras amet tortor. Porttitor nascetur eget sit eget massa consectetur. Fringilla viverra sit magna.",
      text:"Dafit Bekam"
    },
    {
      id: 1,
      img: avatar,
      img2: qoshim,
      name: "As expected, 10 years experience on furniture business will not disappointing at all",
      category: "As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.",
      text:"Roy Rakabuming"
    },
    {
      id: 2,
      img: avatar2,
      img2: qoshim,
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vel odio tortor amet sagittis sed. ",
      category: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie est, dictum pellentesque turpis. Facilisis id cras amet tortor. Porttitor nascetur eget sit eget massa consectetur. Fringilla viverra sit magna.",
      text:"Dafit Bekam"
    },
    
  ];

  return (
    <AppContext.Provider value={{ products, room,info }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
