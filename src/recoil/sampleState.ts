import { atom, selector } from "recoil";

const sampleAtom = atom<string[]>({
    key: 'sampleAtom',
    default: [
        'sample1',
        'sample2',
        'sample3'
    ]
});

const sampleSelector = selector<string[]>({
    key: 'sampleSelector',
    get: ({ get }) => {
        return get(sampleAtom);
    }
});

export {
    sampleAtom,
    sampleSelector
};