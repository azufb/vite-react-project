import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { editTaskSelector } from "../recoil/recoilState";

const EditForm = (props: any) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: props.id,
            title: props.title
        }
    });
    const setEditTask = useSetRecoilState(editTaskSelector);

    const updateTask = (data: any) => {
        const updateData = {
            id: props.id,
            title: data.title
        }
        setEditTask(updateData);
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