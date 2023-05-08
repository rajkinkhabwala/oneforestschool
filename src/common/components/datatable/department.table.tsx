import { DataTable } from 'mantine-datatable';
import { tableStyles } from "./table.styles"
import { useEffect, useState } from 'react';
import {  IconEyeFilled, IconTrash } from '@tabler/icons-react';
import { DepartmentTableProps } from './table';
import { Department } from '../../../API';
import { useNavigate } from 'react-router-dom';
import { Button, Title, Text } from '@mantine/core';
import { useMutation, useQueryClient } from 'react-query';
import { deleteDepartment } from '../../api/department/department.api';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

const PAGE_SIZE = 8;

export default function DepartmentTable({data, isLoading, enableHeader, columns} : DepartmentTableProps ){
   
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(data?.items?.slice(0, PAGE_SIZE));
    const deleteMutation = useMutation(deleteDepartment);

    const { classes, cx } = tableStyles()
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(data?.items?.slice(from, to));
    }, [data, page]);

    function removeDepartment(rowData: Department): void {
        modals.openConfirmModal({
            title: 'Delete your profile',
            centered: true,
            children: (
              <Text size="sm">
                Are you sure you want to delete department {rowData.name}? This action is destructive and you will have
                to contact support to restore your data.
              </Text>
            ),
            labels: { confirm: 'Delete Department', cancel: "No don't delete it" },
            confirmProps: { color: 'red' },
            onConfirm: () => {
              deleteMutation.mutate(rowData.id, {
                onSuccess(data, variables, context) {
                  notifications.show({
                    title: 'Successful',
                    message: `Successfully deleted ${data.data?.deleteDepartment?.name}!`,
                    color: 'red'
                  });
                  queryClient.invalidateQueries({queryKey: ["departments"]})   
                },
              })
            },  
          })
    }

    return (
        <div>
            <Title size={"h2"}>Department</Title>
            <div className={classes.header}>
                {enableHeader ?
                    <><></><Button onClick={() => navigate('create')}>Create Department</Button></>
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
                    { accessor: "name", title: "Department Name" },
                    { accessor: "code", title: "Department Code"},
                    { accessor: "Modify", width:"20%",
                      render: (rowData: Department) => {
                          
                        return(
                            <div className={classes.modify}>
                              <span><IconEyeFilled cursor={"pointer"} strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData.id}`)}/></span>
                              <span onClick={() => removeDepartment(rowData)}><IconTrash cursor={"pointer"} strokeWidth={2} color={'red'}/></span>
                            </div>
                          )
                      }
                }
                ]}
            />
        </div>

    )

}