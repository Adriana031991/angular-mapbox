const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();


const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
  mapbox_key: {accessToken:"${process.env['MAPBOX_KEY']}"},
  otra: "PROPIEDAD",
  production: false,
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);





