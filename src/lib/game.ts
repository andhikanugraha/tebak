import {
  ref, reactive, computed, watchEffect, Ref,
} from 'vue';
import { shuffle } from 'lodash-es';

interface Word {
  word: string;
  isCorrect: boolean;
}

export function nowSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

const viewWords = reactive<string[]>([]);

let timeLimit = 60;

// WORD SHUFFLING & RESETTING

// custom type to distinguish which variables refer to words
type WordIndex = number;
const shuffledWordIndices = reactive<WordIndex[]>([]);
const usedWordIndices = new Set<WordIndex>();
const correctIndices = new Set<WordIndex>();

function shuffleWords() {
  const words = viewWords;
  if (words.length === 0) {
    return;
  }

  const unusedWordIndices = [];
  if (usedWordIndices.size < words.length) { // some words have not yet been used
    for (let i = 0; i < words.length; i += 1) {
      if (!usedWordIndices.has(i)) {
        unusedWordIndices.push(i);
      }
    }
  } else { // all words have been used
    usedWordIndices.clear();
    for (let i = 0; i < words.length; i += 1) {
      unusedWordIndices.push(i);
    }
  }
  const shuffledLeft = shuffle(unusedWordIndices);
  const shuffledRight = shuffle([...usedWordIndices.values()]);
  shuffledWordIndices.splice(0);
  shuffledWordIndices.splice(0, 0, ...shuffledLeft, ...shuffledRight);
}

// GAME LOOP

const isStarted = ref(false);
const isFinished = ref(false);

type Cursor = number;
const currentCursor = ref<Cursor>(0); // the index of shuffledWordIndices to display
const lastCursor = ref<Cursor>(0); // the last word played to be used for scoring

const endTime = ref(nowSeconds());
const remainingSeconds = ref(0);
let timer: number | undefined;

function finish() {
  isFinished.value = true;
  endTime.value = nowSeconds();
  if (timer) {
    window.clearTimeout(timer);
    timer = undefined;
  }
}

function tick() {
  remainingSeconds.value = endTime.value - nowSeconds();
  if (remainingSeconds.value > 0) {
    timer = window.setTimeout(() => tick(), 1000);
  } else {
    finish();
  }
}

function start() {
  isStarted.value = true;
  endTime.value = nowSeconds() + timeLimit;
  tick();
}

const currentWord = computed<string>(() => (
  viewWords.length
    ? viewWords[shuffledWordIndices[currentCursor.value]]
    : ''
));

function nextWord() {
  // add current index to used words
  usedWordIndices.add(shuffledWordIndices[currentCursor.value]);

  // find next unanswered word
  let i: number;
  if (currentCursor.value + 1 >= shuffledWordIndices.length) {
    i = 0;
  } else {
    i = currentCursor.value + 1;
  }

  let nextIndex = -1;
  while (i !== currentCursor.value && nextIndex === -1) {
    if (!correctIndices.has(i)) {
      nextIndex = i;
    } else if (i + 1 >= shuffledWordIndices.length) {
      i = 0;
    } else {
      i += 1;
    }
  }

  if (nextIndex === -1) {
    finish();
  } else if (nextIndex < shuffledWordIndices.length) {
    currentCursor.value = nextIndex;
  }

  if (nextIndex > lastCursor.value) {
    lastCursor.value = nextIndex;
  }
}

// GAME CONTROLS

function playerCorrect() {
  correctIndices.add(currentCursor.value);
  nextWord();
}

function playerSkip() {
  nextWord();
}

// SCORE SCREEN

const score = computed<number>(() => correctIndices.size);

const results = computed<Word[]>(() => {
  const words: Word[] = [];
  if (!viewWords) {
    return words;
  }

  for (let i = 0; i <= lastCursor.value; i += 1) {
    words.push({
      word: viewWords[shuffledWordIndices[i]],
      isCorrect: false,
    });
  }

  correctIndices.forEach((correctIndex) => {
    if (words[correctIndex]) {
      words[correctIndex].isCorrect = true;
    }
  });

  return words;
});

function reset() {
  isStarted.value = false;
  isFinished.value = false;
  currentCursor.value = 0;
  correctIndices.clear();
  lastCursor.value = 0;
  if (timer) {
    window.clearTimeout(timer);
    timer = undefined;
  }
  shuffleWords();
}

// INITIALISATION

export function useGame(
  props: { words?: string[] },
  selectedTimeLimit: Ref<number>,
): {
  isStarted: Ref<boolean>,
  isFinished: Ref<boolean>,
  currentWord: Ref<string>,
  reset: () => void,
  start: () => void,
  playerCorrect: () => void,
  playerSkip: () => void,
  remainingSeconds: Ref<number>,
  endTime: Ref<number>,
  results: Ref<Word[]>,
  score: Ref<number>,
} {
  // Initialise
  watchEffect(() => {
    viewWords.splice(0);
    if (props.words) {
      viewWords.splice(0, 0, ...props.words);
    }

    timeLimit = selectedTimeLimit.value;

    reset();
    usedWordIndices.clear();
  });

  return {
    // GAME LOOP
    isStarted,
    isFinished,
    currentWord,
    reset,
    start,
    playerCorrect,
    playerSkip,
    remainingSeconds,
    endTime,

    // SCORE SCREEN
    results,
    score,
  };
}
