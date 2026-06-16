import type { PropsWithChildren, ReactNode } from "react"

type CourseGoalProps = {
    title: string
    children: ReactNode
}

// type CourseGoalProps = PropsWithChildren<{ title: string}>


const CourseGoal = ({title, children}: CourseGoalProps) => {

  return (
    <article>
        <div >
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button>Delete</button>
    </article>
  )
}

export default CourseGoal