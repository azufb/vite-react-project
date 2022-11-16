import { atom, selector } from "recoil";

export type allTasksAtomType = {
    id: number;
    title: string;
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
        const newId = arrayLength === 0 ? 0 : arrayLength + 1;
        const addTaskParam = {
            id: newId,
            title: newValue
        };

        set(allTasksAtom, [...get(allTasksAtom), addTaskParam]);
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

        const newTasksArray = get(allTasksAtom).map((task: any) => {
            if (task.id === targetId) {
                return {...task, title: newTitle}
            }
        });

        set(allTasksAtom, newTasksArray);
    }
})

export {
    allTasksAtom,
    addTaskSelector,
    editTaskSelector
}