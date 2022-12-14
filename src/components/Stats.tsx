import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { allTasksAtom, tasksStatsAtom } from "../recoil/recoilState";
import { AllTasksAtomType, TaskAtomType, TasksStatsAtomType } from "../types/recoilStateType";

const Stats = () => {
    const [stats, setStats] = useRecoilState<TasksStatsAtomType>(tasksStatsAtom);
    const allTasks = useRecoilValue<AllTasksAtomType>(allTasksAtom);

    useEffect(() => {
        const allTasksCount: number = allTasks.length;
        const completedTasks: AllTasksAtomType = allTasks.filter((task: TaskAtomType) => {
            return task.isCompleted === true;
        });
        const completedTasksCount: number = completedTasks.length;

        const notCompletedTasks: AllTasksAtomType = allTasks.filter((task: TaskAtomType) => {
            return task.isCompleted === false;
        });
        const notCompletedTasksCount: number = notCompletedTasks.length;

        let completedTasksPercentage: number =  0;
        if (allTasksCount !== 0) {
            completedTasksPercentage = (completedTasksCount / allTasksCount) * 100;
        };

        setStats({
            allCount: allTasksCount,
            completed: completedTasksCount,
            notCompleted: notCompletedTasksCount,
            completedPercentage: completedTasksPercentage
        });

    }, [allTasks]);

    return (
        <div>
            <h1>タスク状況：</h1>
            <ul>
                <li>Total tasks: {stats.allCount}</li>
                <li>Tasks Completed: {stats.completed}</li>
                <li>Tasks Not Completed: {stats.notCompleted}</li>
                <li>Percent Completed: {stats.completedPercentage}%</li>
            </ul>
        </div>
    );
};

export default Stats;