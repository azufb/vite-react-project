import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { addTaskSelector } from '../recoil/recoilState';

const AddForm = () => {
    const { register, handleSubmit } = useForm();
    const setAddTask = useSetRecoilState(addTaskSelector);

    const addTask = (data: any) => {
        setAddTask(data.task);
    }

    return (
        <form onSubmit={handleSubmit(addTask)}>
            <label htmlFor="task">タスク：</label>
            <input id="task" {...register('task')} />
            <button type='submit'>ADD</button>
        </form>
    );
};

export default AddForm;