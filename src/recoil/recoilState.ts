import { atom, selector } from "recoil";

export type allTasksAtomType = {
    id: number;
    title: string;
    edit: boolean;
    isCompleted: boolean;
}[];

// 全タスクAtom
const allTasksAtom = atom<allTasksAtomType>({
    key: 'allTasksAtom',
    default: []
});

// タスク追加のSelector
const addTaskSelector = selector<any>({
    key: 'addTaskSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ set, get }, newValue: any) => {
        const arrayLength = get(allTasksAtom).length;
        const newId = arrayLength === 0 ? 1 : arrayLength + 1;
        const addTaskParam = {
            id: newId,
            title: newValue,
            edit: false,
            isCompleted: false
        };

        set(allTasksAtom, [...get(allTasksAtom), addTaskParam]);
    }
});

// タスク編集を可能にするSelector
const changeTaskEditableSelector = selector({
    key: 'changeTaskEditableSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ get, set }, newValue: any) => {
        const targetId = newValue;

        const changedTargetEditableArray: allTasksAtomType = get(allTasksAtom).map((task: any) => {
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
const editTaskSelector = selector({
    key: 'editTaskSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ get, set }, newValue: any) => {
        const targetId: number = newValue.id;
        const newTitle: string = newValue.title;

        const newTasksArray: allTasksAtomType = get(allTasksAtom).map((task: any) => {
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
const deleteTaskSelector = selector({
    key: 'deleteTaskSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ get, set }, newValue: any) => {
        const targetId = newValue.id;

        const deletedArray: allTasksAtomType = get(allTasksAtom).filter((task: any) => {
            return task.id !== targetId;
        });

        set(allTasksAtom, deletedArray);
    }
});

// タスクの完了状態を切り替えるSelector
const changeTaskIsCompletedSelector = selector({
    key: 'changeTaskIsCompletedSelector',
    get: ({ get }) => {
        return get(allTasksAtom);
    },
    set: ({ get, set }, newValue: any) => {
        const targetId: number = newValue.id;
        const targetIsCompleted: boolean = newValue.isCompleted;

        const newTasksArray: allTasksAtomType = get(allTasksAtom).map((task: any) => {
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
const showTaskCompletedSelector = selector({
    key: 'switchTaskCompletedSelector',
    get: ({ get }) => {
        const targetTasks: allTasksAtomType = get(allTasksAtom).filter((task: any) => {
            return task.isCompleted === true;
        });

        return targetTasks;
    }
});

// 未完了のタスクを取得するSelector
const showTaskNotCompletedSelector = selector({
    key: 'showTaskNotCompletedSelector',
    get: ({ get }) => {
        const targetTasks: allTasksAtomType = get(allTasksAtom).filter((task: any) => {
            return task.isCompleted === false;
        });

        return targetTasks;
    }
});

export {
    allTasksAtom,
    addTaskSelector,
    changeTaskEditableSelector,
    editTaskSelector,
    deleteTaskSelector,
    changeTaskIsCompletedSelector,
    showTaskCompletedSelector,
    showTaskNotCompletedSelector
}