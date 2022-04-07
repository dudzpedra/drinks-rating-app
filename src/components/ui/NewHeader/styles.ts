import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 60px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secundary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.5rem;
`

export const Logo = styled.img`
    width: 70%;
`

export const Title = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const NavBar = styled.nav`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`