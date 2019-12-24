import reproduce from './triggers/reproduce';
import open from './triggers/open';

const commands = {
    open,
    reproduce,
    search({synthesis}) {
        synthesis.talk('ok, let\'s do it');
        console.log('search');
    },
    define({result, synthesis}) {

    },
    find({result, synthesis}) { // place
    },
    investigate({result, synthesis}) {

    }
};

export default commands;