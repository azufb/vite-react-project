import { useForm, useFieldArray } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { addTaskSelector, AllTasksAtomType } from '../recoil/recoilState';

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
    const setAddTask = useSetRecoilState<AllTasksAtomType>(addTaskSelector);

    const addTask = (data: any) => {
        setAddTask(data);

        reset(); // フォームを空にする
        remove(1); // 追加したフォームを消去
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