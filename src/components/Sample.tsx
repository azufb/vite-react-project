import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { sampleAtom, sampleSelector } from '../recoil/sampleState';

const Sample = () => {
    //const sampleAtomVal = useRecoilValue<string[]>(sampleAtom);
    //const sampleSeleVal = useRecoilValue<string[]>(sampleSelector);

    //const setSampleAtomVal = useSetRecoilState<string[]>(sampleAtom);

    const [sampleAtomVal, setSampleAtomVal] = useRecoilState(sampleAtom);
    
    /*const changeSampleAtomVal = (): void => {
        const newItem: string = 'サンプル4';
        const newArray : string[]= [newItem];
        setSampleAtomVal(newArray);
    };*/

    const changeSampleAtomVal = (): void => {
        const newItem: string = 'new sample';
        const newArray : string[]= [...sampleAtomVal, newItem];
        setSampleAtomVal(newArray);
    };

    return (
        <div>
            <ul>
                {sampleAtomVal.map((sampleAtom: string, index: number) => (
                    <li key={index}>{sampleAtom}</li>
                ))}
            </ul>

            <button onClick={changeSampleAtomVal}>チェンジ！</button>

            

            {/*<h2>selectorで取得</h2>
            <ul>
                {sampleSeleVal.map((sampleSele: string, index: number) => (
                    <li key={index}>{sampleSele}</li>
                ))}
            </ul>*/}
        </div>
    );
};

export default Sample;