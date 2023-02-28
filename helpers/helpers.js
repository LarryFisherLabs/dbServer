export const convertFileName = (fileName) => {
    const fileNameArray = fileName.split("-");
    let name = "";
    for (let i = 1; i < fileNameArray.length; i++) {
        if (i > 1) name = name + " ";
        name = name + fileNameArray[i].charAt(0).toUpperCase() + fileNameArray[i].slice(1);
    }
    return name;
}
