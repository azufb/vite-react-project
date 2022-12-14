import { useRecoilValue, useSetRecoilState } from "recoil";
import { allTasksAtom, changeTaskEditableSelector, deleteTaskSelector, changeTaskIsCompletedSelector} from '../recoil/recoilState';
import { AllTasksAtomType, TaskAtomType } from "../types/recoilStateType";
import EditForm from "./EditForm";

const List = () => {
    const allTasks = useRecoilValue<AllTasksAtomType>(allTasksAtom);
    const setDeleteTask = useSetRecoilState<any>(deleteTaskSelector);
    const setChangeTaskEditable = useSetRecoilState<any>(changeTaskEditableSelector);
    const setChangeTaskIsCompleted = useSetRecoilState<any>(changeTaskIsCompletedSelector);

    return (
        <div>
            {allTasks.map((task: TaskAtomType, index: number) => (
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