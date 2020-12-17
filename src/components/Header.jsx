import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  width: 100%;
  padding: 1rem;
  color: var(--color-white);
  background-color: var(--color-gray-1000);
`

const Logo = styled.div`
  font-weight: 700;
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
            <Logo>TRAN MQ</Logo>
            <Menu>
                <MenuItem>메뉴</MenuItem>
            </Menu>
        </HeaderContainer>
    )
}