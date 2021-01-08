import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  width: 100%;
  color: var(--color-white);
  background-color: var(--color-gray-900);
`

const Logo = styled.div`
  font-weight: 700;
  pointer-events: none;
  display: flex;
  align-items: center;
  opacity: .7;
`

const Menu = styled.ul`
  list-style: none;
  font-size: .875em;
`

const MenuItem = styled.li`
  cursor: pointer
`

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <img alt="logo" height="20" src={'logo.svg'}/>
                <span style={{marginLeft: '.25rem'}}>TRAQ</span>
            </Logo>
            <Menu>
                <MenuItem>메뉴</MenuItem>
            </Menu>
        </HeaderContainer>
    )
}