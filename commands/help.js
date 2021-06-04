function helpFn() {
    console.log(`
    List of all commands
       -> fto tree "Diretory Path" 
       -> fto organize "Diretory Path" 
       -> fto help
    `);
}

module.exports={
    helpKey: helpFn
}