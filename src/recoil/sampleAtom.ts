import { atom, DefaultValue } from "recoil";

export type sampleState2Type = {
    item: string;
    done: boolean;
}[]

export const sampleState = atom({
    key: 'sampleState',
    default: ['a', 'b', 'c', 'a', 'd', 'e']
});

export const sampleState2 = atom<sampleState2Type>({
    key: 'sampleState2',
    default: []
});