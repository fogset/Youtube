import styled from "styled-components";
export const Container = styled.div`
    top: 0;
    height: 56px;
    background-color: white;
    position: fixed;
    width: 100%;
    font-size: large;
`;
export const FaBars_Container = styled.div`
    margin-left: 2%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
export const MagnifyingGlass_Container = styled.div`
    margin-right: 4%;
`;
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
`;
export const Search = styled.div`
    height: 30px;
    width: 40%;
    position: absolute;
    right: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 25px;
`;
export const Input = styled.div`
    border: none;
    background-color: transparent;
`;

export const Button = styled.button`
    padding: 5x 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    position: absolute;
    right: 2%;
`;
