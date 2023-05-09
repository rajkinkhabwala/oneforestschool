import { DataTable } from 'mantine-datatable';
import { tableStyles } from "./table.styles"
import { useEffect, useState } from 'react';
import { IconEyeCheck, IconEyeFilled, IconPlus, IconTrash } from '@tabler/icons-react';
import { CourseTableProps } from './table';
import { Course } from '../../../API';
import { modals } from '@mantine/modals';
import { deleteCourse } from '../../api/course/course.api';
import { useMutation, useQueryClient } from 'react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { IconEyeOff } from '@tabler/icons-react';
import { Button, Title, Text } from '@mantine/core';




const PAGE_SIZE = 8;

export default function CourseTable({data, isLoading, enableHeader} : CourseTableProps) {
  
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(data?.items?.slice(0, PAGE_SIZE));
    const navigate = useNavigate();
    const deleteMutation = useMutation(deleteCourse);
    const queryClient = useQueryClient()

    const { classes } = tableStyles()

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(data?.items?.slice(from, to));
    }, [data, page]);

    function removeCourse(rowData: Course): void {
        modals.openConfirmModal({
            title: 'Delete the course',
            centered: true,
            children: (
              <Text size="sm">
                Are you sure you want to delete course {rowData.name}? This action is destructive and you will have
                to contact support to restore your data.
              </Text>
            ),
            labels: { confirm: 'Delete Course', cancel: "No don't delete it" },
            confirmProps: { color: 'red' },
            onConfirm: () => {
              deleteMutation.mutate(rowData.id, {
                onSuccess(data, variables, context) {
                  notifications.show({
                    title: 'Successful',
                    message: `Successfully deleted ${data.data?.deleteCourse?.name}!`,
                    color: 'red'
                  });
                  queryClient.invalidateQueries({queryKey: ["courses"]}) 
                    
                },
              })
            },  
          })
    }

    console.log(data);
    return (
        <div>
            <Title size={"h2"}>Course</Title>
            <div className={classes.header}>
                {enableHeader ?
                    <Button onClick={() => navigate('create')} leftIcon={<IconPlus />}>
                        Create Course
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
                    { accessor: "visibility", title: "Course Visibility",
                        render: (vis: Course) => {
                            return(
                            <div style={{textAlign: "center"}}>
                            {vis.visibility === true ? 
                            <IconEyeCheck color='green' /> :
                            <IconEyeOff
                                color={'red'}
                                />}   
                                    </div>
                            )                            
                        }
                    },
                    { accessor: "Modify", width:"20%",
                      render: (rowData: Course) => {
                          
                        return(
                            <div className={classes.modify}>
                              <span><IconEyeFilled cursor={"pointer"} strokeWidth={2} color={'gray'} onClick={() => navigate(`${rowData.id}`)}/></span>
                              <span onClick={() => removeCourse(rowData)}><IconTrash cursor={"pointer"} strokeWidth={2} color={'red'}/></span>
                            </div>
                          )
                      }
                }
                ]}
            />
        </div>
    )

}