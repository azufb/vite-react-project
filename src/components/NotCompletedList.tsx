import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeTaskIsCompletedSelector, deleteTaskSelector, showTaskNotCompletedSelector } from "../recoil/recoilState";
import { AllTasksAtomType, TaskAtomType } from "../types/recoilStateType";
import { listArea, title, itemsArea, item } from "../styles/notCompletedList";

const NotCompletedList = () => {
    const notCompletedTasks = useRecoilValue<AllTasksAtomType>(showTaskNotCompletedSelector);
    const setChangeTaskIsCompleted = useSetRecoilState<any>(changeTaskIsCompletedSelector);
    const setDeleteTask = useSetRecoilState<any>(deleteTaskSelector);

    return (
        <div css={listArea}>
            <h2 css={title}>未完了のタスク</h2>

            <div css={itemsArea}>
                {notCompletedTasks.map((task: TaskAtomType, index: number) => (
                    <div key={index} css={item}>
                        <p>
                            <span>NO.{task.id}：</span>
                            <span>{task.title}</span>
                        </p>
                        <button onClick={() => setChangeTaskIsCompleted(task)}>完了する</button>
                        <button onClick={() => setDeleteTask(task)}>削除する</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotCompletedList;