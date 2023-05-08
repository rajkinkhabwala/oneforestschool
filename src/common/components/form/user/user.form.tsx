import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, FileInput, SimpleGrid, Textarea } from '@mantine/core';
import { useState } from 'react';
import { CreateUserInput } from '../../../../API';
import { FileUploader } from '@aws-amplify/ui-react';

interface FormValues {
    name: string;
    phone: string;
    address: any;
    picture: File | FileList | null | string;
    description: any;
}

export const UserForm = () => {
    const [img_src, setImg_src] = useState<null | string>(null)

    const form = useForm<FormValues>({
        initialValues: {
            name: '',
            phone: '',
            address: '',
            picture: '',
            description: '',
        },

        validate: {
            name: (value) => (/[a-zA-Z]$/.test(value) ? null : 'Invalid Name'),
            phone: (value) => (/^[0-9]{10}$/.test(value) ? null : 'Invalid Phone Number'),
        },
    });

    const profile_img = form.values.picture

    console.log(img_src);
    console.log(profile_img);
    console.log(form);



    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <SimpleGrid cols={2} mt="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="User Name"
                    {...form.getInputProps('name')}
                />

                <TextInput
                    withAsterisk
                    label="Phone"
                    placeholder="0987654321"
                    {...form.getInputProps('phone')}
                />
            </SimpleGrid>

            <SimpleGrid cols={1} mt="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <Textarea
                    withAsterisk
                    label="Address"
                    placeholder="User Address"
                    {...form.getInputProps('address')}
                />
            </SimpleGrid>

            {/* <SimpleGrid cols={2} mt="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput
                    withAsterisk
                    label="Description"
                    placeholder=""
                    {...form.getInputProps('description')}
                />

                <input type="file" name="" id="" style={{marginTop: 'auto'}}
                    onChange={(e) => {
                        console.log(e.target.files);
                        e.target.files !== null && setImg_src(URL.createObjectURL(e.target.files[0]))
                        form.setFieldValue('picture', e.target.files)
                }}
                  />
            </SimpleGrid> */}
            {/* {img_src && <img src={img_src} alt="" />} */}

            <SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <FileUploader
                    acceptedFileTypes={['image/*']}
                    accessLevel="public"
                />
            </SimpleGrid>

            <Textarea
                mt="md"
                label="Course Description"
                placeholder="Course Description"
                maxRows={10}
                minRows={5}
                autosize
                name="description"
                {...form.getInputProps('description')}
            />

            <Group position="left" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    )
}