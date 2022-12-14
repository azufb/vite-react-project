import { useRecoilValue, useSetRecoilState } from "recoil";
import { TaskAtomType, AllTasksAtomType, changeTaskIsCompletedSelector, deleteTaskSelector, showTaskCompletedSelector } from "../recoil/recoilState";

const CompletedList = () => {
    const completedTasks = useRecoilValue<AllTasksAtomType>(showTaskCompletedSelector);
    const setChangeTaskIsCompleted = useSetRecoilState<any>(changeTaskIsCompletedSelector);
    const setDeleteTask = useSetRecoilState<any>(deleteTaskSelector);

    return (
        <div>
            <h1>完了したタスク：</h1>
            {completedTasks.map((task: TaskAtomType, index: number) => (
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

export default CompletedList;