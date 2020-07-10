module.exports = function (dataObj: any) {
  return `# ${dataObj.msg}
  <img src=${dataObj.pic}>
<img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=BLUE">
`;
};
