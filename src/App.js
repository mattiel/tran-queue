import Global from './Global'
import React from 'react'
import Layout from './components/Layout'
import Query from './pages/Query'
import styled from 'styled-components'

const TableWrapper = styled.section`
  margin: 1rem;
  overflow: hidden;
`

function App() {
    return (
        <div className="App">
            <Global/>
            <Layout>
                <TableWrapper>
                    <Query/>
                </TableWrapper>
            </Layout>
        </div>
    );
}

export default App;
