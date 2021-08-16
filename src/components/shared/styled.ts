import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 600px;
  cursor: pointer;
`;
export const PostMessage = styled.div`
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 24px;
  width: 600px;

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const HeadText = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const DetailsContainer = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: row-reverse;
  width: 600px;
  height: 32px;
`;

export const Info = styled.div`
  margin-right: 8px;
  span {
    text-align: end;
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }

  p {
    margin: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    text-align: right;

    color: rgba(0, 0, 0, 0.35);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  padding: 16px;
  height: 51px;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const Textarea = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  padding: 16px;
  height: 160px;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  resize: none;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row-reverse;

  button {
    filter: drop-shadow(0px 100px 80px rgba(225, 108, 116, 0.11))
      drop-shadow(0px 41.7776px 33.4221px rgba(225, 108, 116, 0.079074))
      drop-shadow(0px 22.3363px 17.869px rgba(225, 108, 116, 0.0655718))
      drop-shadow(0px 12.5216px 10.0172px rgba(225, 108, 116, 0.055))
      drop-shadow(0px 6.6501px 5.32008px rgba(225, 108, 116, 0.0444282))
      drop-shadow(0px 2.76726px 2.21381px rgba(225, 108, 116, 0.030926));

    width: 104px;
    height: 48px;
    background: linear-gradient(
      122.3deg,
      rgba(235, 156, 134, 0.6) 35.27%,
      rgba(255, 255, 255, 0) 118.66%
    );
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 32px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
`;
