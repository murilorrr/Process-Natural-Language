import { WordTokenizer, PorterStemmer } from "natural";

const exempleText = "your dog has fleas.";

const tokenizer = new WordTokenizer();
console.log(tokenizer.tokenize(exempleText));
// quebra de frase em array de strings contidas na frase [ 'your', 'dog', 'has', 'fleas' ]

console.log(PorterStemmer.tokenizeAndStem(exempleText));
// reduz a frase em array de strings centrais [ 'dog', 'flea' ]
