const fs = require('fs');


fs.readdir('../../', (err, data) => {
  if (err)
    console.log(err);
  else
    console.log(data);


})

