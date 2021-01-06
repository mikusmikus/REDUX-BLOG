export const highlightsText = (title: string, searchValue: string) => {
  const splitted = title.split(searchValue);
  let outPutString = '';

  splitted.forEach((item) => {
    outPutString += `<span>${item}</span><span class='success'>${searchValue}</span>`;
  });
  const realOutput = outPutString.slice(0, outPutString.length - 30 - searchValue.length);
  return { __html: realOutput };
};
