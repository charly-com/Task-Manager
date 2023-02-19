import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescription } from './_taskDescription';
import { TaskDateField } from './_taskDateField';
import { TaskSelectFeild } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

export const CreateTaskForm: FC = (): ReactElement => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Typography variant="h6" component="h2" mb={2}>
                Create A Task
            </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField />
                <TaskDescription />
                <TaskDateField />
                <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
                    <TaskSelectFeild
                        name="status"
                        label="status"
                        items={[
                            {
                                value: Status.todo,
                                label: Status.todo.toUpperCase(),
                            },
                            {
                                value: Status.inProgress,
                                label: Status.inProgress.toUpperCase(),
                            },
                        ]}
                    />
                    <TaskSelectFeild
                        name="priority"
                        label="priority"
                        items={[
                            {
                                value: Priority.Low,
                                label: Priority.Low,
                            },
                            {
                                value: Priority.Medium,
                                label: Priority.Medium,
                            },
                            {
                                value: Priority.High,
                                label: Priority.High,
                            },
                        ]}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};
