import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = {
  WrapperTransactions: styled.table`
    margin: 50px;
    width: 400px;
    text-align: center;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    border-collapse: collapse;
  `,
  TableHead: styled.thead`
    background-color: cornflowerblue;
    color: white;
    text-transform: uppercase;
  `,
  TableHeadSection: styled.th`
    padding: 10px;
    border: 1px solid rgb(227, 227, 227);
  `,
  TableContent: styled.td`
    padding: 10px;
    border: 1px solid rgb(227, 227, 227);
    color: black;
  `,
};

const TransactionHistory = ({ transactions }) => {
  return (
    <Styled.WrapperTransactions>
      <Styled.TableHead>
        <tr>
          <Styled.TableHeadSection>Type</Styled.TableHeadSection>
          <Styled.TableHeadSection>Amount</Styled.TableHeadSection>
          <Styled.TableHeadSection>Currency</Styled.TableHeadSection>
        </tr>
      </Styled.TableHead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Styled.TableContent
                style={{
                  textTransform: 'capitalize',
                  color: '#818181',
                }}
              >
                {type}
              </Styled.TableContent>
              <Styled.TableContent
                style={{
                  color: '#818181',
                }}
              >
                {amount}
              </Styled.TableContent>
              <Styled.TableContent
                style={{
                  color: '#818181',
                }}
              >
                {currency}
              </Styled.TableContent>
            </tr>
          );
        })}
      </tbody>
    </Styled.WrapperTransactions>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
