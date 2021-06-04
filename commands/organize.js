let fs = require("fs");
let path = require("path");

function organizeFn(dirPath) {
    let destPath;
    if(dirPath == undefined){
        destPath = process.cwd();
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            destPath = path.join(dirPath, "Ogranized_files");
            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath);
            }
        }else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}

function organizeHelper(src, dest) {
    //identify categories fo all files present int that input directory.
    let childNames = fs.readdirSync(src);
    for (let i = 0; i < childNames.length; i++) {
        let childAdress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAdress).isFile();
        if(isFile){
            let category = getCategory(childNames[i]);
            console.log(childNames[i], " is Belongs to --> ", category);
            // copy files to that organized directory inside the category folder
            sendFiles(childAdress, dest, category);
        }     
    }
}

function sendFiles(srcFilePath, dest, category) {
    let catPath = path.join(dest, category);
    if(fs.existsSync(catPath) == false){
        fs.mkdirSync(catPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(catPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // fs.unlinkSync(srcFilePath);// for cut the files.
    // console.log(fileName, " cut to -> ", category);
    console.log(fileName, " copied to -> ", category);

}

function getCategory(names) {
    let ext = path.extname(names);
    ext = ext.slice(1);
    for(let type in types){
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if(ext == cTypeArray[i]){
                return type;
            }
            
        }
    }
    return "others";
}

module.exports={
    organizeKey: organizeFn
}