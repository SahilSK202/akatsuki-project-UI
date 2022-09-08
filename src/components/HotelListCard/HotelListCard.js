import React from "react";
import PropTypes from "prop-types";

// router
import { useNavigate } from "react-router-dom";

// MUI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

// MUI icons
import StarIcon from "@mui/icons-material/Star";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

// assets
import { ReactComponent as DatabaseIcon } from "../../assets/images/database_icon.svg";

// styles
import styles from "./HotelListCard.module.css";

// Routes
import { ROUTES } from "../../utils/constants/routingPathConstants";

const HotelListCard = (props) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Redirect to hotel detail page
    navigate(`${ROUTES.HOTEL_DETAILS}/${props.id}`, { state: props });
  };

  return (
    <Card sx={{ borderRadius: "24px", marginY: "2rem" }}>
      <Grid container>
        {/* Hotel Image */}
        <Grid item md={5}>
          <CardMedia
            component="img"
            height="467"
            width="410"
            image={props.hotel_dp}
            alt={props.name}
          />
        </Grid>

        {/* Hotel Details */}
        <Grid item md={7} className={styles.hotelDetailsGridItem}>
          <CardContent className={styles.hotelDetailsCardContent}>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              fontWeight={"bolder"}
              className={styles.hotelLocation}
            >
              {props.state}, {props.country}
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom
              fontWeight={"bolder"}
            >
              {props.name}
            </Typography>
            {/* Ratings */}
            <span className={styles.ratingsSpan}>
              <StarIcon className={styles.ratingsIcon} />
              <Typography variant="body1" className={styles.iconLabels}>
                {props.ratings} ({props.reviews_count} reviews)
              </Typography>
            </span>
            <Grid container>
              {/* Address */}
              <Grid item md={7} className={styles.alignCenter}>
                <LocationOnOutlinedIcon className={styles.icon} />
                <address
                  className={`${styles.iconLabels} ${styles.hotelAddress}`}
                >
                  {props.address}
                </address>
              </Grid>
              {/* Dates */}
              <Grid item md={5} className={styles.alignCenter}>
                <DateRangeOutlinedIcon className={styles.icon} />
                <Typography variant="body1" className={styles.iconLabels}>
                  {props.check_in_date} - {props.check_out_date}
                </Typography>
              </Grid>
            </Grid>
            {/* Departure */}
            <span className={styles.departure}>
              <FlightOutlinedIcon className={styles.icon} />
              <Typography variant="body1" className={styles.iconLabels}>
                Departure from {props.departure}
              </Typography>
            </span>

            <Grid container>
              {/* Hotel features */}
              <Grid item md={6}>
                <div className={styles.hotelFeatures}>
                  <span>
                    <WifiOutlinedIcon className={styles.icon} />
                    <Typography variant="body1" className={styles.iconLabels}>
                      Free Wifi
                    </Typography>
                  </span>
                  <span>
                    <DirectionsCarOutlinedIcon className={styles.icon} />
                    <Typography variant="body1" className={styles.iconLabels}>
                      Free Parking
                    </Typography>
                  </span>
                  <span>
                    <LocalOfferOutlinedIcon className={styles.icon} />
                    <Typography variant="body1" className={styles.iconLabels}>
                      Special Offer
                    </Typography>
                  </span>
                  <span>
                    <LanguageOutlinedIcon className={styles.icon} />
                    <Typography variant="body1" className={styles.iconLabels}>
                      Visit Hotel Website
                    </Typography>
                  </span>
                  <span>
                    <DatabaseIcon className={styles.dbIcon} />
                    <Typography variant="body1" className={styles.iconLabels}>
                      Taking Safety Measures
                    </Typography>
                  </span>
                </div>
              </Grid>
              {/* Book Now Buttons */}
              <Grid item md={6}>
                <div className={styles.bookNowButtons}>
                  {/* Price chip */}
                  <Chip
                    label={
                      <span className={styles.priceChipSpan}>
                        <Typography variant="h6">${props.price}</Typography>
                        <Typography variant="caption">
                          For {props.capacity}
                        </Typography>
                      </span>
                    }
                  />
                  {/* Book now chip */}
                  <Chip
                    color="primary"
                    sx={{ mt: "15px" }}
                    label={
                      <Typography variant="h6" className={styles.bookNowLabel}>
                        Book Now
                      </Typography>
                    }
                    onClick={handleBookNow}
                  />
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

// prop types
HotelListCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  hotel_dp: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
  address: PropTypes.string,
  check_in_date: PropTypes.string,
  check_out_date: PropTypes.string,
  ratings: PropTypes.number,
  reviews_count: PropTypes.number,
  departure: PropTypes.string,
  price: PropTypes.number,
  capacity: PropTypes.string,
  room_images: PropTypes.array,
};

export default HotelListCard;