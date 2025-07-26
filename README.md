# Character Counter App – Lab 9.2

This is a React TypeScript application that allows users to input text and view real-time statistics, including character count, word count, and estimated reading time. 

---

## Features

- Real-time character count
- Real-time word count
- Estimated reading time in `mm:ss` format
- Enforces a maximum word limit (e.g. 10 words)
- Prevents further input once word limit is reached
---

## Technologies Used
- React with TypeScript


## Component Responsibilities

### `TextInput`
- Controlled textarea
- Calls `onTextChange` callback with input

### `StatsDisplay`
- Receives a `stats` object (characterCount, wordCount, readingTime)
- Displays each value clearly
- Formats reading time as `mm:ss`

### `CharacterCount`
- Manages `stats` state
- Calculates stats on input change
- Enforces word limit logic
- Renders `TextInput` and `StatsDisplay`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Per-Scholas-Hassan-Razak/character-counter.git
cd character-counter

#INSTALL DEPENDENCIES
npm install

#RUN APPLICATION

npm run dev

## Visit http://localhost:5173 in your browser.

```


## Reflection Question 
1. 	How does your component ensure responsive feedback during rapid typing or pasting?
   1. The method onTextChange is responsible for calculating stat changes. It only runs that calculation if the word count do not exceed the maxWords parameter. If word count exceeds then calcs are not run and a user feedback in the form of red text stats the maxWords have been exceeded. 
2. How is reading time calculated and formatted?
   1. Reading time is calculated based on reading speed of 200 words per minute. So the word count is divided by 200 to determine the reading time. We then use `formatReadingTime` in `StatsDisplay` to make it readable.
3. What challenges did you face in blocking input once the word limit was exceeded?
   1. Initially I tried to disable the textarea using a disable state controlled at the parent level. Howevever, this proved to make the applicaiton buggy because I couldnt use backspace to un-disable the text area. Doing some research I found most big tech companies just provide feedback that validations were being violated. This lead to the current implementation of only updating stats state if word count was acceptable. Further down the line if there was a submit button then I would just disable that. 


---