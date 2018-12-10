regExps = {
"exercise_1": /[A-Z][a-z]+/,
"exercise_2": /088[1-7]{7}/,
"exercise_3": /[^0-1]{1,2}/,
"exercise_4": /^[^0-9][A-Za-z0-9._]{2,13}$/,
"exercise_5": /^[19].*[^1]$/,
"exercise_6": /class=['"].+['"]/
};
cssSelectors = {
"exercise_1": "css > item > java",
"exercise_2": "#diffId *, #diffId2 *",
"exercise_3": "css > item > java > tag",
"exercise_4": "css > item:nth-child(3)",
"exercise_5": "css > item > tag > :nth-child(2)",
"exercise_6": "css > item > item > item > item > item",
"exercise_7": "css > different > #diffId2 > :last-Child",
"exercise_8": "css > nth-child(2)"
};
