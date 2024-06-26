import { useLayoutEffect, useState, ReactNode, useRef } from "react";
import WOMGainedTableRow from "./WOMGainedTableRow";
import { IWOMGainedJSON } from "./WOM";

interface Prop {
  playerName: string;
}

export default function WOMGainedFetch({ playerName }: Prop) {
  const [tableRowArray, setTableRowArray] = useState(Array<ReactNode>);
  const firstUpdate = useRef(true);
  const fetchSuccess = useRef(true);

  useLayoutEffect(() => {
    if (!firstUpdate.current && playerName != "") {
      awaitWOM();
    } else {
      firstUpdate.current = false;
    }

    async function awaitWOM() {
      const rowsArray: ReactNode[] = [];
      await fetch(
        `https://api.wiseoldman.net/v2/players/${playerName}/gained?period=week`
      )
        .then((response) => {
          if (!response.ok) {
            fetchSuccess.current = false;
            throw new Error("Fetch Error! Code: " + response.status);
          } else {
            fetchSuccess.current = true;
            return response.json();
          }
        })
        .then((jsonres: IWOMGainedJSON) => {
          for (const s in jsonres.data.skills) {
            const currentSkill = jsonres.data.skills[s];
            if (
              currentSkill.metric == "overall" ||
              currentSkill.experience.gained != 0
            ) {
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
        .catch((err) => {
          console.log(err);
          fetchSuccess.current = false;
        });

      setTableRowArray(rowsArray);
    }
  }, [playerName]);

  if (!fetchSuccess.current) {
    return (
      <WOMGainedTableRow
        key="err"
        skill="err"
        gained={0}
        levels={0}
        err={true}
      ></WOMGainedTableRow>
    );
  } else {
    return <>{tableRowArray}</>;
  }
}
