import { useRecoilValue } from "recoil";
import { allTasksAtom } from '../recoil/recoilState';
import { AllTasksAtomType, TaskAtomType } from "../types/recoilStateType";

const List = () => {
    const allTasks = useRecoilValue<AllTasksAtomType>(allTasksAtom);

    return (
        <div>
            {allTasks.map((task: TaskAtomType, index: number) => (
                <div key={index}>
                    <span>NO.{task.id}：</span>
                    <span>{task.title}</span>
                </div>
            ))}
        </div>
    );
};

export default List;