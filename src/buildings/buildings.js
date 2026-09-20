import { juniorEmployee, robot, seniorEmployee } from "../employees/employees";

export const buildings = [
  {
    id: 1,
    icon: "☕",
    name: "Cafeteria",
    description: "A place for your employees to relax and fill up on caffeine. Boosts productivity for human employees by 50%.",
    cost: 50_000,
    humanEmployeeEfficiency: 1.5,
    robotEmployeeEfficiency: 1.0,
  },
  {
    icon: "🏋️‍♂️",
    id: 2,
    name: "Gym",
    description: "Keep your employees fit and healthy to boost productivity. Increases human employee efficiency by 30%.",
    cost: 500_000,
    humanEmployeeEfficiency: 1.3,
    robotEmployeeEfficiency: 1.0,
  },
  {
    id: 4,
    icon: "📚",
    name: "Learning center",
    description:
      "A facility to provide ongoing training and development for your staff. Building this also makes all juniors turn into senior employees, and all interns turn into junior employees. Increases human employee efficiency by 30%.",
    cost: 2_000_000,
    humanEmployeeEfficiency: 1.3,
    robotEmployeeEfficiency: 1.0,
    employeesEffect: (employees) => {
      return employees.map((employee) => {
        if (employee.type === "intern") {
          if (employee.isChunk) {
            return {
              ...employee,
              type: juniorEmployee.type,
              category: juniorEmployee.category,
              salary: juniorEmployee.salary * employee.chunkSize,
              recruitmentCost: juniorEmployee.recruitmentCost * employee.chunkSize,
              productionRate: juniorEmployee.productionRate * employee.chunkSize,
              image: juniorEmployee.image,
              name: `${employee.chunkSize} juniors`,
            };
          }
          return {...juniorEmployee, name: employee.name};
        }

        if (employee.type === "junior") {
          if (employee.isChunk) {
            return {
              ...employee,
              type: seniorEmployee.type,
              category: seniorEmployee.category,
              salary: seniorEmployee.salary * employee.chunkSize,
              recruitmentCost: seniorEmployee.recruitmentCost * employee.chunkSize,
              productionRate: seniorEmployee.productionRate * employee.chunkSize,
              image: seniorEmployee.image,
              name: `${employee.chunkSize} seniors`,
            };
          }
          return {...seniorEmployee, name: employee.name};
        }

        return employee;
      });
    },
    incomeMultiplierEffect: (incomeMultiplier) => incomeMultiplier < 1 ? 1 : incomeMultiplier,
  },
  {
    id: 3,
    icon: "🏥",
    name: "Physical Therapy Center",
    description:
      "Help your employees recover from injuries and reduce downtime. Increases human employee efficiency by 60%.",
    cost: 3_500_000,
    humanEmployeeEfficiency: 1.6,
    robotEmployeeEfficiency: 1.0,
  },
  {
    id: 5,
    icon: "🛠️",
    name: "Service Station",
    description: "A facility to maintain and repair your robotic employees. Increases robotic employee efficiency by 30%.",
    cost: 33_500_000,
    humanEmployeeEfficiency: 1.0,
    robotEmployeeEfficiency: 1.3,
  },
  {
    id: 6,
    icon: "🚌",
    name: "Employee Transport Hub",
    description:
      "Efficient transportation for your employees to reduce commute time. Increases human employee efficiency by 50% and robotic employee efficiency by 50%.",
    cost: 100_000_000,
    humanEmployeeEfficiency: 1.5,
    robotEmployeeEfficiency: 1.5,
  },
  {
    id: 7,
    icon: "💾",
    name: "Advanced Data Center",
    description:
      "A high-tech facility to enhance the performance of your AI-driven employees. Increases robotic employee efficiency by 260%.",
    cost: 15_000_000_000,
    humanEmployeeEfficiency: 1.0,
    robotEmployeeEfficiency: 3.6,
  },
  {
    id: 8,
    icon: "🤖",
    name: "Robot Factory",
    description:
      "A cutting-edge factory that produces robotic workers automatically. Increases robotic employee efficiency by 400% and adds a new robotic employee every 5 seconds.",
    cost: 50_000_000_000,
    humanEmployeeEfficiency: 1.0,
    robotEmployeeEfficiency: 4.0,
    effect: {
      interval: 5, // Effect triggers every 5 seconds
      action: (employees) => {
        return [
          ...employees, 
          {...robot}
        ];
      },
    }
  },
  {
    id: 9,
    icon: "🌀",
    name: "Ominous Matrix Robot Factory",
    description:
      "A scary factory run by a new type of AI, that produces robotic workers automatically. Increases robotic employee efficiency by 800% and adds 10 new robotic employee every second. Makes human employees less efficient (25% less efficient).",
    cost: 5_000_000_000_000,
    humanEmployeeEfficiency: 0.75,
    robotEmployeeEfficiency: 8.0,
    effect: {
      interval: 1, // Effect triggers every 1 second
      action: (employees) => {
        return [
          ...employees, 
          {...robot},
          {...robot},
          {...robot},
          {...robot},
          {...robot},
          {...robot},
          {...robot},
          {...robot},
          {...robot},
          {...robot}
        ];
      },
    }
  }
];

export function getTotalBuildingEfficiency(builtBuildings) {
  return builtBuildings.reduce((acc, buildingId) => {
    const building = buildings.find((b) => b.id === buildingId);

    if (!building) {
      return acc;
    }

    acc.human *= building.humanEmployeeEfficiency;
    acc.machine *= building.robotEmployeeEfficiency;
    
    return acc;
  }, {human: 1, machine: 1});
}