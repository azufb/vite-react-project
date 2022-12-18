import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { allTasksAtom, taskAddSelector } from '../recoil/recoilState';
import { AddTaskType } from "../types/addTasksType";
import { AllTasksAtomType, TaskAtomType } from "../types/recoilStateType";
import { formContent, registerButton } from "../styles/addForm";

const AddForm = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: ''
        }
    });

    //const [currentAllTasks, setNewAllTasks] = useRecoilState<AllTasksAtomType>(allTasksAtom);
    const setNewAllTasks = useSetRecoilState<any>(taskAddSelector);


    // 新規追加のタスクのidを設定
    /*const assignTaskId = (): number => {
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
    };*/

    // タスクを追加
    const addTask = (data: AddTaskType): void => {
        /*const taskId: number = assignTaskId();
        const newTask: TaskAtomType = {
            id: taskId,
            title: data.title,
            edit: false,
            isCompleted: false
        };

        // 新しくタスクを追加した配列を作成
        const newTasksArray = [...currentAllTasks, newTask ];

        // 新しいタスクの配列で、atomを更新
        setNewAllTasks(newTasksArray);*/

        const taskTitle: string = data.title;
        setNewAllTasks(taskTitle);

        reset(); // フォームを空にする
    }

    return (
        <div>
            <form css={formContent}>
                <input {...register('title')} placeholder='ここにタスク名を入力' />
                <button type='submit' onClick={handleSubmit(addTask)} css={registerButton}>登録</button>
            </form>
        </div>
    );
};

export default AddForm;