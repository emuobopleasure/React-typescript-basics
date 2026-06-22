import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal } from "../App"
import InfoBox from "./InfoBox"
import type { ReactNode } from "react"

type CourseGoalListProps = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
    if (goals.length === 0) {
        return <InfoBox mode="hint">
            <p>You have no goals yet</p>
        </InfoBox>
    }

    let warningBox: ReactNode

    if (goals.length >= 4) {
        warningBox = <InfoBox mode="warning" severity="high">
            <p>You're collecting alot of goals, don't put too much o your plate</p>
        </InfoBox>
    }

    return (
        <section>
            <>
                {
                   warningBox
                }

                <ul>
                    {
                        goals.map((goal) => (
                            <li key={goal.id}>
                                <CourseGoal
                                    title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                                    <p>{goal.description}</p>
                                </CourseGoal>
                            </li>
                        ))
                    }
                </ul>
            </>
        </section>
    )
}

export default CourseGoalList