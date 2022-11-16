import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { editTaskSelector } from "../recoil/recoilState";

const EditForm = (props: any) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: props.title
        }
    });
    const setEditTask = useSetRecoilState(editTaskSelector);

    const updateTask = (data: any) => {
        setEditTask(data);
    }

    return (
        <form onSubmit={handleSubmit(updateTask)}>
            <label htmlFor="editTask">タスク：</label>
            <input id="editTask" {...register('title')} />
            <button type='submit'>UPDATE</button>
        </form>
    );
};

export default EditForm;