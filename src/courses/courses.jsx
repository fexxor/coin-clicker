import { prettyPrintNumber } from "../lib/prettyPrintNumber";
import { StoreButton } from "../StoreButton";

export function Courses({ courses, completedCourses, count, onClick, hidden }) {
    return (
        <div className="store-buttons">
            { !hidden && courses.map((course) => {
                const isCompleted = completedCourses.includes(course.id);
                return (
                    <StoreButton
                        label={course.name + (isCompleted ? " ✅" : "")}
                        info={`${course.description} (Cost: ${prettyPrintNumber(course.cost)} kr)`}
                        key={course.id}
                        disabled={
                            count < course.cost ||
                            isCompleted
                        }
                        onClick={() => onClick(course)}
                        title={`${course.description} (Cost: ${prettyPrintNumber(course.cost)} kr)`}
                    />
                );
            })}
            { hidden &&
                <StoreButton label="???" disabled title="?????" info="?????" />
            }
        </div>
    )
}