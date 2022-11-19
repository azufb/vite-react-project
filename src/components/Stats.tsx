import { useRecoilValue } from "recoil";
import { changeTasksStatsSelector } from "../recoil/recoilState";

const Stats = () => {
    const tasksStats = useRecoilValue(changeTasksStatsSelector);

    return (
        <div>
            <h1>タスク状況：</h1>
            <ul>
                <li>Total tasks: {tasksStats.allTasksCount}</li>
                <li>Tasks Completed: {tasksStats.completedTasksCount}</li>
                <li>Tasks Not Completed: {tasksStats.notCompletedTasksCount}</li>
                <li>Percent Completed: {tasksStats.completedTasksPercentage}</li>
            </ul>
        </div>
    );
};

export default Stats;