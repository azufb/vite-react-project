import { atom, selector } from "recoil";

export type allTasksAtomType = {
    id: number;
    title: string;
    edit: boolean;
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
            edit: false
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
        const targetId = newValue.id;
        const newTitle = newValue.title;

        const newTasksArray: allTasksAtomType = get(allTasksAtom).map((task: any) => {
            if (task.id === targetId) {
                return {...task, title: newTitle, edit: false}
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
})

export {
    allTasksAtom,
    addTaskSelector,
    changeTaskEditableSelector,
    editTaskSelector,
    deleteTaskSelector
}