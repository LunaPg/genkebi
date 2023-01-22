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

const { _: command, lesson, topic, part } = argv;

switch (command[0]) {
  case 'genki':
    if (lesson && lesson < 24) getHtmlPage(argv.lesson);
    else {
      throw new Error(`Lesson number ${lesson} is wrong`);
    }

    break;

  case 'marugoto':
    if (topic > 0 && topic < 10 && part !== undefined && part < 7) {
      marugoto(topic, part);
    } else {
      throw new Error(`Lesson number ${topic}, ${part} is wrong`);
    }

    break;

  default:
    throw new Error(`Command not found`);
}
