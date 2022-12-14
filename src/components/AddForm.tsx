import { useForm, useFieldArray } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { addTaskSelector } from '../recoil/recoilState';
import { AddTasksDataType } from "../types/addTasksType";

const AddForm = () => {
    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            tasks: [
                {title: ''}
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'tasks'
    })
    const setAddTask = useSetRecoilState<any>(addTaskSelector);

    const addTask = (data: AddTasksDataType): void => {
        console.log(data);
        setAddTask(data);

        reset(); // フォームを空にする
        remove(1);
    }

    return (
        <form onSubmit={handleSubmit(addTask)}>
            {fields.map((item: any, index: number) => (
                <div key={item.id}>
                    <label htmlFor="title">タスク：</label>
                    <input id="title" {...register(`tasks.${index}.title`)} />
                </div>
            ))}
            <button type="button" onClick={() => append({ title: '' })}>追加</button>
            <button type='submit'>ADD</button>
        </form>
    );
};

export default AddForm;