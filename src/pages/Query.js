import React, { createContext, useState } from 'react'

import styled from 'styled-components'
import TextInput from '../components/TextInput'
// import Select from './components/Select'
// import Button from './components/Button'
import Table from '../components/Table'

export const TableContext = createContext();

const manifest = require('../manifest.json');

const TablePanel = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 30rem;
  height: 100%;
  background-color: var(--color-gray-30);
  border-radius: .5rem 0 0 .5rem;
  color: var(--color-gray-1000);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;
`

const TablePanelContainer = styled.div`
  padding: 1rem;
  overflow-y: auto;
  height: 100%;
  flex-grow: 1;
`

const TablePanelGrid = styled.div`
  display: grid;
  grid-gap: .5rem;
  overflow: hidden;
`

const TablePanelHeader = styled.header`
  line-height: 3rem;
  font-weight: 700;
  font-size: 1rem;
  padding: 0 1rem;
  background-color: var(--color-gray-900);
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
`

const TablePanelHeaderClose = styled.a`
  display: inline-block;
  color: var(--color-gray-300);
  font-size: .875rem;
  cursor: pointer;
`

const PanelSection = styled.div`
  border: 1px solid var(--color-gray-200);
  border-radius: .25rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const PanelSectionHeader = styled.div`
  line-height: 2rem;
  padding: 0 .5rem;
  color: var(--color-gray-1000);
  font-weight: 700;
  font-size: .75rem;
`

const PanelSectionContent = styled.div`
  padding: 0 .5rem .5rem;
`

const PanelSectionData = styled.div`
  color: var(--color-gray-800);
  font-size: .875rem;
  overflow-y: auto;
  white-space: pre;
`

const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-gap: 1px;
  padding-bottom: 1rem;
  
  //& :first-child {
  //  grid-column: 1 / -1;
  //}
`

export default function Query() {
    const data = React.useMemo(
        () => manifest,
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: '대상 큐',
                accessor: 'mq_seq_id', // accessor is the "key" in the data
            },
            {
                Header: '판매 일자',
                accessor: 'mq_yyyymmdd',
            },
            {
                Header: '매장 코드',
                accessor: 'str_cd',
            },
            {
                Header: 'POS 번호',
                accessor: 'pos_no',
            },
            {
                Header: 'TRAN 번호',
                accessor: 'tran_no',
            },
            {
                Header: 'MQ 거래처',
                accessor: 'mq_exchange',
            },
            {
                Header: '에러 메시지',
                accessor: 'mq_err_text',
            },
            {
                Header: 'MQ 라우팅 키',
                accessor: 'mq_routing_key',
            },
            {
                Header: 'MQ 메시지',
                accessor: 'mq_message',
            },
            {
                Header: '등록 일자',
                accessor: 'reg_dt',
            },
        ],
        []
    )

    const [tableInstance, setTableInstance] = useState(null);
    const [tablePanelIsOpen, setTablePanelIsOpen] = useState(false);
    const [tableClickedRowData, setTableClickedRowData] = useState("");

    return(
        <div className="query">
            <TableContext.Provider value={{ tableInstance, setTableInstance }}>
                {tablePanelIsOpen && (
                    <TablePanel>
                        <TablePanelHeader>
                            데이터 조회
                            <TablePanelHeaderClose onClick={() => setTablePanelIsOpen(false)}>
                                닫기
                            </TablePanelHeaderClose>
                        </TablePanelHeader>
                        <TablePanelContainer>
                            <TablePanelGrid>
                                {
                                    Object.keys(tableClickedRowData).map((key, idx) => {
                                        return (
                                            <PanelSection key={idx}>
                                                <PanelSectionHeader>{key}</PanelSectionHeader>
                                                <PanelSectionContent>
                                                    <PanelSectionData>
                                                        {tableClickedRowData[key] || "데이터가 없습니다"}
                                                    </PanelSectionData>
                                                </PanelSectionContent>
                                            </PanelSection>
                                        )
                                    })
                                }
                            </TablePanelGrid>
                        </TablePanelContainer>


                    </TablePanel>
                )}

                <Grid>
                    <TextInput
                        label="전체 검색"
                        onChange={value => tableInstance.setGlobalFilter(value)}
                    />
                    <TextInput
                        label="에러 메시지"
                        onChange={value => tableInstance.columns[6].setFilter(value)}
                    />
                    <TextInput
                        label="등록 일자"
                        type="date"
                        onChange={value => tableInstance.columns[9].setFilter(value)}
                    />
                </Grid>

                <Table
                    columns={columns}
                    data={data}
                    onRowClick={(row) => {
                        setTablePanelIsOpen(prev => prev || !prev);
                        setTableClickedRowData(row.original);
                    }}
                />
            </TableContext.Provider>
        </div>
    )
}