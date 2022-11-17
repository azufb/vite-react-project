import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { AllTasksAtomType, editTaskSelector } from "../recoil/recoilState";

const EditForm = (props: any) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: props.id,
            title: props.title
        }
    });
    const setEditTask = useSetRecoilState<AllTasksAtomType>(editTaskSelector);

    const updateTask = (data: any) => {
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