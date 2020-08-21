const listOfApps: { [key: string]: string } = {
  NodeJS:
    '<a href="https://nodejs.org/en/"><img width=80 height=80 src="./logo.svg"></a>',
};

module.exports = function (prereqArr: string[]) {
  let preReqStr = '';
  prereqArr.map((prereq: string) => {
    preReqStr += listOfApps[prereq];
  });
  return preReqStr;
};
