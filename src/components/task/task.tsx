import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import PropTypes from 'prop-types';
import {renderPriorityBoarder} from './helpers/renderPriorityBoarder'

export const Task: FC<ITask> = (props): ReactElement => {
    const {
        title = 'test title',
        date = new Date(),
        description = 'test description',
        status = Status.completed,
        priority = Priority.Low,
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e),
    } = props;
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            width="100%"
            mb={4}
            p={2}
            sx={{
                width: '100%',
                borderRadius: '8px',
                border: '1px solid',
                backgroundColor: 'background.paper',
                borderColor: renderPriorityBoarder(priority),
            }}
        >
            <TaskHeader title={title} date={date}/>
            <TaskDescription description={description}/>
            <TaskFooter onStatusChange={onStatusChange} onClick={onClick} />
        </Box>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    status: PropTypes.string,
    priority: PropTypes.string,
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func,
};