import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = {
  StatisticWrapper: styled.section`
    margin: 50px;
    border: 1px solid rgb(227, 227, 227);
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  `,
  Title: styled.h2`
    text-align: center;
    width: 300px;
    padding: 30px;
    margin: auto;
    text-transform: uppercase;
  `,
  StatisticList: styled.div`
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  StatisticItem: styled.div`
    text-align: center;
    padding: 30px;
    text-align: center;
  `,
  Label: styled.span`
    color: white;
    display: block;
    text-shadow: 1px 1px 2px rgb(106, 106, 106),
      -1px -1px 2px rgb(106, 106, 106);
  `,
  Percent: styled.span`
    color: white;
    text-shadow: 1px 1px 2px rgb(106, 106, 106),
      -1px -1px 2px rgb(106, 106, 106);
  `,
};

const Statistics = ({ data, title }) => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <Styled.StatisticWrapper>
      {title && <Styled.Title>{title}</Styled.Title>}
      <Styled.StatisticList>
        {data.map(item => {
          return (
            <Styled.StatisticItem
              key={item.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <Styled.Label>{item.label}</Styled.Label>
              <Styled.Percent>{item.percentage}%</Styled.Percent>
            </Styled.StatisticItem>
          );
        })}
      </Styled.StatisticList>
    </Styled.StatisticWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
