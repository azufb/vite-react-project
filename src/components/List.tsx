import { useRecoilValue } from "recoil";
import { allTasksAtom, allTasksAtomType } from '../recoil/recoilState';

const List = () => {
    const allTasks = useRecoilValue<allTasksAtomType>(allTasksAtom);
    return (
        <div>
            <h1>リスト</h1>
            {allTasks.map((task: any, index: number) => (
                <div key={index}>
                    <p>{task.taskTitle}</p>
                    <button>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default List;