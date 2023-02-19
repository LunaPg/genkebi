import yargs, { BuilderCallback, number } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getHtmlPage } from './genki-words.js';
import { marugoto } from './margugoto.js';

const yargInstance = yargs(hideBin(process.argv));
let argv = yargInstance
  .command({
    command: 'genki <lesson>',
    aliases: ['g'],
    describe: 'Genki lesson number from 1 to 23',
    build: true,
    require: true,
  })
  .command({
    command: 'marugoto <topic> <part>',
    aliases: ['m'],
    describe: 'Marugoto topic 1 to 9 and part 0 to 6',
    type: 'number',
    require: true,
  })
  .help('h')
  .alias('h', 'help')
  .epilog('Luna 2019')
  .parseSync();

const { _: command, lesson, topic, part }: {} = argv;

function genkiparams: BuilderCallback<T, U>{

  return yargs.options();
}

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
