import { DataTable } from 'mantine-datatable';
import { tableStyles } from "./table.styles"
import { useEffect, useState } from 'react';
import { NotificationTableProps } from './table';
import { Button, Text, Title } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { modals } from '@mantine/modals';
import { Notification } from '../../../API';
import { useMutation, useQueryClient } from 'react-query';
import { deleteNotification } from '../../api/notification/notification.api';
import { notifications } from '@mantine/notifications';
import { IconEyeFilled, IconTrash } from '@tabler/icons-react';
const PAGE_SIZE = 8;

export default function NotificationTable({data, isLoading, enableHeader, columns} : NotificationTableProps ){
   
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(data?.items?.slice(0, PAGE_SIZE));

    const { classes, cx } = tableStyles()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const deleteMutation = useMutation(deleteNotification);

    function removeNotification(rowData: Notification): void {
        modals.openConfirmModal({
            title: 'Delete your profile',
            centered: true,
            children: (
              <Text size="sm">
                Are you sure you want to delete department {rowData.title}? This action is destructive and you will have
                to contact support to restore your data.
              </Text>
            ),
            labels: { confirm: 'Delete Notification', cancel: "No don't delete it" },
            confirmProps: { color: 'red' },
            onConfirm: () => {
              deleteMutation.mutate({id:rowData.id}, {
                onSuccess(data, variables, context) {
                  notifications.show({
                    title: 'Successful',
                    message: `Successfully deleted ${data.data?.deleteNotification?.title}!`,
                    color: 'red'
                  });
                  queryClient.invalidateQueries({queryKey: ["notifications"]})   
                },
              })
            },  
          })
    }

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(data?.items?.slice(from, to));
    }, [data, page]);

    
    return (
        <div>
              <Title size={"h2"}>Notifications</Title>
              <div className={classes.header}>
                {enableHeader ?
                    <><></><Button onClick={() => navigate('create')}>Create Notification</Button></>
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
                    // { accessor: "id", title: " ID"},
                    { accessor: "title", title: "Notificaiton Title" },
                    { accessor: "message", title: "Notification Message"},
                    { accessor: "Modify", width:"20%",
                      render: (rowData: Notification) => {
                          
                        return(
                            <div className={classes.modify}>
                              <span><IconEyeFilled cursor={"pointer"} strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData}`)}/></span>
                              <span onClick={() => removeNotification(rowData)}><IconTrash cursor={"pointer"} strokeWidth={2} color={'red'}/></span>
                            </div>
                          )
                      }
                }
                ]}
            />
        </div>

    )

}