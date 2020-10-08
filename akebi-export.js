/**
 *
 *
  Remove 1st element, no needed
  [
    { '0': 'Kana', '1': 'Kanji', '2': 'English' },
    { '0': 'あいて', '1': '相手', '2': 'partner' },
  ]
 */

export function akebiFormat(json) {
  let concatenation = "";
  console.log("AKEBI JSON", json)
  json.forEach((e, index) => {
    if (index > 0) {
      concatenation += `${e[1] || e[0]}
${e[0]}
${e[2]}
`;
    }
  });
  return concatenation;
}