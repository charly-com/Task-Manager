import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

export const TaskTitleField: FC = (): ReactElement => {
    return (
        <TextField
            id="title"
            label="Title"
            placeholder="Task Title"
            variant="outlined"
            size="small"
            fullWidth
            disabled={false}
            onChange={(e) => {e.target.value}}
        />
    );
};
