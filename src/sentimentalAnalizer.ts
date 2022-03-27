import { SentimentAnalyzer, PorterStemmer, WordTokenizer } from "natural";

const wordTokenizer = new WordTokenizer();
const albertText =
  "Great spirits have always encountered violent opposition from mediocre minds.";

const sentimentalAnaly = new SentimentAnalyzer(
  "English",
  PorterStemmer,
  "afinn"
);

console.log(sentimentalAnaly.getSentiment(wordTokenizer.tokenize(albertText)));
// return: Número que referencia se o sentimento é negativo ou positivo e sua intensidade

