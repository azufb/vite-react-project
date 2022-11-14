import { atom, selector } from "recoil";

export type allTasksAtomType = {
    taskTitle: string
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
        const addTaskParam = {
            taskTitle: newValue
        };

        set(allTasksAtom, [...get(allTasksAtom), addTaskParam]);
    }
});

export {
    allTasksAtom,
    addTaskSelector
}