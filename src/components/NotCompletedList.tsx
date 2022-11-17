import { useRecoilValue, useSetRecoilState } from "recoil";
import { AllTasksAtomType, changeTaskIsCompletedSelector, deleteTaskSelector, showTaskNotCompletedSelector } from "../recoil/recoilState";

const NotCompletedList = () => {
    const notCompletedTasks = useRecoilValue<AllTasksAtomType>(showTaskNotCompletedSelector);
    const setChangeTaskIsCompleted = useSetRecoilState<AllTasksAtomType>(changeTaskIsCompletedSelector);
    const setDeleteTask = useSetRecoilState<AllTasksAtomType>(deleteTaskSelector);

    return (
        <div>
            <h1>未完了のタスク：</h1>
            {notCompletedTasks.map((task: any, index: number) => (
                <div key={index}>
                    <span>NO.{task.id}：</span>
                    <span>{task.title}</span>
                    <button onClick={() => setChangeTaskIsCompleted(task)}>{task.isCompleted ? 'DONE' : 'TODO'}</button>
                    <button onClick={() => setDeleteTask(task)}>削除</button>
                </div>
            ))}
        </div>
    );
};

export default NotCompletedList;