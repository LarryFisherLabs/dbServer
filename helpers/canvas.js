import pkg from 'canvas';
import { staticLayerInfo } from './antInfo.js';

const { createCanvas, loadImage } = pkg;

const embossText = (ctx, text, y = 303.75, fontSize = '45px') => {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = fontSize + ' times new roman';
    ctx.strokeStyle = '#a3a3a3';
    ctx.fillStyle = 'black';
    ctx.shadowColor = 'rgb(197 197 197)';
    ctx.shadowBlur = .225;
    ctx.shadowOffsetY = -.9;
    ctx.shadowOffsetX = 1.35;
    ctx.fillText(text, 225, y);
    ctx.shadowColor = 'rgb(91 91 91)';
    ctx.shadowOffsetY = .9;
    ctx.shadowOffsetX = -1.35;
    ctx.fillText(text, 225, y);
    ctx.shadowColor = null;
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = 'destination-out';

    ctx.fillText(text, 225, y);

    ctx.globalCompositeOperation = 'source-over';
}

export const createPicture = async (id, value, color) => {
    const canvas = createCanvas(450, 450);
    const ctx = canvas.getContext('2d');
    let fileName = 'public/coins' + (color === 4 ? '/red.png' : color === 3 ? '/gem.png' : color === 2 ? '/gold.png' : color === 1 ? '/silver.png' : '/bronze.png');

    const baseImage = await loadImage(fileName);
    
    embossText(ctx, value + ' ETH');
    embossText(ctx, id, 90, '33.75px');
    ctx.globalCompositeOperation = 'destination-over';

    ctx.drawImage(baseImage, 0, 0, 2000, 2000, 0, 0, 450, 450);
    ctx.globalCompositeOperation = 'source-over';

    ctx.globalAlpha = .1;
    ctx.font = '45px times new roman';
    ctx.fillText(value + ' ETH', 225, 303.75);
    ctx.font = '33.75px times new roman';
    ctx.fillText(id, 225, 90);
    ctx.globalAlpha = 1;
    
    const buffer = canvas.toBuffer('image/png');
    return buffer;
}

const baseElements = [
    'public/ants/base/6-ant-right-foreleg.png',
    'public/ants/base/3-ant-head.png',
    'public/ants/base/5-ant-thorax.png',
    'public/ants/base/8-ant-abdomen.png',
    'public/ants/base/1-ant-eyes.png', 
    'public/ants/base/2-ant-mandibles.png', 
    'public/ants/base/4-dog-tags.png',
    'public/ants/base/7-holster.png'
];

export const createAntPicture = async (indexes) => {
    const canvas = createCanvas(450, 450);
    const ctx = canvas.getContext('2d');

    const fileNameArray = [[], [], [], [], [], []];
    indexes.forEach((selectedIndex, layerIndex) => {
        const layer = staticLayerInfo[layerIndex];
        if ((selectedIndex !== layer.defaultIndex) || selectedIndex > 0) {
            fileNameArray[layer.elements[selectedIndex].layerLevel].push(`public/ants/${layer.fileName}/${layer.elements[selectedIndex].name}.png`);
        }
    })
    const orderedFileNames = [...fileNameArray[0], ...baseElements, ...fileNameArray[1], ...fileNameArray[2], ...fileNameArray[3], ...fileNameArray[4], ...fileNameArray[5]];
    for (const fileName of orderedFileNames) {
        const image = await loadImage(fileName);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(image, 0, 0, 450, 450);
    };
    const buffer = canvas.toBuffer('image/png');
    return buffer;
    // fs.writeFileSync(antImageFolder + '/' + id, buffer);
}