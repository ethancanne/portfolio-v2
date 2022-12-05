const fs = require('fs');
const path = require('path');
const config = require('./config');

const scanDirectories = config.collections
  .filter((collection) => collection.format === 'json')
  .map((collection) => ({
    inputDirectory: collection.folder,
    outputFile: `${collection.folder}.json`,
  }));

console.log('BUILD JSON DATA', scanDirectories);
scanDirectories.forEach(processFiles);

// finds all json files in directory, processes to markdown, updates original file, updates output file
function processFiles({ inputDirectory, outputFile, sortBy }) {
  console.log('directory');

  const directory = path.join(process.cwd(), inputDirectory);

  const filenames = fs.readdirSync(directory);

  Promise.all(
    filenames.map(async (filename) => {
      // only allow .json files
      if (!filename.endsWith('.json')) {
        return false;
      }

      const filePath = path.join(directory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(fileContents);

      return jsonData;
    })
  ).then((results) => {
    const items = results.filter(Boolean);

    // sort
    items.sort(
      {
        date: (a, b) => new Date(b.date) - new Date(a.date),
      }[sortBy] || Boolean
    );

    const outputPath = path.join(process.cwd(), outputFile);
    fs.writeFileSync(outputPath, JSON.stringify(items, null, 2));

    console.log([inputDirectory, outputFile].join(' -> '), items.length);
  });
}
