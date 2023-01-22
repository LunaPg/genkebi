import { parse } from 'csv-parse';
import { akebiFormat } from './akebi-export.js';
import { createReadStream, writeFileSync } from 'fs';
import { ensureDirectoryExistence } from './createFolders.js';

export function marugoto(topic, part) {
  const records = [];
  // Initialize the parser
  const parser = createReadStream(`${process.cwd()}/marugotoCsv/marugoto_intermediate_1.csv`).pipe(
    parse({
      delimiter: ':',
    }),
  );
  // CSV Template
  // ,TOPIC,PART,見出し語,アクセント,英訳,注釈,注釈英訳,Page
  // 1,1,0,知り合う,しりあ7う,"become acquainted with / meet
  // Use the readable stream api to consume records
  // should be same data than genki :
  // { '0': 'あいて', '1': '相手', '2': 'partner' },
  parser.on('readable', function () {
    let record;
    while ((record = parser.read()) !== null) {
      if (record[1] == topic && record[2] == part) {
        records.push({ 0: record[4].replace(/[0-9]/g, ''), 1: record[3].replace(/[0-9]/g, ''), 2: record[5] });
      }
    }
  });
  // Catch any error
  parser.on('error', function (err) {
    console.error('Error whiel parsing CSV file', err.message, err);
  });

  // When parsing is over, write file in akebi format
  parser.on('end', function () {
    try {
      const filePath = `${process.cwd()}/MarugotoFile/Marugoto${topic}-${[part]}`;
      ensureDirectoryExistence(filePath);
      writeFileSync(filePath, akebiFormat(records));
      console.log(`File writen in ${filePath}`);
    } catch (e) {
      console.error(e);
    }
  });
}
