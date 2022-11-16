import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { allTasksAtom, editTargetTaskAtom, allTasksAtomType, changeTaskEditableSelector, deleteTaskSelector } from '../recoil/recoilState';
import EditForm from "./EditForm";

const List = () => {
    const allTasks = useRecoilValue<allTasksAtomType>(allTasksAtom);
    const setDeleteTask = useSetRecoilState(deleteTaskSelector);
    const setChangeTaskEditable = useSetRecoilState(changeTaskEditableSelector);

    const changeEditable = (targetTask: any): void => {
        setChangeTaskEditable(targetTask.id);
    }

    return (
        <div>
            {allTasks.map((task: any, index: number) => (
                <div key={index}>
                    {task.edit ? (
                        <EditForm
                        id={task.id}
                        title={task.title}
                    />
                    ) : (
                        <>
                            <span>{task.title}</span>
                            <button onClick={() => changeEditable(task)}>Edit</button>
                            <button onClick={() => setDeleteTask(task)}>削除</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default List;