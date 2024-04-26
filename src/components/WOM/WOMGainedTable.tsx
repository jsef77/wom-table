import { Table, Sheet, Input, Stack, Button, Box } from "@mui/joy";
import WOMGainedFetch from "./WOMGainedFetch";
import { SyntheticEvent, useState } from "react";

function WOMGainedWeeklyTable() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Box paddingBottom={"2rem"}>
        <form
          onSubmit={(event: SyntheticEvent) => {
            event.preventDefault(); // stops page reload
            const input = event.target[0] as HTMLFormElement; // :(
            setInputValue(input.value);
          }}
        >
          <Stack spacing={1}>
            <Input
              placeholder="Player name..."
              required
              endDecorator={<Button type="submit">Track</Button>}
            />
          </Stack>
        </form>
      </Box>
      <Sheet>
        <Table
          stripe="odd"
          size="sm"
          sx={{
            "& tr": { textAlign: "left" },
            "& thead ": { textAlign: "center" },
            "& th": { fontSize: "1rem" },
          }}
        >
          <thead>
            <tr>
              <th>Skill</th>
              <th>Gained</th>
              <th>Levels</th>
            </tr>
          </thead>
          <tbody>
            <WOMGainedFetch playerName={inputValue.trim()} />
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}

export default WOMGainedWeeklyTable;
