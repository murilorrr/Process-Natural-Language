import {
  WordTokenizer,
  // SentimentAnalyzer
} from "natural";

// const sentimentalAnaly = new SentimentAnalyzer(pt, );

const tokenizer = new WordTokenizer();
console.log(tokenizer.tokenize("your dog has fleas."));
