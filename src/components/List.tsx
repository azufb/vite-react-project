import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalStateAtom } from "../recoil/modalState";
import { allTasksAtom, editTargetTaskAtom, allTasksAtomType, deleteTaskSelector } from '../recoil/recoilState';
import EditForm from "./EditForm";

const List = () => {
    const allTasks = useRecoilValue<allTasksAtomType>(allTasksAtom);
    const setDeleteTask = useSetRecoilState(deleteTaskSelector);
    const [editTargetTask, setEditTargetTask] = useRecoilState(editTargetTaskAtom);
    const [modalState, setModalState] = useRecoilState(modalStateAtom);

    const changeEditable = (targetTask: any): void => {
        const targetTaskParam = {
            id: targetTask.id,
            title: targetTask.title
        };
        setEditTargetTask(targetTaskParam);

        setModalState((currentState) => ({
            ...currentState,
            editTask: true
        }));
    }

    return (
        <div>
            {allTasks.map((task: any, index: number) => (
                <div key={index}>
                    <span>{task.title}</span>
                    <button onClick={() => changeEditable(task)}>Edit</button>
                    <button onClick={() => setDeleteTask(task)}>削除</button>
                </div>
            ))}

            {modalState.editTask && (
                <EditForm
                    id={editTargetTask.id}
                    title={editTargetTask.title}
                />
            )}
        </div>
    );
};

export default List;