import commands from '../commands/controller';

function command({result, synthesis, props}) {
    const resultPieces = result.toLowerCase().split(' ');
    let target = commands;
    for (const word of resultPieces) {
        target = target[word] || target;
        if (typeof target === 'function') {
            return target({result, synthesis, props});
        }
    }
}

export default command;