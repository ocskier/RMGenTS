module.exports = function (dataObj: any) {
  return `# ${dataObj.title}
<img src="https://img.shields.io/static/v1?label=LICENSE&message=${dataObj.license}&color=BLUE">

<img width=200 height=200 src="${dataObj.pic}">

`;
};
