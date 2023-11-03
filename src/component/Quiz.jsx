import React from 'react';
import styled from 'styled-components';
import Card from './Cards';
import {ServiceData } from './Data';


export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-bottom: 90px;
  @media only screen and (max-width: 1280px) {
    margin: 24px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Services() {
  return (
    <Container id='services'>
      <h1>METALLOMANIA</h1>
      <CardContainer>
        {ServiceData?.map((service, ind) => (
          <Card {...service} key={ind} />
        ))}
      </CardContainer>
    </Container>
  );
}

export default Services;
