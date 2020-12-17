import React from 'react';
import styled from 'styled-components';

const Container = styled.i`
  width: ${props => props.width};
  height: ${props => props.height}
`

export default class Glyph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width || '1.5rem',
            height: props.height || '1.5rem',
            color: props.color || 'var(--color-white)'
        }
    }

    render() {
        return(
            <Container/>
        )
    }
}