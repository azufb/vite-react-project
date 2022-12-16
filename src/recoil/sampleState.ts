import { atom } from "recoil";

const sampleAtom = atom<string[]>({
    key: 'sampleAtom',
    default: [
        'sample1',
        'sample2',
        'sample3'
    ]
});

export {
    sampleAtom 
};