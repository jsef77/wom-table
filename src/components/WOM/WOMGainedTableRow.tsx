interface Prop {
  key: string;
  skill: string;
  gained: number;
  levels: number;
}

function imageFetch(skill: string) {
  const URL = `http://www.wiseoldman.net/_next/image?url=%2Fimg%2Fmetrics%2F${skill}.png&w=32&q=75`;
  return URL;
}

function WOMGainedTableRow({ skill, gained, levels }: Prop) {
  return (
    <tr>
      <td>
        <img title={skill} src={imageFetch(skill)} />
      </td>
      <td>+ {gained} XP</td>
      <td>{levels}</td>
    </tr>
  );
}

export default WOMGainedTableRow;
