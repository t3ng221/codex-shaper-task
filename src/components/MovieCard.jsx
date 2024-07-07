/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ image, title, genre, rating, duration, quality }) => {
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

const CardContainer = styled.div`
  width: 250px;
  margin: 10px;

  border-radius: 10px;
  overflow: hidden;
  margin-top: -50px;
  z-index: 1;
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

export default MovieCard;
