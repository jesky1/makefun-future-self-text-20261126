import { mkdirSync, writeFileSync } from "node:fs";

// Texts From Your Future Self — exactly one text message, under 200 characters.
// Judge brief (kit RULES.txt): funniest single text from your future self,
// funny by itself with no setup. Weighed: (1) reads as a real future-self
// text, (2) lands a joke with a twist that pays off by the last line,
// (3) sounds like a specific future self with details only from that life,
// (4) uses the 200 characters well, punchline fast, (5) fresh angle —
// not the obvious "still broke / still tired" joke.
// The line: a mundane procrastination habit (marking an email unread to
// "deal with it later") stretched across years until the email outlives
// its purpose — punchline lands in the last five words.
export const LINE =
  "Future you. That email you marked unread so you'd 'deal with it later'? It's 2033. It's still unread. It has grandchildren now.";

// The gate allows 1..200 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees. Also
// refuse leading/trailing whitespace — a stray space would count against
// the 200-character budget and look sloppy on the bounty page.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE !== LINE.trim()) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
