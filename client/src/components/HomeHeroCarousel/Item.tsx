import React from "react";
import { CarouselItem } from "../../types/interfaces";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUserData } from "../../redux/userSlice";

interface ItemProps {
  item: CarouselItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const userData = useSelector(selectUserData);
  
  console.log(userData?.name, "userData");
  return (
    <Paper className="mt-10">
      <div className="relative">
        <img src={item.image} className="w-full h-auto" alt={item.title} />
        <div className="absolute left-0 bottom-0 top-0 w-3/12 leading-loose bg-dutchWhite bg-opacity-90 p-4">
          <div className="flex flex-col items-center p-10 ">
            <div className="flex h-full flex-col gap-y-12 items-center">
              <h1 className="flex text-4xl  text-onyx flex-row font-bold font-mukta">
                {userData?.name} Curate your perfect
              </h1>
              <h2 className="text-4xl font-bold  text-rosyBrown flex-row">{item.title}</h2>
              <h3 className="flex font-md  text-onyx ">{item.description}</h3>
              <div className="flex flex-row text-center mt-4">
                <Link to="/signup">
                  <button className="bg-rosyBrown rounded-md p-3">Create Your Event!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Item;
