import { DataTable } from 'mantine-datatable';
import { tableStyles } from "./table.styles"
import { useEffect, useState } from 'react';
import { IconEdit, IconPlus } from '@tabler/icons-react';
import { DepartmentTableProps } from './table';
import { Department } from '../../../API';
import { Link, useNavigate } from 'react-router-dom';

const PAGE_SIZE = 8;

export default function DepartmentTable({data, isLoading, enableHeader, columns} : DepartmentTableProps ){
   
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(data?.items?.slice(0, PAGE_SIZE));

    const { classes, cx } = tableStyles()
    const navigate = useNavigate()

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(data?.items?.slice(from, to));
    }, [data, page]);



    return (
        <div>
            <div className={classes.header}>
                {enableHeader ?
                    <Link to={'create'} >Add New Department</Link>
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
                recordsPerPage={PAGE_SIZE}
                onPageChange={(p) => setPage(p)}
                totalRecords={data?.items?.length}
                columns={columns ? columns : [
                    { accessor: "id", title: "Department ID"},
                    { accessor: "name", title: "Department Name" },
                    { accessor: "code", title: "Department Code"},
                    { accessor: "Modify", width:"20%",
                      render: (rowData: Department) => {
                        return(
                            <div className="crud-btn-container">
                              <span>
                                <IconEdit strokeWidth={2} color={'blue'} onClick={() => navigate(`${rowData.id}`)}/></span>
                            </div>
                          )
                      }
                }
                ]}
            />
        </div>

    )

}