// src/components/MainBanner.js
import React from "react";
import styled from "styled-components";

const MainBanner = () => {
  return (
    <BannerContainer>
      <Overlay />
      <BannerImage src="/src/assets/the lord.png" alt="The Lord of the Rings" />

      <BannerContent>
        <Title>THE LORD OF THE RINGS</Title>
        <Info>
          <InfoItem>4.9 Reviews</InfoItem>
          <InfoItem>02h 30m</InfoItem>
          <InfoItem>4k Quality</InfoItem>
        </Info>
        <Description>
          The Lord of the Rings is a trilogy of epic fantasy adventure films
          directed.
        </Description>
        <Buttons>
          <PlayButton>Play Trailer</PlayButton>
          <AddButton>Add to List</AddButton>
        </Buttons>
      </BannerContent>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: url("/src/assets/wallpaperflare 1.png") no-repeat center
    center/cover;
  display: flex;
  align-items: right;
  justify-content: flex-end;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const BannerImage = styled.img`
  position: absolute;
  left: 40px;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-family: Big Shoulders Display;
  font-weight: 900;
  line-height: 155px;
  text-align: left;
`;

const Info = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const InfoItem = styled.span`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
`;

const Description = styled.p`
  max-width: 600px;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const PlayButton = styled.button`
  background-color: #ff0066;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const AddButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default MainBanner;
