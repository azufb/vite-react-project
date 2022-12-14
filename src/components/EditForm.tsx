import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { editTaskSelector } from "../recoil/recoilState";

type AddTaskType = {
    title: string;
};

const EditForm = (props: any) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: props.id,
            title: props.title
        }
    });
    const setEditTask = useSetRecoilState<any>(editTaskSelector);

    const updateTask = (data: AddTaskType): void => {
        setEditTask(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(updateTask)}>
                <input {...register('title')} />
                <button type='submit'>UPDATE</button>
            </form>
        </div>
    );
};

export default EditForm;