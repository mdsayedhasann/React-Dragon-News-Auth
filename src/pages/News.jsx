import React from "react";
import Navbar from "./Home/shared/Navbar/Navbar";
import Header from "./Home/shared/Header/Header";
import RightSideNav from "./Home/shared/RightSideNav/RightSideNav";
import { useLoaderData, useParams } from "react-router-dom";

const News = ({}) => {
  const { id  } = useParams();
  console.log(id);
//   const idInt = parseInt(id)
  const news = useLoaderData()

  const aNews = news.find(aNews => aNews._id === id)
  console.log(aNews);

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h3 className="text-3xl mb-3">News Details</h3>
          <img className="w-3/4" src={aNews.image_url} alt="" />
          <h2 className="py-3 text-xl font-semibold">{aNews.title}</h2>
        </div>

        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  );
};

export default News;
