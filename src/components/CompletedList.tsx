import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeTaskIsCompletedSelector, deleteTaskSelector, showTaskCompletedSelector } from "../recoil/recoilState";
import { AllTasksAtomType, TaskAtomType } from "../types/recoilStateType";
import { listArea, title, itemsArea, item } from "../styles/completedList";

const CompletedList = () => {
    const completedTasks = useRecoilValue<AllTasksAtomType>(showTaskCompletedSelector);
    const setChangeTaskIsCompleted = useSetRecoilState<any>(changeTaskIsCompletedSelector);
    const setDeleteTask = useSetRecoilState<any>(deleteTaskSelector);

    return (
        <div css={listArea}>
            <h2 css={title}>完了したタスク</h2>

            <div css={itemsArea}>
                {completedTasks.map((task: TaskAtomType, index: number) => (
                    <div key={index} css={item}>
                        <p>
                            <span>NO.{task.id}：</span>
                            <span>{task.title}</span>
                        </p>
                        <button onClick={() => setChangeTaskIsCompleted(task)}>戻す</button>
                        <button onClick={() => setDeleteTask(task)}>削除</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompletedList;