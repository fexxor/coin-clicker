import "./buildings.css";

import { prettyPrintNumber } from "../lib/prettyPrintNumber";
import { buildings } from "./buildings";
import { StoreButton } from "../StoreButton";

export function BuildingsStore({ builtBuildings, currentBalance, onClick }) {
  return (
    <div className="store-buttons buildings-store">
      {buildings.map((building, index) => (
        <div className="building" key={index}>
          <StoreButton
            label={building.name + (builtBuildings.some((b) => b === building.id) ? " ✅" : "")}
            info={`${building.description} (Cost: ${prettyPrintNumber(building.cost)} kr)`}
            key={building.id}
            disabled={
              currentBalance < building.cost ||
              builtBuildings.some((b) => b === building.id)
            }
            onClick={() => onClick(building)}
          />
        </div>
      ))}
    </div>
  );
}

export function Buildings({ builtBuildings }) {
  return (
    <ul className="built-buildings">
      {builtBuildings.map((buildingId, index) => {
        const building = buildings.find((b) => b.id === buildingId);
        return <li className="building" key={index} title={building ? getBuildingTitleString(building) : "Unknown Building"}>{building ? building.icon : "?"} </li>;
      })}
    </ul>
  )
}

function getBuildingTitleString(building) {
  return `${building.name} (Effect: ${building.humanEmployeeEfficiency}x productivity for human employees${building.robotEmployeeEfficiency === 1 ?"" : `, ${building.robotEmployeeEfficiency}x productivity for robotic employees`})`;
}