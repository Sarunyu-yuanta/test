type Token = { color: string; text: string };

export const CODE_COLORS = {
  keyword:   "#0550AE",
  string:    "#0A3069",
  comment:   "#6E7781",
  component: "#953800",
  number:    "#0550AE",
  default:   "#24292F",
  bg:        "#F6F8FA",
  toolbar:   "#EAEEF2",
  border:    "#D0D7DE",
  lineNum:   "#8C959F",
  subtle:    "#57606A",
  hoverLine: "rgba(0,0,0,0.04)",
  hoverBtn:  "#24292F",
};

const REGEX = new RegExp(
  [
    "(//[^\\n]*)",
    '("(?:[^"\\\\]|\\\\.)*")',
    "('(?:[^'\\\\]|\\\\.)*')",
    "(`(?:[^`\\\\]|\\\\.)*`)",
    "(<\\/?[A-Z][a-zA-Z0-9.]*)",
    "\\b([A-Z][a-zA-Z0-9]*)(?=\\s*[<({])",
    "\\b(\\d+(?:\\.\\d+)?)\\b",
    "\\b(import|export|from|const|let|var|return|function|type|interface|extends|default|as|if|else|true|false|null|undefined|class|new|typeof|void|async|await|of|in|for|while|do|switch|case|break|continue|throw|try|catch|finally)\\b",
  ].join("|"),
  "g"
);

export function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  const re = new RegExp(REGEX.source, "g");
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(line)) !== null) {
    if (m.index > last)
      tokens.push({ color: CODE_COLORS.default, text: line.slice(last, m.index) });

    const [full, cmt, dq, sq, tpl, jsxTag, typeRef, num, kw] = m;
    if (cmt)            tokens.push({ color: CODE_COLORS.comment,   text: full });
    else if (dq || sq || tpl) tokens.push({ color: CODE_COLORS.string,  text: full });
    else if (jsxTag)    tokens.push({ color: CODE_COLORS.component, text: full });
    else if (typeRef)   tokens.push({ color: CODE_COLORS.component, text: full });
    else if (num)       tokens.push({ color: CODE_COLORS.number,    text: full });
    else if (kw)        tokens.push({ color: CODE_COLORS.keyword,   text: full });
    else                tokens.push({ color: CODE_COLORS.default,   text: full });

    last = m.index + full.length;
  }

  if (last < line.length)
    tokens.push({ color: CODE_COLORS.default, text: line.slice(last) });

  return tokens;
}
