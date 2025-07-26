import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import TextInput from "../TextInput/TextInput";

const CharacterCount: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 10,
}) => {
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  const calculateStats = (input: string): TextStats => {
    const words = input.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const characterCount = input.length;
    const readingTime = wordCount / 200;

    return { characterCount, wordCount, readingTime };
  };

  const handleTextChange = (inputText: string) => {
    const words = inputText.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    if (wordCount <= maxWords) {
      const newStats = calculateStats(inputText);
      setStats(newStats);
    }
  };

  return (
    <>
      <div className="goals">
        Word count goal: Min {minWords} | Max {maxWords}
      </div>
      <div className="main-container">
        <TextInput
          onTextChange={handleTextChange}
          placeholder="Enter your text"
        />
        <StatsDisplay stats={stats} />

        {stats.wordCount >= maxWords && (
          <p style={{ color: "red" }}>You've exceeded the word limit.</p>
        )}
      </div>
    </>
  );
};

export default CharacterCount;
