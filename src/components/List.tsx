import { useRecoilValue, useSetRecoilState } from "recoil";
import { allTasksAtom, AllTasksAtomType, changeTaskEditableSelector, deleteTaskSelector, changeTaskIsCompletedSelector} from '../recoil/recoilState';
import EditForm from "./EditForm";

const List = () => {
    const allTasks = useRecoilValue<AllTasksAtomType>(allTasksAtom);
    const setDeleteTask = useSetRecoilState<AllTasksAtomType>(deleteTaskSelector);
    const setChangeTaskEditable = useSetRecoilState<AllTasksAtomType>(changeTaskEditableSelector);
    const setChangeTaskIsCompleted = useSetRecoilState<AllTasksAtomType>(changeTaskIsCompletedSelector);

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
                            <button onClick={() => setChangeTaskEditable(task)}>Edit</button>
                            <button onClick={() => setDeleteTask(task)}>削除</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default List;