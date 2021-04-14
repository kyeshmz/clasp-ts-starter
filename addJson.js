const fs = require('fs');
const data = fs.readFileSync('appsscript.json', 'utf8');
let jsonObj = JSON.parse(data);

const result = {
  executionApi: {
    acess: 'ANYONE',
  },
};

const exe = {
  access: 'ANYONE',
};
jsonObj.executionApi = exe;

fs.writeFile('appsscript.json', JSON.stringify(jsonObj), function (err, result) {
  if (err) console.log('error', err);
});
