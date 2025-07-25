import type { StatsDisplayProps } from "../../types";

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  const { characterCount, wordCount, readingTime } = stats;

  return (
    <div className="stats-container">
      <div>
        <strong>Characters:</strong> {characterCount}
      </div>
      <div>
        <strong>Word Count:</strong>
        {wordCount}
      </div>
      {showReadingTime && (
        <div>
          <strong>Reading Time:</strong>
          {readingTime}
        </div>
      )}
    </div>
  );
};

export default StatsDisplay;
