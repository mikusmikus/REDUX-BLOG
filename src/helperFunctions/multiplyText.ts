export const multiplyText = (text: string, multiplyTimes: number) => {
  let newText = text;
  for (let i = 0; i < multiplyTimes; i++) {
    newText += ' ';
    newText += text;
  }
  return newText;
};
