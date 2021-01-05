import React, { useContext, useEffect } from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";
import { TableContext } from "../pages/Query";

const Table = ({ columns, data, filters = null, onRowClick}) => {
    const { setTableInstance } = useContext(TableContext);
    const tableInstance = useTable(
        {
            columns,
            data
        },
        useFilters, // useFilters!
        useGlobalFilter // useGlobalFilter!
    );

    useEffect(() => {
        setTableInstance(tableInstance);
    }, [tableInstance, setTableInstance]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state
    } = tableInstance;

    // We don't want to render all of the rows for this example, so cap
    // it for this use case
    const firstPageRows = rows.slice(0, 10);

    return (
        <>
            {filters?.(tableInstance)}
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {firstPageRows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} onClick={() => onRowClick(row)}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                );
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <br />
            <div> 검색 결과: {rows.length} 건</div>
            <div>
                <pre>
                    <code>{JSON.stringify(state.filters, null, 2)}</code>
                </pre>
            </div>
        </>
    );
};

export default Table;