import { parse } from 'csv-parse';
import { akebiFormat } from './akebi-export.js';
import { createReadStream, writeFileSync } from 'fs';
import { ensureDirectoryExistence } from './createFolders.js';

export function quartet(volume, topic, part) {
  const records = [];
  // Initialize the parser
  const parser = createReadStream(`${process.cwd()}/quartet/quartet${volume}_vocabularylist_English-${topic}-${part}.csv`).pipe(
    parse({
      delimiter: ':',
    }),
  );
  // CSV Template
  // ,第１課　読み物１　アニメ映画監督　宮﨑駿:::
  // :::
  // 0:監督:かんとく:director
  // :宮﨑駿:みやざきはやお:Hayao 
  // Use the readable stream api to consume records
  // should be same data than genki :
  // { '0': 'かんとく', '1': '監督', '2': 'director' },
  parser.on('readable', function () {
    let record;
    while ((record = parser.read()) !== null) {
        records.push({ 0: record[2].replace(/[0-9]/g, ''), 1: record[1].replace(/[0-9]/g, ''), 2: record[3] });
      }
  });
  // Catch any error
  parser.on('error', function (err) {
    console.error('Error while parsing CSV file', err.message, err);
  });

  // When parsing is over, write file in akebi format
  parser.on('end', function () {
    try {
      const filePath = `${process.cwd()}/quartet/quartets-${volume}-${topic}-${[part]}`;
      ensureDirectoryExistence(filePath);
      writeFileSync(filePath, akebiFormta(records));
      console.log(`File writen in ${filePath}`);
    } catch (e) {
      console.error(e);
    }
  });
}
