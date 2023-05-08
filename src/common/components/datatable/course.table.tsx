import { DataTable } from 'mantine-datatable';
import { tableStyles } from "./table.styles"
import { useEffect, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { CourseTableProps } from './table';

const PAGE_SIZE = 8;

export default function CourseTable({data, isLoading, enableHeader} : CourseTableProps) {
  
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(data?.items?.slice(0, PAGE_SIZE));

    const { classes, cx } = tableStyles()

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(data?.items?.slice(from, to));
    }, [data, page]);


    return (
        <div>
            <div className={classes.header}>
                {enableHeader ?
                    <Button className="add-course" leftIcon={<IconPlus />}>
                        Add Course
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
                fetching={isLoading}
                page={page}
                recordsPerPage={PAGE_SIZE}
                onPageChange={(p) => setPage(p)}
                totalRecords={data?.items?.length}
                columns={[
                    { accessor: "id", title: "Course Code" },
                    { accessor: "name", title: "Course Name" },
                    { accessor: "code", title: "Course Code"},
                    { accessor: "visibility", title: "Course Visibility"}
                ]}
            />
        </div>
    )

}