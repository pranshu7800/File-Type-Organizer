#!/usr/bin/env node
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
// Take the input from the CLI
let input = process.argv.slice(2);
// console.log(input);
let types = {
    media: ["mp4", "mkv", "mp3", "jpg", "png", "gif"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb", 'py', 'apk']
}

// node main.js tree "directoryPath" 
// node main.js organize "directoryPath" 
// node main.js help

let command = input[0];
switch(command){
    case "tree":
        treeObj.treeKey(input[1]);
        break;
    case "organize":
        organizeObj.organizeKey(input[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please give the right command ");
        break;
}




