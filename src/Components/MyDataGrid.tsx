import React from "react";

import {
    DataGridBody,
    DataGridRow,
    DataGridHeader,
    DataGridHeaderCell,
    DataGridCell,
    DataGrid,
    createTableColumn,
    type TableColumnDefinition,
    TableCellLayout
} from "@fluentui/react-components";

import "./MyDataGrid.css";

import type {JSONResponse} from "../Models/JSONResponse.ts";

interface Props {
    data: JSONResponse | null;
}

interface Item {
    id: number;
    title: string;
    value: string;
}

const MyDataGrid: React.FC<Props> = ({ data }) => {

    const items: Item[] = [
        { id: 1, title: "Temp", value: String(data ? data.temp / 1_000 : "_") + "°C" },
        { id: 2, title: "Cool", value: String(data ? data.cool : "_") }
    ];

    const columns: TableColumnDefinition<Item>[] = [
        createTableColumn<Item>({
            columnId: 1,
            renderHeaderCell: () => "Title",
            renderCell: (item) => item.title,
        }),
        createTableColumn<Item>({
            columnId: 2,
            renderHeaderCell: () => "Value",
            renderCell: (item) => item.value,
        }),
    ];

    return (
        <DataGrid id="grid" items={items} columns={columns} getRowId={(item) => item.id}>
            <DataGridHeader>
                <DataGridRow>
                    {({ renderHeaderCell }) => (
                        <DataGridHeaderCell>
                            <TableCellLayout style={{ justifyContent: "center", width: "50%" }}>
                                {renderHeaderCell()}
                            </TableCellLayout>
                        </DataGridHeaderCell>
                    )}
                </DataGridRow>
            </DataGridHeader>
            <DataGridBody<Item>>
                {({ item, rowId }) => (
                    <DataGridRow<Item> key={rowId}>
                        {({ renderCell }) => (
                            <DataGridCell>
                                <TableCellLayout style={{ justifyContent: "center", width: "50%" }}>
                                    {renderCell(item)}
                                </TableCellLayout>
                            </DataGridCell>
                        )}
                    </DataGridRow>
                )}
            </DataGridBody>
        </DataGrid>
    );
}

export default MyDataGrid;
