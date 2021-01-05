import Global from './Global'
import React from 'react'
import Layout from './components/Layout'
import Query from './pages/Query'

function App() {
    return (
        <div className="App">
            <Global/>
            <Layout>
                <Query/>
            </Layout>
        </div>
    );
}

export default App;
