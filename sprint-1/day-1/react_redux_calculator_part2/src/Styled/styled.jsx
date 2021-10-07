import styled from 'styled-components'

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 200px);
    justify-content: center;
`;
const GridInsideDiv = styled.div`
    border: 2px solid black;
    border-radius: 10px;

    & > h2{
        cursor: pointer;
    }

`;
const DisplayDiv = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: 200px;
    height: 100px;
    margin: auto;
    display: inline-block;
    font-size: 30px;
    margin-top: 0px;

    & input {
        width: 50px;
        height: 30px; 
        font-size: 20px !important; 
        margin-top: 20px;
    }
`;



export { GridDiv, DisplayDiv, GridInsideDiv };