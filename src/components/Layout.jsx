import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import PageTitle from './PageTitle'

const LayoutContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`

// const PageContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `

export default function Layout(props) {
    return(
        <LayoutContainer>
            <Header/>
            <PageTitle>MQ 조회</PageTitle>
            {props.children}
        </LayoutContainer>
    )
}