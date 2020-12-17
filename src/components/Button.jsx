import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  display: inline-flex;
  color: var(--color-white);
  height: 2.5rem;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  padding: .25rem;
  font-size: .875rem;
  cursor: pointer;
  
  
  ${props => props.isPrimary && `
    background-color: #1828D8;
    &:hover {
        background-color: #2836F2
    }
    `}
`

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPrimary: props.isPrimary || false,
        }
    }

    render() {
        return(
            <Container isPrimary={this.state.isPrimary} role="button">{this.props.children}</Container>
        )
    }
}