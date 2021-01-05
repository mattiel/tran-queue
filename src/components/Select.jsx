import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
    height: 2.5rem;
    background-color: var(--color-gray-900);
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    position: relative;
  
  &:hover {
    box-shadow: inset 0 0 0 1px var(--color-gray-800);
    
    & span {
      color: var(--color-gray-100);
    }
  }
  
  &:before {
    position: absolute;
    content: '';
    right: 1rem;
    border-top: .375rem solid var(--color-gray-500);
    border-left: .375rem solid transparent;
    border-right: .375rem solid transparent;
    transform-origin: center;
    width: 0;
    height: 0;
    transition: .1s transform ease-in;
    
    ${props => props.isActive && `
        transform: rotate(-180deg);
        border-top-color: var(--color-white);
    `}
  }
`
const SelectedOption = styled.span`
    margin-left: .25rem;
    color: ${props => props.isSelected ? `var(--color-white)` : `var(--color-gray-400)`};
    font-size: .875rem;
    font-weight: 500;
`
const SelectDropdown = styled.div`
    position: absolute;
    top: 2.5rem;
    background-color: var(--color-gray-800);
    max-height: 33vh;
    transition: max-height .2s ease-in;
    overflow: hidden;
    width: 100%;
    z-index: var(--z-index-3);
`
const SelectOptions = styled.ul`
  list-style: none;
  color: white;
  overflow-y: auto;
`
const SelectOption = styled.li`
  line-height: 2;
  transition: background-color .1s ease-in;
  font-size: .875rem;
  padding: 0.5rem;
  &:hover {
    background-color: #2836F2;
    font-weight: 700;
  }
`
const SelectHiddenInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  outline: none;
  cursor: none;
  pointer-events: none;
`

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.hiddenInputRef = React.createRef();
        this.state = {
            options: props.options || [],
            isActive: props.isActive || false,
            canSearch: props.canSearch || false,
            name: props.name || "",
            label: props.label || 0,
            value: props.value || 0,
        }
        this.handleOptionSelect = this.handleOptionSelect.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleDeactivate);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleDeactivate);
    }

    handleDeactivate = event => {
        if (this.containerRef && !this.containerRef.current.contains(event.target)) {
            this.setState({isActive: false});
        } else if (this.containerRef.current === document.activeElement) {
            // this.setState({isActive: false});
        }
    }

    handleActivate = () => {
        this.setState({isActive: true});
    }

    toggleSelect(event) {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        this.setState({isActive: !this.state.isActive});
    }

    handleOptionSelect = (label, value) => {
        this.hiddenInputRef.current.value = value;
        this.props.onSelect(label, value, this.state.name);
        this.setState({
            label: label,
            value: value
        });
    }

    render() {
        const options = this.props.options;

        return(
            <SelectContainer
                // onFocus={this.handleActivate}
                onBlur={this.handleDeactivate.bind(this)}
                onClick={this.toggleSelect.bind(this)}
                ref={this.containerRef}
                tabIndex={0}
                role={'select'}
                isActive={this.state.isActive}
                name={this.props.name}
            >
                <SelectedOption isSelected={this.state.value !== 0}>
                    {this.state.value !== 0 ? this.state.label : this.state.name }
                </SelectedOption>
                {this.state.isActive && (
                    <SelectDropdown>
                        <SelectOptions>
                            {options.map(option => {
                                return (
                                    <SelectOption
                                        key={option.label}
                                        isActive={this.state.isActive}
                                        onClick={() => this.handleOptionSelect(option.label, option.value)}
                                    >
                                        {option.label}
                                    </SelectOption>
                                )
                            })}
                        </SelectOptions>
                    </SelectDropdown>
                )}
                <SelectHiddenInput
                    tabIndex={-1}
                    aria-hidden
                    hidden={true}
                    ref={this.hiddenInputRef}
                />
            </SelectContainer>
        )
    }
}
