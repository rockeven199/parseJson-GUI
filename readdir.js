const { readdirSync, writeFileSync } = require("fs");

const { dialog } = require("electron");
const path = require("path");

// 导出文件
// writeFileSync("./export.json", JSON.stringify(str));

async function parseDirToJSON() {
  let str = { imageJson: [] };
  let temp = {};

  let chooseDir = await dialog.showOpenDialog({
    title: "选择目录",
    properties: ["openDirectory"],
  });

  if (chooseDir.canceled === false) {
    let readDirResult = readdirSync(chooseDir.filePaths.toString(), {
      encoding: "utf-8",
    });

    if (readDirResult.length != 0) {
      readDirResult.forEach((value, index) => {
        temp = {};
        temp.id = index;
        temp.url = value;
        str.imageJson.push(temp);
      });
      return str;
    }
  }
}

module.exports = {
  parseDirToJSON,
};
