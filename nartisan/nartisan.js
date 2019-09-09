const fs = require('fs');
const path = require('path');

var args = process.argv.slice(2);
const file = args[args.length-1];
const whole_path = path.join.apply(null,["src",...args])
fs.mkdirSync(whole_path);

let template = "import React from 'react'\n" + 
              "\n" +
              `const ${file} = () => {` + 
              "  return (\n" + 
                    "<div>\n" + 
                      "\n" + 
                    "</div>\n" + 
                  ")\n" + 
                "}\n" + 
              `export default ${file}`;

// write to a new file named 2pac.txt
fs.writeFile(`${whole_path}/${file}.js`, template, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
    console.log('File Created');
});