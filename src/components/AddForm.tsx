import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { addTaskSelector } from '../recoil/recoilState';

const AddForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const setAddTask = useSetRecoilState(addTaskSelector);

    const addTask = (data: any) => {
        setAddTask(data);

        reset(); // フォームを空にする
    }

    return (
        <form onSubmit={handleSubmit(addTask)}>
            <label htmlFor="title">タスク：</label>
            <input id="title" {...register('title')} />
            <button type='submit'>ADD</button>
        </form>
    );
};

export default AddForm;