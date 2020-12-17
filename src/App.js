import Global from './Global'
import React from 'react'
import styled from 'styled-components'

import TextInput from './components/TextInput'
import Select from './components/Select'
import Button from './components/Button'
import Layout from './components/Layout'

import { useTable } from 'react-table'

const options = [
    { label: "가나다라마바사아1234567", value: 1 },
    { label: "자차카타파하890", value: 2 }
]

function App() {
    const data = React.useMemo(
        () => [
            {
                MQ_SEQ_ID:      '1234',
                SAL_DT:         '1234',
                STR_CD:         '1234',
                POS_NO:         '1234',
                TRAN_NO:        '1234',
                MQ_EXCHANGE:    '1234',
                MQ_ERR_TEXT:    '1234',
                MQ_ROUTING_KEY: '1234',
                MQ_MESSAGE:     '1234',
                REG_DT:         '1234',
            }, {
                MQ_SEQ_ID:      '1234',
                SAL_DT:         '1234',
                STR_CD:         '1234',
                POS_NO:         '1234',
                TRAN_NO:        '1234',
                MQ_EXCHANGE:    '1234',
                MQ_ERR_TEXT:    '1234',
                MQ_ROUTING_KEY: '1234',
                MQ_MESSAGE:     '1234',
                REG_DT:         '1234',
            },{
                MQ_SEQ_ID:      '1234',
                SAL_DT:         '1234',
                STR_CD:         '1234',
                POS_NO:         '1234',
                TRAN_NO:        '1234',
                MQ_EXCHANGE:    '1234',
                MQ_ERR_TEXT:    '1234',
                MQ_ROUTING_KEY: '1234',
                MQ_MESSAGE:     '1234',
                REG_DT:         '1234',
            },{
                MQ_SEQ_ID:      '1234',
                SAL_DT:         '1234',
                STR_CD:         '1234',
                POS_NO:         '1234',
                TRAN_NO:        '1234',
                MQ_EXCHANGE:    '1234',
                MQ_ERR_TEXT:    '1234',
                MQ_ROUTING_KEY: '1234',
                MQ_MESSAGE:     '1234',
                REG_DT:         '1234',
            }, {
                MQ_SEQ_ID:      '1234',
                SAL_DT:         '1234',
                STR_CD:         '1234',
                POS_NO:         '1234',
                TRAN_NO:        '1234',
                MQ_EXCHANGE:    '1234',
                MQ_ERR_TEXT:    '1234',
                MQ_ROUTING_KEY: '1234',
                MQ_MESSAGE:     '1234',
                REG_DT:         '1234',
            },{
                MQ_SEQ_ID:      '1234',
                SAL_DT:         '1234',
                STR_CD:         '1234',
                POS_NO:         '1234',
                TRAN_NO:        '1234',
                MQ_EXCHANGE:    '1234',
                MQ_ERR_TEXT:    '1234',
                MQ_ROUTING_KEY: '1234',
                MQ_MESSAGE:     '1234',
                REG_DT:         '1234',
            },

        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: '대상 큐',
                accessor: 'MQ_SEQ_ID', // accessor is the "key" in the data
            },
            {
                Header: '판매 일자',
                accessor: 'SAL_DT',
            },
            {
                Header: '매장 코드',
                accessor: 'STR_CD',
            },
            {
                Header: 'POS 번호',
                accessor: 'POS_NO',
            },
            {
                Header: 'TRAN 번호',
                accessor: 'TRAN_NO',
            },
            {
                Header: 'MQ 거래처',
                accessor: 'MQ_EXCHANGE',
            },
            {
                Header: '에러 메시지',
                accessor: 'MQ_ERR_TEXT',
            },
            {
                Header: 'MQ 라우팅 키',
                accessor: 'MQ_ROUTING_KEY',
            },
            {
                Header: 'MQ 메시지',
                accessor: 'MQ_MESSAGE',
            },
            {
                Header: '등록 일자',
                accessor: 'REG_DT',
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    const Grid = styled.div `
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
      grid-gap: 1px;
      padding: 1px;
      
      & :first-child {
        grid-column: 1 / -1;
      }
    `

    const selectedValue = React.useState(null);

    return (
        <div className="App">
            <Global/>
            <Layout>
                <Grid>
                    <Select
                        options={options}
                        label="대상큐"
                    />
                    <Select options={options} label="트란종류"/>
                    <TextInput label="POS 번호"/>
                    <TextInput label="거래처"/>
                    <TextInput label="시작 날짜" type="date"/>
                    <TextInput label="날짜 끝" type="date"/>
                    <TextInput label="TRAN NO 시작"/>
                    <TextInput label="TRAN NO 끝"/>
                    <Button isPrimary>조회</Button>
                </Grid>
                <span>{`Selected Value = ${selectedValue}`}</span>
                <table {...getTableProps()}>
                    <thead>
                    {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {// Loop over the headers in each row
                                    headerGroup.headers.map(column => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()}>
                                            {// Render the header
                                                column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                    </thead>
                    {/* Apply the table body props */}
                    <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                        rows.map(row => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()}>
                                    {// Loop over the rows cells
                                        row.cells.map(cell => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {// Render the cell contents
                                                        cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Layout>
        </div>
    );
}

export default App;
