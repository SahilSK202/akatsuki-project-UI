import React, { useEffect } from "react";

// MUI
import Container from "@mui/material/Container";

// react router
import { useLocation, useNavigate } from "react-router-dom";

// custom components
import HotelListCard from "../components/HotelListCard/HotelListCard";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

// custom hooks for API
import { useAxios } from "../hooks/useAxios";

// paths
import { ROUTES } from "../utils/constants/routingPathConstants";

const URL = "http://localhost:5000/api/v1/hotels/";

const HotelListPage = () => {
  // get the state from prev page
  const location = useLocation();
  const navigate = useNavigate();

  const { data: hotel_list_data, error, loaded, callAPI } = useAxios();

  useEffect(() => {
    // set the initial state
    if (location.state === null) {
      // console.log("Here is me");
      navigate(ROUTES.HOME);
    } else {
      const {
        location: searchLocation,
        checkInDate,
        checkOutDate,
      } = location.state;

      callAPI(
        `${URL}?location=${searchLocation}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
      );
    }
  }, []);

  if (error) {
    console.log(error);
  }

  // if API call finished
  if (loaded) {
    console.log("hotelList: ", hotel_list_data);
  }

  return (
    <Container sx={{ mb: 5 }}>
      <BreadCrumbs activePage="Hotel List" />
      <HotelListCard
        id={1}
        hotel_name="The Leela Kovalam"
        country="India"
        state="Kerala"
        img_src="https://res.cloudinary.com/difrv1tb6/image/upload/v1662018316/HotelBookingAppAssets/LeelaKovalam_DP_tmylk2.png"
        address="Beach Road, Kovalam 695527 India"
        check_in_date="15.09.2022"
        check_out_date="20.09.2022"
        rating={4.19}
        reviews_count={234}
        departure="Kochi"
        price={720}
        capacity="Two"
      />
    </Container>
  );
};

export default HotelListPage;
