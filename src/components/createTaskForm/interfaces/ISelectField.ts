import { IDisabled } from "./IDisabled";

import { SelectChangeEvent } from "@mui/material";

export interface ISelectItems {
    value: string;
    label: string;
}

export interface ISelectField extends IDisabled {
    value?: string;
    name?: string;
    label?: string;
    onChange?: (e:  SelectChangeEvent) => void;
    items?: ISelectItems[];
}