import type { StatsDisplayProps } from "../../types";

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  const { characterCount, wordCount, readingTime } = stats;

  const formatReadingTime = (readingMinutes: number) => {
    const readingTotalSeconds = Math.round(readingMinutes * 60);
    const readingMins = Math.floor(readingTotalSeconds / 60);
    const readingSecs = readingTotalSeconds % 60;
    return `${readingMins}:${readingSecs < 10 ? "0" : ""}${readingSecs}`;
  };

  return (
    <> <div className="stats-display-headers">
        <div >
          <strong>Characters</strong>
        </div>
        <div>
          <strong>Word Count</strong>
        </div>
        <div>
          <strong>Reading Time</strong>
        </div>
      </div>
      <div className="stats-container">
        <div>{characterCount}</div>
        <div>{wordCount}</div>
        {showReadingTime && (
          <div>{formatReadingTime(readingTime)} min</div>
        )}
      </div>
     
    </>
  );
};

export default StatsDisplay;
