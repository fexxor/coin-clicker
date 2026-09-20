import { prettyPrintNumber } from "../lib/prettyPrintNumber";
import { intern, juniorEmployee, seniorEmployee, engineer, scientist, robot, AISingularity, getEmployeeCount, getEmployeeSize } from "./employees";

const MAX_EMPLOYEES_DISPLAYED = 56;

const EMPLOYEES_MAX_PLACEHOLDER = {
  intern: Array(MAX_EMPLOYEES_DISPLAYED).fill(intern.image),
  junior: Array(MAX_EMPLOYEES_DISPLAYED).fill(juniorEmployee.image),
  senior: Array(MAX_EMPLOYEES_DISPLAYED).fill(seniorEmployee.image),
  engineer: Array(MAX_EMPLOYEES_DISPLAYED).fill(engineer.image),
  scientist: Array(MAX_EMPLOYEES_DISPLAYED).fill(scientist.image),
  robot: Array(MAX_EMPLOYEES_DISPLAYED).fill(robot.image),
  AI_singularity: Array(MAX_EMPLOYEES_DISPLAYED).fill(AISingularity.image),
}

export function EmployeeList({employees, type, employeeMultiplier = 1, buildingEffects = {}}) {
  const employeesOfType = employees.filter((employee) => employee.type === type);
  const effect = buildingEffects[employeesOfType[0]?.category] || 1;
  const adjustedEmployeeMultiplier = employeeMultiplier * effect;
  const numberOfEmployees = getEmployeeCount(employees, type);
  const heading = (
    type.charAt(0).toUpperCase() +
    type.slice(1) +
    (numberOfEmployees > 1 ? "s" : "")
  ).replace("_", " ");
  const unitProductionRate = employeesOfType[0]
    ? employeesOfType[0].productionRate / getEmployeeSize(employeesOfType[0])
    : 0;

  return (
    employeesOfType.length > 0 && (
      <>
        <h3 title={"\nProduction rate per employee: " + prettyPrintNumber((unitProductionRate * adjustedEmployeeMultiplier).toFixed(2))}>
          {heading} ({numberOfEmployees})
        </h3>
        <p className={type}>
          {numberOfEmployees < MAX_EMPLOYEES_DISPLAYED
            ? employeesOfType.flatMap((employee, i) => {
                const size = getEmployeeSize(employee);
                return Array.from({ length: size }, (_, j) =>
                  renderEmployee(employee, `${i}-${j}`),
                );
              })
            : EMPLOYEES_MAX_PLACEHOLDER[type]}
        </p>
      </>
    )
  );
}

function renderEmployee(employee, index) {
  return (
    <span key={`${employee.type}-${index}`} title={employee.name}>
      {employee.image}
    </span>
  );
}
