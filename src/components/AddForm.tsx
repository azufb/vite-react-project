import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { allTasksAtom } from '../recoil/recoilState';
import { AddTaskType } from "../types/addTasksType";
import { AllTasksAtomType, TaskAtomType } from "../types/recoilStateType";
import { registerButton } from "../styles/addForm";

const AddForm = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: ''
        }
    });

    const [currentAllTasks, setNewAllTasks] = useRecoilState<AllTasksAtomType>(allTasksAtom);

    // 新規追加のタスクのidを設定
    const assignTaskId = (): number => {
        let id: number | undefined = undefined;
        const currentAllTasksLength: number = currentAllTasks.length;

        if (currentAllTasksLength === 0) {
            // 1つ目のタスクの場合は、idは1を付与
            id = 1;
        } else {
            // 2つ目以降のタスクの場合は、idは配列の要素の数+1の値を付与
            id = currentAllTasksLength + 1;
        }

        return id;
    };

    // タスクを追加
    const addTask = (data: AddTaskType): void => {
        const taskId: number = assignTaskId();
        const newTask: TaskAtomType = {
            id: taskId,
            title: data.title,
            edit: false,
            isCompleted: false
        };

        // 新しくタスクを追加した配列を作成
        const newTasksArray = [...currentAllTasks, newTask ];

        // 新しいタスクの配列で、atomを更新
        setNewAllTasks(newTasksArray);

        reset(); // フォームを空にする
    }

    return (
        <form>
            <label htmlFor='taskInputForm'>タスク：</label>
            <input id='taskInputForm' {...register('title')} placeholder='ここにタスク名を入力' />
            <button type='submit' onClick={handleSubmit(addTask)} css={registerButton}>登録</button>
        </form>
    );
};

export default AddForm;