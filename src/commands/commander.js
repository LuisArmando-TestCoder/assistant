import commands from './controller';

let target = commands;

function command({result, synthesis, props}) {
    const resultPieces = result.toLowerCase().split(' ');
    for (const word of resultPieces) {
        target = target[word] || target;
        if (typeof target === 'function') {
            target({result, synthesis, props});
            target = commands;
        }
    }
}

export default command;