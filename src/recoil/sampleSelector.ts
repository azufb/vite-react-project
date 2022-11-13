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
    // get関数は必須。
    get: ({ get }) => {
        return get(sampleState2);
    },
    // set関数は、オプション。
    set: ({ get, set }, newValue: any) => {
        const getState = get(sampleState2);

        const newItem = {
            item: newValue,
            done: false
        };

        // 第1引数は、更新したいAtomの現在の状態。第2引数は、新しい値。
        set(sampleState2, [...getState, newItem]);
    }
});