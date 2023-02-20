import { ITaskDescription } from "./ITaskDescription";
import { ITaskHeader } from "./ITaskHeader";
import { ITaskFooterProps } from "./ITaskFooter";


export interface ITask extends ITaskDescription, ITaskHeader, ITaskFooterProps {
    id?: string;
    status?: string;
    priority?: string;
}