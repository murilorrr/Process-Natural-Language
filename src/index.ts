import { WordTokenizer } from "natural";

const tokenizer = new WordTokenizer();
console.log(tokenizer.tokenize("your dog has fleas."));
