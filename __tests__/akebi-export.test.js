import {describe, expect, it} from '@jest/globals';
import { akebiFormat } from '../akebi-export';
import { epilog } from 'yargs';

describe('akebi-export', () => {
  it('should remove the first item', () => {
    const corpus =   [
      { '0': 'Kana', '1': 'Kanji', '2': 'English' },
      { '0': 'あいて', '1': '相手', '2': 'partner' },
    ]
    const a  = akebiFormat(corpus);
    expect(a).toBeDefined();
    console.log(a)
  let expectResult = "";

    expectResult += `${corpus[1][1]}\n${corpus[1][0]}\n${corpus[1][2]}\n`;
    expect(a).toBe(expectResult);
  })  
})