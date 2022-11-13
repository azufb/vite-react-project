import { DefaultValue, RecoilState, selector } from "recoil";
import { sampleState, sampleState2, sampleState2Type } from "./sampleAtom";

export const sampleSelector = selector({
    key: 'sampleSelector',
    get: ({ get }) => {
        const list = get(sampleState);

        return list.filter((li: string) => li !== 'a');
    }
});

export const sampleSelector2 = selector({
    key: 'sampleSelector2',
    get: ({ get }) => {
        return get(sampleState2);
    },
    set: ({ get, set }, newValue: any) => {
        const getState = get(sampleState2);
        const newItem = {
            item: newValue,
            done: false
        };

        set(sampleState2, [...getState, newItem]);
    }
});