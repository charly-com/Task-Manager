import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

export const TaskDescription: FC = (): ReactElement => {
    return (<TextField 
        id="description"
        label="Description"
        placeholder="Description"
        variant="outlined"
        size="small"
        multiline
        rows={4}
        fullWidth
    />);
};