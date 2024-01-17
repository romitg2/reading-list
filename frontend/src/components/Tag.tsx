import genrateIndexFromString from "../utils/generateStrColorFromString";

type Props = {
  tag: string;
};

function Tag({ tag }: Props) {
  const index: number = genrateIndexFromString(tag, 6);

  const pinkStyle =
    "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300";
  const redstyle =
    "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300";
  const orangeStyle =
    "bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300";
  const yellowStyle =
    "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300";
  const blueStyle =
    "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300";
  const skyStyle =
    "bg-sky-100 text-sky-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-sky-900 dark:text-sky-300";

  return (
    <span
      className={`${index === 0 ? pinkStyle : ""} ${
        index === 1 ? redstyle : ""
      } ${index === 2 ? orangeStyle : ""} ${index === 3 ? yellowStyle : ""} ${
        index === 4 ? blueStyle : ""
      } ${index === 5 ? skyStyle : ""}`}
    >
      {tag}{" "}
    </span>
  );
}

export default Tag;
