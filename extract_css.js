const fs = require('fs');

const logPath = 'C:\\Users\\Hindhujasalla\\.gemini\\antigravity\\brain\\00467f04-0fc6-4d6c-942c-291ec1ae48f9\\.system_generated\\logs\\overview.txt';
const text = fs.readFileSync(logPath, 'utf-8');

const blocks = text.split("File Path: `file:///c:/Users/Hindhujasalla/Scratch/styles.css`");

let extractedLines = [];
let capturedBlocks = 0;

for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.includes("Showing lines 1 to 800") || block.includes("Showing lines 801 to 1600")) {
        const lines = block.split('\\n');
        for (const line of lines) {
            const match = line.match(/^\\d+: (.*)/);
            if (match) {
                extractedLines.push(match[1]);
            }
        }
        capturedBlocks++;
    }
}

// Since there might be multiple views, we just want the last pair of 1-800 and 801-1600
// Or just the most recently captured consecutive pair.
// Actually, earlier we did views in sequence.
// Let's just output it and see.
fs.writeFileSync('styles_extracted.css', extractedLines.join('\\n'), 'utf-8');
console.log(`Extracted ${extractedLines.length} lines from ${capturedBlocks} blocks`);
