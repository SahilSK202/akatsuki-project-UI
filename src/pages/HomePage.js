import React from "react";
import SearchWidget from "../components/SearchWidget/SearchWidget";
import HomeHeadline from "../components/HomeHeadline/HomeHeadline";

const HomePage = () => {
  return (
    <>
      <div>
        <HomeHeadline />
      </div>
      <div style={searchWidgetStyle}>
        <SearchWidget />
      </div>
    </>
  );
};
const searchWidgetStyle = {
  position: "relative",
  margin: "-9% 5%",
};
export default HomePage;