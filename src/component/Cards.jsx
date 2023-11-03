import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  width: 450px;
  grid-template-rows: 5fr 4fr;
  border-radius: 20px;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    min-width: 100%;
    max-width: 300px;
  }
  background: #ffffff;
`;
const ImageContainer = styled.div`
  max-width: 500px;
  margin: auto;
  @media (max-width: 768px) {
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: contain;
  margin: auto;
`;
const CardTextContainer = styled.div`
  padding: 24px;
  max-height: 250px;
  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`;

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #002959;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
const CardBody = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  font-weight: 400;
  min-height: 60px;
  margin: 8px 0;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const CardLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 28px;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 0px 22px;
  border: 1px solid gray;
  background-color: #ffffff;
  cursor: pointer;
  font-family: 'Dongle', sans-serif;
  width: fit-content;
  &:hover {
    border: 1px solid pink;
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }
  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`;

function Card({ image, title = '', description, link, linkText }) {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={image} />
      </ImageContainer>
      <CardTextContainer>
        {title && <CardHeading>{title}</CardHeading>}
        <CardBody>{description}</CardBody>
        {link && linkText && (
          <CardLink target='_blank' href={link}>
            {linkText}
          </CardLink>
        )}
      </CardTextContainer>
    </CardContainer>
  );
}

export default Card;
