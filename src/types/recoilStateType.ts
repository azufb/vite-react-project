export type TaskAtomType = {
    id: number;
    title: string;
    edit: boolean;
    isCompleted: boolean;
};

export type AllTasksAtomType = TaskAtomType[];

export type TasksStatsAtomType = {
    allCount: number,
    completed: number,
    notCompleted: number,
    completedPercentage: number
};
