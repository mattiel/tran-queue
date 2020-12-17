import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: inline-block;
    position: relative;
    transition: .2s ease-in;
`

// noinspection CssInvalidPseudoSelector
const Input = styled.input`
    height: 2.5rem;
    color: var(--color-white);
    background-color: var(--color-gray-900);
    padding: 1.25rem .25rem .25rem .25rem;
    border-bottom: 2px solid transparent;
    width: 100%;

    &::-webkit-calendar-picker-indicator {
        filter: invert(1) brightness(50%);
        will-change: filter;
        transition: .1s filter ease-in;
    }

    &::-webkit-datetime-edit {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: inherit;
    }
  
    ${props => props.isActive && `
        border-color: var(--color-primary-400);
        transition: border-color .2s ease-in;
        
        &::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }
    `}
`;

const Label = styled.label`
    position: absolute;
    left: .25rem;
    will-change: transform;
    transition: transform .2s ease-in;
    transition-property: transform, top, left;
    color: var(--color-gray-300);
    z-index: var(--z-index-2);
    pointer-events: none;
    font-size: .875rem;
    top: 50%;
    transform: translateY(-50%);
  
    ${props => props.isActive && `
        font-size: .625rem;
        top: 0;
        transform: translateY(.25rem);
        `
    }
`;


export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: props.isFocused || false,
            type: props.type || "text",
            label: props.label || "",
            value: props.value || "",
        }

        this.inputRef = React.createRef();
    }

    updateValue(e) {
        const value = e.target.value;
        this.setState({value});
    }

    // toggleFocus() {
    //     this.setState({ isFocused: !this });
    // }

    render() {
        const {type, isFocused, value, label} = this.state;

        return(
            <InputContainer>
                <Input
                    type={type}
                    ref={this.inputRef}
                    isActive={value || isFocused}
                    onFocus={() => this.setState({ isFocused: true })}
                    onBlur={() => this.setState({ isFocused: false })}
                    onChange={this.updateValue.bind(this)}
                />
                <Label isActive={isFocused || value !== "" || type === "date"}>{label}</Label>
            </InputContainer>
        )
    }
}