export const MAX_INTERNS = 10;
export const MAX_AI_SINGULARITIES = 1;

export const intern = {
  type: "intern",
  category: "human",
  salary: 0,
  recruitmentCost: 0,
  productionRate: 0.2,
  tutoringCostMultiplier: 0.95,
  name: "Blue Eyed Intern",
  image: "👼",
};

export const juniorEmployee = {
  type: "junior",
  category: "human",
  salary: 0.5,
  recruitmentCost: 100,
  productionRate: 2,
  name: "Emile Paloyeux Junior",
  image: "👷",
};

export const seniorEmployee = {
  type: "senior",
  category: "human",
  salary: 1,
  recruitmentCost: 500,
  productionRate: 15,
  name: "Señor Lopez",
  image: "🧑‍💼",
};

export const engineer = {
  type: "engineer",
  category: "human",
  salary: 5,
  recruitmentCost: 2000,
  productionRate: 60,
  name: "Uncle Bob",
  image: "👨‍🔧",
};

export const scientist = {
  type: "scientist",
  category: "human",
  salary: 20,
  recruitmentCost: 100000,
  productionRate: 900,
  name: "Marie Curie",
  image: "👩‍🔬",
};

export const robot = {
  type: "robot",
  category: "machine",
  salary: 200,
  recruitmentCost: 2_000_000,
  productionRate: 3500,
  name: "Bender Bending Rodríguez",
  image: "🤖",
};

export const AISingularity = {
  type: "AI_singularity",
  category: "machine",
  salary: 2_000_000,
  recruitmentCost: 1_000_000_000,
  productionRate: 42_000_000,
  name: "The Singularity",
  image: "✨",
};

const internNames = [
  "Rohan", "Yabing", "Noobster Smith", "Newbie Nbaka", "Rookie Richards", "Trainee Thompson", "Apprentice Anderson", "Greenhorn Green", "Novice McFly", "Junior Jr.", "Freshman Foster", "Beginner Brown", "Learner Lee", "Starter Stevens", "Initiate Ivanov", "Probationer Patel", "Tyro Taylor", "Neophyte Nguyen", "Cadet Carter", "Fledgling Flores", "Aspirant Adams", "Padawan Parker", 
]

const juniorNames = [
  "Sarah Smith", "David Johnson", "Emily Davis", "Michael Brown", "Jessica Wilson", "Daniel Garcia", "Ashley Martinez", "Christopher Rodriguez", "Amanda Hernandez", "Joshua Lopez", "Samantha Gonzalez", "Andrew Perez", "Elizabeth Taylor", "Joseph Thomas", "Megan Moore", "Nicholas Jackson", "Lauren White", "Brandon Harris", "Rachel Clark", "Tyler Lewis", "Victoria Lee", "Zachary Walker", "Lars Larsson", "Sven Svensson", "Erik Eriksson", "Karin Karlsson", "Anna Andersson", "Johan Johansson", "Maria Magnusson", "Peter Pettersson", "Oscar Olsson", "Nina Nilsson", "Lena Lindberg", "Klara Kristiansen", "Mats Mårtensson", "Eva Ekström", "Hans Holmberg", "Ulla Ulfsson", "Gunnar Gustafsson", "Ingrid Isaksson",
]

const seniorNames = [
  "Expert Evans", "Veteran Vaughn", "Master Mitchell", "Ace Anderson", "Pro Peterson", "Guru Graham", "Sage Simmons", "Whiz White", "Maven Miller", "Buffett Brown", "Connoisseur Clark", "Specialist Scott", "Authority Adams", "Pundit Parker", "Maestro Martinez", "Virtuoso Vasquez", "Doyen Diaz", "Luminary Lee", "Bigwig Brooks", "Topper Turner", "Hotshot Harris", "Big Earner Edwards", "Rainmaker Robinson", "Powerhouse Phillips", "Heavyweight Hughes", "Tycoon Taylor", "Magnate Moore", "Baron Bennett", "Czar Campbell", "Industrialist Ingram", "Captain Carter", "Chief Coleman", "Director Daniels", "Executive Ellis", "Head Harrison", "Leader Lewis", "Manager Morgan", "Supervisor Sullivan", "Overseer Owens", "Foreman Foster", "Controller Cooper", "Charlotte Chef", "Petter Proffs", "Nicole Ninja", "Felix Fixare"
]

const engineerNames = [
  "Techie Thompson", "Builder Brown", "Constructor Clark", "Designer Davis", "Developer Diaz", "Fabricator Foster", "Inventor Ingram", "Maker Miller", "Planner Peterson", "Producer Parker", "Creator Carter", "Architect Adams", "Engineer Evans", "Mechanic Mitchell", "Technician Taylor", "Specialist Scott", "Operator Owens", "Craftsman Coleman", "Artisan Allen", "Technologist Turner", "Innovator Irving", "Gadgeteer Graham", "Troubleshooter Tucker", "Fixer Foster", "Problem-solver Powell", "Systemizer Simmons", "Analyzer Anderson", "Debugger Daniels", "Optimizer Ortiz", "Refiner Reed", "Improver Iglesias", "Upgrader Underwood", "Enhancer Edwards", "Adjuster Armstrong", "Mulle Meck", "Uppfinnar-Jocke", "Kapten Klurifax", "Minnie Räknare"
]

