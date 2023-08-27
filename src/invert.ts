const words = {
  // booleans
  false: "true",
  true: "false",

  True: "False",
  False: "True",

  TRUE: "FALSE",
  FALSE: "TRUE",

  no: "yes",
  yes: "no",

  off: "on",
  on: "off",

  //   disabled: "enabled",
  //   enabled: "disabled",

  // mathmatical symbols
  "+": "-",
  "-": "+",

  "*": "/",
  "/": "*",

  "+=": "-=",
  "-=": "+=",

  "!=": "==",
  "==": "!=",

  "===": "!==",
  "!==": "===",

  ">": "<=",
  "<=": ">",

  "<": ">=",
  ">=": "<",

  "&&": "||",
  "||": "&&",

  // TODO: Add support for these (not word boundaries)
  //   "++": "--",
  //   "--": "++",

  //   ">>>": "<<<",
  //   "<<<": ">>>",

  //   ">>": "<<",
  //   "<<": ">>",

  // specific language keywords
  // python
  and: "or",
  or: "and",

  break: "continue",
  continue: "break",

  //   javascript
  try: "catch",
  catch: "try",

  public: "private",
  readonly: "public",
  protected: "readonly",
  private: "protected",
}

export function getInvertedWord(word: keyof typeof words): string {
  return words[word]
}
