import React, { FC, ReactElement } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    // SelectChangeEvent,
} from '@mui/material';

export const TaskSelectFeild: FC = (): ReactElement => {
    return <FormControl fullWidth size='small'>
        <InputLabel id="staus">Status</InputLabel>
        <Select 
        labelId="status"
        id="status"
        value=""
        label="Status"
        name="status"
        >
            <MenuItem value="todo">To Do</MenuItem>
            <MenuItem value="inprogress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
        </Select>
    </FormControl>;
};
