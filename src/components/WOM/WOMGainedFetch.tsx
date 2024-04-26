import { useEffect, useState, ReactNode } from "react";
import WOMGainedTableRow from "./WOMGainedTableRow";
import { IWOMGainedJSON } from "./WOM";

export default function WOM() {
  const [tableRowArray, setTableRowArray] = useState(Array<ReactNode>);

  useEffect(() => {
    const playerName = "Sseff";
    const rowsArray: ReactNode[] = [];
    async function awaitWOM() {
      await fetch(
        `https://api.wiseoldman.net/v2/players/${playerName}/gained?period=week`
      )
        .then((response) => response.json())
        .then((jsonres: IWOMGainedJSON) => {
          for (const s in jsonres.data.skills) {
            const currentSkill = jsonres.data.skills[s];
            if (currentSkill.experience.gained != 0) {
              const skill = currentSkill;
              rowsArray.push(
                <WOMGainedTableRow
                  key={skill.metric}
                  skill={skill.metric}
                  gained={skill.experience.gained}
                  levels={skill.level.gained}
                ></WOMGainedTableRow>
              );
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setTableRowArray(rowsArray);
    }
    awaitWOM();
  }, []);

  return <>{tableRowArray}</>;
}
