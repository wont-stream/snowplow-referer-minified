const fs = require("fs");

(async () => {
  const referersLatest = await fetch("https://s3-eu-west-1.amazonaws.com/snowplow-hosted-assets/third-party/referer-parser/referers-latest.json")

  const minified = JSON.stringify(await referersLatest.json())

  fs.writeFile('referers-latest.min.json', minified, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
})();
