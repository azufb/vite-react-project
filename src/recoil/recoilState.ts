import { atom, selector } from "recoil";
import { AddTaskType } from "../types/addTasksType";

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

// 全タスクAtom
const allTasksAtom = atom<AllTasksAtomType>({
    key: 'allTasksAtom',
    default: []
});

// Stats用Atom
const tasksStatsAtom = atom<TasksStatsAtomType>({
    key: 'tasksStatsAtom',
    default: {
        allCount: 0,
        completed: 0,
        notCompleted: 0,
        completedPercentage: 0
    }
});

// タスク追加のSelector
const addTaskSelector = selector<AllTasksAtomType>({
    key: 'addTaskSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ set, get }, newValue: any) => {
        const arrayLength: number = get(allTasksAtom).length;
        let addTaskParamsArray: AllTasksAtomType = [];

        newValue.tasks.forEach((value: AddTaskType, index: number) => {
            const valueIndex: number = index === 0 ? 1 : index + 1;
            let newId: number = 0;

            if (value.title !== '') {
                if (arrayLength === 0 && index === 0) {
                    newId = 1;
                } else {
                    newId = arrayLength + valueIndex;
                }
    
                const addTaskParam: TaskAtomType = {
                    id: newId,
                    title: value.title,
                    edit: false,
                    isCompleted: false
                };
    
                return addTaskParamsArray = [...addTaskParamsArray, addTaskParam];
            } else {
                return addTaskParamsArray;
            }
        });

        set(allTasksAtom, get(allTasksAtom).concat(addTaskParamsArray));
    }
});

// タスク編集を可能にするSelector
const changeTaskEditableSelector = selector<AllTasksAtomType>({
    key: 'changeTaskEditableSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ get, set }, newValue: any) => {
        const targetId: number = newValue.id;

        const changedTargetEditableArray: AllTasksAtomType = get(allTasksAtom).map((task: TaskAtomType) => {
            if (task.id === targetId) {
                return {...task, edit: true}
            } else {
                return task;
            }
        });

        set(allTasksAtom, changedTargetEditableArray)
    }
});

// タスク編集のSelector
const editTaskSelector = selector<AllTasksAtomType>({
    key: 'editTaskSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ get, set }, newValue: any) => {
        const targetId: number = newValue.id;
        const newTitle: string = newValue.title;

        const newTasksArray: AllTasksAtomType = get(allTasksAtom).map((task: TaskAtomType) => {
            if (task.id === targetId) {
                return {...task, title: newTitle, edit: false}
            } else {
                return task;
            }
        });

        set(allTasksAtom, newTasksArray);
    }
});

// タスク削除のSelector
const deleteTaskSelector = selector<AllTasksAtomType>({
    key: 'deleteTaskSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ get, set }, newValue: any) => {
        const targetId: number = newValue.id;

        const deletedArray: AllTasksAtomType = get(allTasksAtom).filter((task: TaskAtomType) => {
            return task.id !== targetId;
        });

        set(allTasksAtom, deletedArray);
    }
});

// タスクの完了状態を切り替えるSelector
const changeTaskIsCompletedSelector = selector<AllTasksAtomType>({
    key: 'changeTaskIsCompletedSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ get, set }, newValue: any) => {
        const targetId: number = newValue.id;
        const targetIsCompleted: boolean = newValue.isCompleted;

        const newTasksArray: AllTasksAtomType = get(allTasksAtom).map((task: TaskAtomType) => {
            if (task.id === targetId) {
                return {...task, isCompleted: !targetIsCompleted}
            } else {
                return task;
            }
        });

        set(allTasksAtom, newTasksArray);
    }
});

// 完了したタスクを取得するSelector
const showTaskCompletedSelector = selector<AllTasksAtomType>({
    key: 'switchTaskCompletedSelector',
    get: ({ get }) => {
        const targetTasks: AllTasksAtomType = get(allTasksAtom).filter((task: TaskAtomType) => {
            return task.isCompleted === true;
        });

        return targetTasks;
    }
});

// 未完了のタスクを取得するSelector
const showTaskNotCompletedSelector = selector<AllTasksAtomType>({
    key: 'showTaskNotCompletedSelector',
    get: ({ get }) => {
        const targetTasks: AllTasksAtomType = get(allTasksAtom).filter((task: TaskAtomType) => {
            return task.isCompleted === false;
        });

        return targetTasks;
    }
});

export {
    allTasksAtom,
    tasksStatsAtom,
    addTaskSelector,
    changeTaskEditableSelector,
    editTaskSelector,
    deleteTaskSelector,
    changeTaskIsCompletedSelector,
    showTaskCompletedSelector,
    showTaskNotCompletedSelector
}