import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBoarder = (priority: string): string => {
    switch (priority) {
        case Priority.Low:
            return 'gray.900';
        case Priority.Medium:
            return 'info.light';
        case Priority.High:
            return 'error.light';
        default:
            return 'gray.900';
    }
}