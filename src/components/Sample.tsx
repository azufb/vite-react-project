import { useRecoilValue } from "recoil"
import { sampleAtom } from "../recoil/sampleState"

const Sample = () => {
    const sampleAtomVal = useRecoilValue<string[]>(sampleAtom);

    return (
        <div>
            <ul>
                {sampleAtomVal.map((sample: string, index: number) => (
                    <li key={index}>{sample}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sample;