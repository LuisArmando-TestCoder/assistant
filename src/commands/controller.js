import reproduce from './triggers/reproduce';
import open from './triggers/open';

const commands = {
    open,
    reproduce,
    search({result, synthesis}) {
        const searchResult = result.split('search')[1];
        // maybe a bug where:
        // lala 3 times in: search lala search wow search what
        synthesis.talk(`ok, I am looking up for ${searchResult}`);
        window.open(`https://google.com/search?q=${searchResult}`)
    },
    define({result, synthesis}) {

    },
    find({result, synthesis}) { // place
    },
    investigate({result, synthesis}) {

    }
};

export default commands;