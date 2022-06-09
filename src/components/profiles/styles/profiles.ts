import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
  font-size: 45px;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const Picture = styled.img`
  cursor: pointer;
  width: 100%;
  max-height: 150px;
  height: auto;
  border: 3px solid black;
`;

export const Item = styled.li`
  list-style-type: none;
  text-align: center;

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }
  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
