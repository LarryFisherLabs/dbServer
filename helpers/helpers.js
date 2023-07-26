export const convertFileName = (fileName) => {
    const fileNameArray = fileName.split("-");
    let name = "";
    for (let i = 1; i < fileNameArray.length; i++) {
        if (i > 1) name = name + " ";
        name = name + fileNameArray[i].charAt(0).toUpperCase() + fileNameArray[i].slice(1);
    }
    return name;
}

const requestWhiteList = [
    'http://localhost:3000',
    'https://nft-ui-git-wip-top-down-restructure-larryfisherlabs.vercel.app',
    'https://nft-ui-larryfisherlabs.vercel.app',
    'https://armyants.vercel.app'
]

export const isOnWhiteList = (origin) => {
    if (requestWhiteList.includes(origin)) return true
    else return false
}