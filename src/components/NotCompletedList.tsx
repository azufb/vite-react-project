import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeTaskIsCompleted, deleteTaskSelector, showTaskNotCompletedSelector } from "../recoil/recoilState";

const NotCompletedList = () => {
    const notCompletedTasks = useRecoilValue(showTaskNotCompletedSelector);
    const setChangeTaskIsCompleted = useSetRecoilState(changeTaskIsCompleted);
    const setDeleteTask = useSetRecoilState(deleteTaskSelector);

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