const scientistNames = [
  "Dr. Darwin", "Prof. Einstein", "Dr. Curie", "Prof. Hawking", "Dr. Feynman", "Prof. Sagan", "Dr. Franklin", "Prof. Bohr", "Dr. Tesla", "Prof. Turing", "Dr. Newton", "Prof. Galileo", "Dr. Pasteur", "Prof. Mendel", "Dr. Watson", "Prof. Crick", "Dr. Hubble", "Prof. Heisenberg", "Dr. Schrödinger", "Prof. Planck", "Dr. Faraday", "Prof. Maxwell", "Dr. Kelvin", "Prof. Lavoisier", "Dr. Mendeleev", "Prof. Rutherford", "Dr. Oppenheimer", "Prof. Dirac", "Dr. Meitner", "Prof. Curiosity", "Dr. Discovery", "Prof. Innovation", "Dr. Exploration", "Prof. Knowledge", "Doc Ock", "Dr. House", "Prof. X", "Dr. Strange", "Prof. Plum", "Dr. No", "Prof. Moriarty", "Dr. Watson", "Prof. McGonagall", "Dr. Banner", "Prof. Snape",
]

const robotNames = [
  "R2-D2", "C-3PO", "WALL-E", "Optimus Prime", "Bumblebee", "Data", "HAL 9000", "T-800", "Sonny", "Chappie", "Johnny 5", "Marvin", "K-2SO", "BB-8", "Gort", "RoboCop", "ED-209", "Ash", "Bishop", "TARS", "CASE", "Bender Bending Rodríguez", "Clank", "Clanker 2000", "MegaMan", "Cortana", "GLaDOS", "Atlas", "P-body", "EVE", "Gigantor", "Gigantus", "RoboRex", "MechaGodzilla", "Voltron", "Ultron", "Sentinel", "Iron Giant", "Tachikoma", "Doraemon", "Macbook Air", "Terminator T-1000", "Robo Sapiens", "Automaton Alpha", "Cyberdyne Systems Model 101", "Mech-X4", "Robot-Knut", "Robot-Niklas", "Robot-Sven", "Robot-Elsa", "Robot-Erika", "Robot-Frans", "Robot-Gustav", "Skrammel-Pelle", "Brum-Brum-Bertil", "Alfons Aluminium", "Gortzam", "Chirper", "Pragotz", "Plåt-Niklas", "Koppar-Kalle", "Stål-Stina"
]

export function getEmployee(type) {
  switch (type) {
    case "intern":
      return { ...intern, name: internNames[Math.floor(Math.random() * internNames.length)]};

    case "junior":
      return { ...juniorEmployee, name: juniorNames[Math.floor(Math.random() * juniorNames.length)]};

    case "senior":
      return { ...seniorEmployee, name: seniorNames[Math.floor(Math.random() * seniorNames.length)]};

    case "engineer":
      return { ...engineer, name: engineerNames[Math.floor(Math.random() * engineerNames.length)]};

    case "scientist":
      return { ...scientist, name: scientistNames[Math.floor(Math.random() * scientistNames.length)]};

    case "robot":
      return { ...robot, name: robotNames[Math.floor(Math.random() * robotNames.length)]};

    case "AI_singularity":
      return AISingularity;

    default:
      return {
        type: "unknown",
        category: "unknown",
        salary: 0,
        recruitmentCost: 0,
        productionRate: 0,
        name: "Unknown Employee",
        image: "❓",
      }
  }
}

/** How many real workers an employee entry represents. */
export function getEmployeeSize(employee) {
  return employee.isChunk ? employee.chunkSize : 1;
}

/** Total workers, optionally filtered by type. */
export function getEmployeeCount(employees, type) {
  return employees.reduce((sum, employee) => {
    if (type !== undefined && employee.type !== type) {
      return sum;
    }
    return sum + getEmployeeSize(employee);
  }, 0);
}

/**
 * Compress many same-type employees into chunk entries.
 * Re-chunks cleanly from the total headcount so repeated calls never inflate the list.
 */
export function getChunkedEmployees(employees, chunkSize) {
  if (!employees?.length || chunkSize < 2) {
    return employees ?? [];
  }

  const byType = new Map();

  for (const employee of employees) {
    const entry = byType.get(employee.type) ?? {
      count: 0,
      template: null,
      individuals: [],
    };

    entry.count += getEmployeeSize(employee);

    if (!employee.isChunk) {
      entry.individuals.push(employee);
      if (!entry.template) {
        entry.template = employee;
      }
    } else if (!entry.template) {
      entry.template = employee;
    }

    byType.set(employee.type, entry);
  }

  const chunkedEmployees = [];

  for (const [, { count, template, individuals }] of byType) {
    if (!template || count === 0) {
      continue;
    }

    const unitSalary = template.isChunk
      ? template.salary / template.chunkSize
      : template.salary;
    const unitRecruitmentCost = template.isChunk
      ? template.recruitmentCost / template.chunkSize
      : template.recruitmentCost;
    const unitProductionRate = template.isChunk
      ? template.productionRate / template.chunkSize
      : template.productionRate;

    const fullChunks = Math.floor(count / chunkSize);
    const remainder = count % chunkSize;

    for (let i = 0; i < fullChunks; i++) {
      chunkedEmployees.push({
        isChunk: true,
        chunkSize,
        type: template.type,
        category: template.category,
        salary: unitSalary * chunkSize,
        recruitmentCost: unitRecruitmentCost * chunkSize,
        productionRate: unitProductionRate * chunkSize,
        name: `${chunkSize} ${template.type}s`,
        image: template.image,
      });
    }

    for (let i = 0; i < remainder; i++) {
      if (i < individuals.length) {
        chunkedEmployees.push(individuals[i]);
      } else {
        chunkedEmployees.push({
          type: template.type,
          category: template.category,
          salary: unitSalary,
          recruitmentCost: unitRecruitmentCost,
          productionRate: unitProductionRate,
          name: template.isChunk ? template.type : template.name,
          image: template.image,
        });
      }
    }
  }

  return chunkedEmployees;
}