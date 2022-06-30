import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({backgroundColor}) => backgroundColor ?? '#6495ED'};
    color: ${({color}) => color ?? 'white'};
    font-size: 20px;
    padding: 1em 1.5em;
    display: flex;
    justify-content: space-between;
`;
