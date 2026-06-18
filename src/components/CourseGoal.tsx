import type { ReactNode } from "react"

type CourseGoalProps = {
    id: number
    title: string
    children: ReactNode
    onDelete: (id: number) => void
}

// type CourseGoalProps = PropsWithChildren<{ title: string}>


const CourseGoal = ({title, children, id, onDelete}: CourseGoalProps) => {

  return (
    <article>
        <div >
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={ () => onDelete(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal