/* eslint-disable react/jsx-no-undef */
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const NewestReleases = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const MovieCard2 = ({ image, title, genre, rating, duration, quality }) => {
    return (
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardContent>
          <MovieTitle>{title}</MovieTitle>
          <MovieInfo>
            <Genre>{genre}</Genre>
            <FontAwesomeIcon icon={faFaceGrinStars} />
            <Rating>{rating}</Rating>
            <Duration>{duration}</Duration>
            <Quality>{quality}</Quality>
          </MovieInfo>
        </CardContent>
      </CardContainer>
    );
  };

  return (
    <SectionContainer>
      <SectionTitle>Newest Releases</SectionTitle>
      <SliderContainer>
        <Slider {...settings}>
          <MovieCard2
            image="/src/assets/Rectangle 191.png"
            title="The Family Monks"
            genre="Action, Comedy"
            rating="4.5"
            duration="02h 30m"
            quality="4k Quality"
          />
          <MovieCard2
            image="/src/assets/Rectangle 191.png"
            title="The Family Monks"
            genre="Action, Comedy"
            rating="4.5"
            duration="02h 30m"
            quality="4k Quality"
          />
          <MovieCard2
            image="/src/assets/Rectangle 191.png"
            title="The Family Monks"
            genre="Action, Comedy"
            rating="4.5"
            duration="02h 30m"
            quality="4k Quality"
          />
          <MovieCard2
            image="/src/assets/Rectangle 191.png"
            title="The Family Monks"
            genre="Action, Comedy"
            rating="4.5"
            duration="02h 30m"
            quality="4k Quality"
          />
        </Slider>
      </SliderContainer>
    </SectionContainer>
  );
};
const CardContainer = styled.div`
  width: 250px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const MovieTitle = styled.h3`
  color: #fff;
  font-size: 18px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

const Genre = styled.span`
  color: #888;
`;

const Rating = styled.span`
  color: #f39c12;
`;

const Duration = styled.span`
  color: #888;
`;

const Quality = styled.span`
  color: #888;
`;
const SectionContainer = styled.div`
  margin-top: 20px;
  background-color: #222;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

const SliderContainer = styled.div`
  width: 100%;
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export default NewestReleases;
