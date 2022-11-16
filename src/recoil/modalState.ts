import { atom } from "recoil";

export type modalStateAtomType = {
    editTask: boolean;
};

const modalStateAtom = atom<modalStateAtomType>({
    key: 'modalStateAtom',
    default: {
        editTask: false
    }
});

export {
    modalStateAtom
};