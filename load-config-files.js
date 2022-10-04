const fs = require('fs');

function loadConfiguration(cfgs) {
   return new Promise((resolve, reject) => {
      const confPromises = cfgs.map((cfg) => fs.promises.readFile(cfg));

      Promise.all(confPromises)
         .then((ConfBinContents) => {
            try {
               const confs = ConfBinContents.reduce(
                  (result, ConfBinContent) => {
                     const conf = JSON.parse(ConfBinContent.toString());
                     Object.assign(result, conf);
                     return result;
                  },
                  {},
               );

               resolve(confs);
            } catch (parseFileErr) {
               reject(Error(parseFileErr));
            }
         })
         .catch((readConfFilesErr) => {
            reject(Error(`Error happen when reading configs from file: ${readConfFilesErr.toString()}`));
         });
   });
}

const configFilePaths = ['./data/conf-1.json', './data/conf-2.json'];

loadConfiguration(configFilePaths).then(console.log);
