interface Prop {
  key: string;
  skill: string;
  gained: number;
  levels: number;
}

function formatXP(num: number) {
  // return (Math.round(xp) / 1000000).toFixed(2);
  const x = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  switch (x.length) {
    case 9:
      return x.slice(0, 3).replace(",", ".") + "M";
    case 7:
      return x.slice(0, 3) + "K";
    default:
      return x;
  }
}

function imageFetch(skill: string) {
  const URL = `http://www.wiseoldman.net/_next/image?url=%2Fimg%2Fmetrics%2F${skill}.png&w=32&q=75`;
  return URL;
}

function WOMGainedTableRow({ skill, gained, levels }: Prop) {
  return (
    <tr>
      <td>
        <img className="skill-img" title={skill} src={imageFetch(skill)} />
      </td>
      <td>
        <p title={formatXP(gained)}>+ {formatXP(gained)} XP</p>
      </td>
      <td>{levels}</td>
    </tr>
  );
}

export default WOMGainedTableRow;
