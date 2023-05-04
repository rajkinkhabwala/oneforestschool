import { DataTable } from 'mantine-datatable';
import { tableStyles } from "./table.styles"
import { useEffect, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { Button } from '@mantine/core';

const PAGE_SIZE = 8;
const enableHeader = true;

export default function UserTable() {
    const data = [
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 1, course_name: 'first course' },
        { course_code: 2, course_name: 'second course' }
    ]

    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(data.slice(0, PAGE_SIZE));

    const { classes, cx } = tableStyles()

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(data.slice(from, to));
    }, [page]);


    return (
        <div>
            <div className={classes.header}>
                <h2>Table Title</h2>
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
                page={page}
                recordsPerPage={PAGE_SIZE}
                onPageChange={(p) => setPage(p)}
                totalRecords={data.length}
                columns={[
                    { accessor: "course_code", title: "Course Code" },
                    { accessor: "course_name", title: "Course Name" },
                ]}
            />
        </div>
    )

}