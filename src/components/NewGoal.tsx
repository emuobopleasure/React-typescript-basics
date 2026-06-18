// import { FormEvent } from "react"

import { useRef } from "react"

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = ({onAddGoal}: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // new FormData(event.currentTarget)

        const enteredGoal = goal.current!.value
        const enetredSummary = summary.current!.value

        event.currentTarget.reset()

        onAddGoal(enteredGoal, enetredSummary)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input type="text" id="goal" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" ref={summary} />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal