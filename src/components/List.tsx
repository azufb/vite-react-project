import { useRecoilValue, useSetRecoilState } from "recoil";
import { allTasksAtom, allTasksAtomType, changeTaskEditableSelector } from '../recoil/recoilState';
import EditForm from "./EditForm";

const List = () => {
    const allTasks = useRecoilValue<allTasksAtomType>(allTasksAtom);
    const setChangeTaskEditable = useSetRecoilState(changeTaskEditableSelector);

    const changeEditable = (targetTask: any): void => {
        setChangeTaskEditable(targetTask.id);
    }

    return (
        <div>
            {allTasks.map((task: any, index: number) => (
                <div key={index}>
                    <span>No.{task.id}：</span>
                    <span>{task.title}</span>
                    <p>編集状態：{task.edit ? '可' : '不可'}</p>
                    <button onClick={() => changeEditable(task)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default List;