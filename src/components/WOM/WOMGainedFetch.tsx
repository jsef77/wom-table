import { useLayoutEffect, useState, ReactNode, useRef } from "react";
import WOMGainedTableRow from "./WOMGainedTableRow";
import { IWOMGainedJSON } from "./WOM";
import { Alert } from "@mui/joy";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

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
            throw new Error("blase");
          } else {
            fetchSuccess.current = true;
            return response.json();
          }
        })
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
        .catch((err) => {
          console.log(err);
          fetchSuccess.current = false;
        });

      setTableRowArray(rowsArray);
    }
  }, [playerName]);

  if (!fetchSuccess.current) {
    return (
      <Alert
        variant="outlined"
        color="danger"
        startDecorator={<AccountCircleRoundedIcon />}
      >
        Player Not Found!
      </Alert>
    );
  } else {
    return <>{tableRowArray}</>;
  }
}
