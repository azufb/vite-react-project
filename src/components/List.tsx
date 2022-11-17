import { useRecoilValue, useSetRecoilState } from "recoil";
import { allTasksAtom, allTasksAtomType, changeTaskEditableSelector, deleteTaskSelector, changeTaskIsCompleted} from '../recoil/recoilState';
import EditForm from "./EditForm";

const List = () => {
    const allTasks = useRecoilValue<allTasksAtomType>(allTasksAtom);
    const setDeleteTask = useSetRecoilState(deleteTaskSelector);
    const setChangeTaskEditable = useSetRecoilState(changeTaskEditableSelector);
    const setChangeTaskIsCompleted = useSetRecoilState(changeTaskIsCompleted);

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
                            <span>NO.{task.id}：</span>
                            <span>{task.title}</span>
                            <button onClick={() => setChangeTaskIsCompleted(task)}>{task.isCompleted ? 'DONE' : 'TODO'}</button>
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