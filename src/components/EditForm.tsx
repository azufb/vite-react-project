import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { editTaskSelector } from "../recoil/recoilState";
import { modalStateAtom } from "../recoil/modalState";

const EditForm = (props: any) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: props.id,
            title: props.title
        }
    });
    const setEditTask = useSetRecoilState(editTaskSelector);
    const setModalState = useSetRecoilState(modalStateAtom);

    const updateTask = (data: any) => {
        const updateData = {
            id: props.id,
            title: data.title
        }
        setEditTask(updateData);

        setModalState((currentState) => ({
            ...currentState,
            editTask: false
        }));
    }

    return (
        <div>
            {props.isOpen && (
                <form onSubmit={handleSubmit(updateTask)}>
                    <input {...register('title')} />
                    <button type='submit'>UPDATE</button>
                </form>
            )}
        </div>
    );
};

export default EditForm;