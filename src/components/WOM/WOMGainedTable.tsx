import { Table, Sheet, Input } from "@mui/joy";
import WOMGainedFetch from "./WOMGainedFetch";

function WOMGainedWeeklyTable() {
  return (
    <>
      <Sheet>
        <Input placeholder="Player Name..." />
        <Table
          stripe="odd"
          size="sm"
          sx={{
            "& tr": { textAlign: "left" },
            "& thead ": { textAlign: "center" },
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
            <WOMGainedFetch />
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}

export default WOMGainedWeeklyTable;
