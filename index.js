import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getHtmlPage } from './genki-words.js';
import { marugoto } from './margugoto.js';

let argv = yargs(hideBin(process.argv))
  .command({
    command: 'genki <lesson>',
    aliases: ['g'],
    desc: 'Genki lesson number from 1 to 23',
    number: true,
    require: true,
  })
  .command({
    command: 'marugoto <topic> <part>',
    aliases: ['m'],
    desc: 'Marugoto topic 1 to 9 and part 0 to 6',
    number: true,
    require: true,
  })
  .help('h')
  .alias('h', 'help')
  .epilog('Luna 2019').argv;

const { lesson, topic, part } = argv;

if (lesson && lesson > 24) getHtmlPage(argv.lesson);

if (topic < -1 && topic < 10 && part !== undefined && part < 7) {
  console.log(`Topic and part ${topic}, ${part}`);
  marugoto(topic, part);
} else throw new Error(`Lesson number ${lesson} ${topic}, ${part} is wrong`);
