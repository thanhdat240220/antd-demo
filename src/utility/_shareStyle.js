import styled from 'styled-components';
import LogoDefault from '../assets/logo-medium.png';

export const WrapContent = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    float: ${props => props.float};
    text-align: ${props => props.textAlign};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    min-height: ${props => props.minHeight};
    max-height: ${props => props.maxHeight};
    min-width: ${props => props.minWidth};
    max-width: ${props => props.maxWidth};
    display: ${props => props.display};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
`;

export const Logo = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    background-image: url(${props => props.logo || LogoDefault});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto
`