import React, {Component} from 'react';
import styled from "styled-components";

const StyledLink = styled.a`
    color: ${props => props.active ? 'pink' : '#fff'};
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    padding-right: 33px;
    border-right: 1px dotted #fff;
    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }
    &last-child {
        border-right: none;
    }
`;


class Links extends Component {
    render() {
        const List = this.props.links.map(obj =>
            <StyledLink href={obj.link} key={obj.id} > {obj.name} </StyledLink>
        )
        return (
            List
        )
    }
}

export default Links;