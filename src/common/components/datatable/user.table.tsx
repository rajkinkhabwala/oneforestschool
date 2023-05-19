import { DataTable } from 'mantine-datatable';
import { tableStyles } from "./table.styles"
import { useEffect, useState } from 'react';
import { IconEyeFilled, IconPlus, IconTrash } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import {LazyUser} from "../../../models";
import { UserTableProps } from './table';
import { useNavigate } from 'react-router-dom';

const PAGE_SIZE = 8;

export default function UserTable({data, isLoading, enableHeader, columns} : UserTableProps ){
   
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(data?.slice(0, PAGE_SIZE));

    const { classes } = tableStyles()
    const navigate = useNavigate();

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(data?.slice(from, to));
    }, [data, page]);


    function removeUser(rowData:LazyUser){

        

    }


    return (
        <div>
            <div className={classes.header}>
                <h2>Table Title</h2>
                {enableHeader ?
                    <Button className="add-user" leftIcon={<IconPlus />}>
                        Add User
                    </Button>
                    :
                    <></>}
            </div>
            <DataTable
                className={classes.table}
                records={records}
                withBorder
                withColumnBorders
                height={300}
                page={page}
                fetching={isLoading}
                recordsPerPage={PAGE_SIZE}
                onPageChange={(p) => setPage(p)}
                totalRecords={data?.length}
                columns={columns ? columns : [
                    { accessor: "email", title: "Email"},
                    { accessor: "name", title: "Name" },
                    { accessor: "Modify", title: "Modify", 
                    render(record: LazyUser, index) {
                        return (<div className={classes.modify}>
                              {/* <span><IconEyeFilled cursor={"pointer"} strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData.id}`)}/></span> */}
                              {/* <span onClick={() => removeUser(rowData)}><IconTrash cursor={"pointer"} strokeWidth={2} color={'red'}/></span> */}
                            </div>)
                    },}
                ]}
            />
        </div>
    )

}