import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
    color: var(--color-gray-400);
    font-size: .875rem;
    font-weight: 500;
    ${props => props.isSelected && `color: var(--color-white)`};
`

const Dropdown = styled.div`
    position: absolute;
    top: 2.5rem;
    background-color: var(--color-gray-800);
    max-height: 0;
    ${props => props.isActive && `max-height: 33vh`};
    transition: max-height .2s ease-in;
    overflow: hidden;
    width: 100%;
    z-index: var(--z-index-3);
`
const Options = styled.ul`
  list-style: none;
  color: white;
  overflow-y: auto;
`

const Option = styled.li`
  line-height: 2;
  transition: background-color .1s ease-in;
  font-size: .875rem;
  padding: 0.5rem;
  &:hover {
    background-color: #2836F2;
    font-weight: 700;
  }
`

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.state = {
            options: props.options || [],
            isActive: props.isActive || false,
            canSearch: props.canSearch || false,
            label: props.label || "",
            selectedValue: props.selectedValue || props.label,
        }
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

    handleOptionSelect = value => {
        this.setState({selectedValue: value});
    }

    render() {
        return(
            <Container
                // onFocus={this.handleActivate}
                onBlur={this.handleDeactivate.bind(this)}
                onClick={this.toggleSelect.bind(this)}
                ref={this.containerRef}
                tabIndex={0}
                role={'select'}
                isActive={this.state.isActive}
            >
                <SelectedOption
                    isSelected={this.state.selectedValue !== this.state.label && this.state.selectedValue !== ""}>
                    {this.state.selectedValue || this.state.options[0].label}
                </SelectedOption>
                <Dropdown isActive={this.state.isActive}>
                    <Options>
                        {this.state.options.map(option => {
                           return (
                               <Option
                                   key={option.value}
                                   isActive={this.state.isActive}
                                   onClick={() => this.handleOptionSelect(option.label)}
                               >
                                       {option.label}
                               </Option>
                           )
                        })}
                    </Options>
                </Dropdown>

            </Container>
        )
    }
}