import { prettyPrintNumber } from "../lib/prettyPrintNumber";
import { intern, juniorEmployee, seniorEmployee, engineer, scientist, robot, AISingularity } from "./employees";

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
  const numberOfEmployees = employeesOfType.length;
  const heading = (
    type.charAt(0).toUpperCase() +
    type.slice(1) +
    (numberOfEmployees > 1 ? "s" : "")
  ).replace("_", " ");

  return (
    employeesOfType.length > 0 && (
      <>
        <h3 title={"\nProduction rate per employee: " + prettyPrintNumber((employees[0].productionRate * adjustedEmployeeMultiplier).toFixed(2))}>
          {heading} ({numberOfEmployees})
        </h3>
        <p className={type}>
          {employeesOfType.length < MAX_EMPLOYEES_DISPLAYED ? employeesOfType.map((employee, i) => renderEmployee(employee, i)) : EMPLOYEES_MAX_PLACEHOLDER[type]}
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