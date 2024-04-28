import { Alert } from "@mui/joy";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

interface Prop {
  key: string;
  skill: string;
  gained: number;
  levels: number;
  err?: boolean;
}

function formatXP(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  //   switch (x.length) {
  //     case 9:
  //       return x.slice(0, 3).replace(",", ".") + "M";
  //     case 7:
  //       return x.slice(0, 3) + "K";
  //     default:
  //       return x;
  //   }
}

function imageFetch(skill: string) {
  const URL = `http://www.wiseoldman.net/_next/image?url=%2Fimg%2Fmetrics%2F${skill}.png&w=32&q=75`;
  return URL;
}

function WOMGainedTableRow({ skill, gained, levels, err = false }: Prop) {
  if (!err) {
    return (
      <tr>
        <td>
          <img className="skill-img" title={skill} src={imageFetch(skill)} />
        </td>
        <td>+ {formatXP(gained)} XP</td>
        <td>{levels}</td>
      </tr>
    );
  } else if (err) {
    return (
      <tr>
        <td colSpan={3}>
          <Alert
            variant="outlined"
            color="danger"
            startDecorator={<AccountCircleRoundedIcon />}
          >
            Player Not Found!
          </Alert>
        </td>
      </tr>
    );
  }
}

export default WOMGainedTableRow;
