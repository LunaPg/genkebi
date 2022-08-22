import yargs from "yargs";
import { hideBin } from 'yargs/helpers'
import { getHtmlPage } from './genki-words.js';

let argv = yargs(hideBin(process.argv))
  .command({
    command: 'lesson <lesson>',
    aliases: ['l'],
    desc: 'Genki lesson number from 1 to 23',
    number: true,
    require: true
  })
  .help('h')
  .alias('h', 'help')
  .epilog('Luna 2019')
  .argv;

if (argv.lesson && argv.lesson < 24) {
  getHtmlPage(argv.lesson);

}
else {
  console.log(argv.lesson);
  throw new Error(`Lesson number ${argv.lesson} is wrong`)
}
