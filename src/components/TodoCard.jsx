import { useEffect, useState } from "react";
import { getTimeRemaining } from "../utils/helpers";

export default function TodoCard() {
    const dueDate = new Date('2026-04-16T18:00:00')

    const [timeRemaining, setTimeRemaining] = useState(
        getTimeRemaining(dueDate)
    )

    useEffect(() => {
        const interval = setInterval(()=> {
            setTimeRemaining(getTimeRemaining(dueDate));
        }, 60000)

        return () => clearInterval(interval);
    }, [dueDate])

    const [completed, setCompleted] = useState(false)
  
  return (
    <article data-testid="test-todo-card">

        {/* Priority  */}
        <span 
            data-testid="test-todo-priority"  
            aria-label="High priority task"
            class="priority-badge priority-high"
            >
            High
        </span>

        <input 
          type="checkbox" 
          id='complete'
          checked={completed}
          onChange={() => setCompleted(!completed)}
          data-testid="test-todo-complete-toggle"/>
        <label htmlFor="complete">Mark as complete</label> 

        <h2 className={completed ? "completed": ""} data-testid="test-todo-title">Build and deploy Todo Card Component</h2>

        <p data-testid="test-todo-description" className={completed ? "completed": ""} >
            Create and deploy a testable, accessible todo card for frontend assessment stage zero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat voluptate dignissimos veritatis reprehenderit amet. Autem ab commodi facilis nihil, quae qui alias quia! Quasi dolore neque aperiam harum iste!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae illum corrupti quam unde. Reprehenderit expedita libero, maiores, harum nesciunt nihil, enim ab vel sint dolorem ex molestias corrupti ipsam porro!
        </p>

        <div className="date-info">
            <time data-testid="test-todo-due-date" dateTime={dueDate.toISOString()} className="due-date">
                Due April 16, 2026
            </time>

            <time data-testid="test-todo-time-remaining" aria-live="polite" className="time-remaining">
                {timeRemaining}
            </time>

        </div>

         <span data-testid="test-todo-status" aria-label={completed ? "Task completed" : "Task pending"} className="status-badge status-pending">
            {completed ? "Done" : "Pending"}
        </span>

        <ul data-testid="test-todo-tags" role="list">
            <li data-testid="test-todo-tag-work">work</li>
            <li data-testid="test-todo-tag-urgent">urgent</li>
        </ul>

       <div className="actions">
            <button data-testid="test-todo-edit-button" onClick={() => console.log("edit clicked")}>
                Edit
            </button>

            <button data-testid="test-todo-delete-button" onClick={() => alert("Delete clicked")}>
                Delete
            </button>
       </div>

    </article>
  );
}
