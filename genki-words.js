import { createRequire } from 'module';
import { writeFileSync } from 'fs'
import { akebiFormat } from './akebi-export.js'
import { request } from 'http';
const require = createRequire(import.meta.url);

const hostname = 'ohelo.org'
const url = '/japn/lang/genki_vocab_table.php?lesson=';
const tabletojson = require('tabletojson').Tabletojson;

const timeoutInMilliseconds = 10 * 1000
export function getHtmlPage(lesson) {
  const options = {
    hostname,
    path: `${url}${lesson}`,
    method: 'GET',
    port: 80,
    timeout: timeoutInMilliseconds
  };
  const req = request(options, res => {
    res.on('data', d => {
      const vocab = tabletojson.convert(d);
      if (!vocab.length) return;
      try {
        writeFileSync(`Genki${lesson}`, akebiFormat(vocab[0]));
        console.log(`File writen in ${process.cwd()}/Geni${lesson}`)
      } catch (e) {
        console.error(e);
      }
    });
  });

  req.on('error', error => {
    console.error(error)
  });

  req.end();
}