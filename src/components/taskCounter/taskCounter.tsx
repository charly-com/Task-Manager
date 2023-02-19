import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectBorder } from './helpers/emitCorrectBorder';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import PropTypes from 'prop-types';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const { count = 0, status = Status.completed } = props;
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Avatar
                    sx={{
                        backgroundColor: 'transparent',
                        border: '5px solid',
                        width: '96px',
                        height: '96px',
                        marginBottom: '16px',
                        borderColor: emitCorrectBorder(status),
                    }}
                >
                    <Typography variant="h4" color="#ffffff">
                        {count}
                    </Typography>
                </Avatar>
                <Typography
                    variant="h4"
                    color="#ffffff"
                    fontWeight="bold"
                    fontSize="20px"
                >
                    {emitCorrectLabel(status)}
                </Typography>
            </Box>
        </>
    );
};

TaskCounter.propTypes = {
    count: PropTypes.number,
    status: PropTypes.oneOf([Status.completed, Status.inProgress, Status.todo]),
};
