import { useForm } from "react-hook-form";

const AddForm = () => {
    const { register, handleSubmit } = useForm();

    const addTask = (data: any) => {
        console.log(data);
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