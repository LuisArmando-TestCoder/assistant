import commands from './controller';

let target = commands;

function commander({result, synthesis, props, callback}) {
    const resultPieces = result.toLowerCase().split(' ');
    for (const word of resultPieces) {
        target = target[word] || target;
        if (typeof target === 'function') {
            target({result, synthesis, props});
            target = commands;
        } else if (word === 'nevermind') target = commands;
        if (callback) callback(target);
    }
}

export default commander;