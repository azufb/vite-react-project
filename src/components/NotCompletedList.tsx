import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeTaskEditableSelector, changeTaskIsCompletedSelector, deleteTaskSelector, showTaskNotCompletedSelector } from "../recoil/recoilState";
import { AllTasksAtomType, TaskAtomType } from "../types/recoilStateType";
import { listArea, title, itemsArea, item, editButton, toDoneButton, deleteButton } from "../styles/notCompletedList";
import EditForm from "./EditForm";

const NotCompletedList = () => {
    const notCompletedTasks = useRecoilValue<AllTasksAtomType>(showTaskNotCompletedSelector);
    const setChangeTaskIsCompleted = useSetRecoilState<any>(changeTaskIsCompletedSelector);
    const setDeleteTask = useSetRecoilState<any>(deleteTaskSelector);
    const setChangeTaskEditable = useSetRecoilState<any>(changeTaskEditableSelector);

    // タスクの完了状態を切り替える
    const changeTaskIsCompleted = (id: number): void => {
        setChangeTaskIsCompleted(id);
    };

    return (
        <div css={listArea}>
            <h2 css={title}>未完了のタスク</h2>

            <div css={itemsArea}>
                {notCompletedTasks.map((task: TaskAtomType, index: number) => (
                    <div key={index} css={item}>
                        {task.edit ? (
                            <EditForm
                            id={task.id}
                            title={task.title}
                        />) : (
                            <>
                                <p>
                                    <span>NO.{task.id}：</span>
                                    <span>{task.title}</span>
                                </p>
                                <button onClick={() => setChangeTaskEditable(task)} css={editButton}>編集</button>
                            </>
                        )}
                        <button onClick={() => changeTaskIsCompleted(task.id)} css={toDoneButton}>完了</button>
                        <button onClick={() => setDeleteTask(task)} css={deleteButton}>削除</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotCompletedList;