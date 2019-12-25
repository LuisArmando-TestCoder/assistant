import reproduce from './triggers/reproduce';
import open from './triggers/open';

const commands = {
    open,
    reproduce,
    search({
        result,
        synthesis
    }) {
        const searchResult = result.split('search')[1];
        // maybe a bug where:
        // lala 3 times in: search lala search wow search what
        synthesis.talk(`ok, I am looking up for ${searchResult}`);
        window.open(`https://google.com/search?q=${searchResult}`)
    },
    define({
        result,
        synthesis
    }) {
        const splitted = result.split(' ');
        const lastWord = splitted[splitted.length - 1];
        synthesis.talk(`ok, here the definition of ${lastWord}`);
        window.open(`https://www.wordreference.com/definition/${lastWord}`);
    },
    find({
        result,
        synthesis
    }) {
        const urlParam = result.replace(/find/, '').trim().split(' ').join('+');
        synthesis.talk(`The place that your asking for is here`);
        window.open(`https://www.google.com/maps/place/${urlParam}`);
    }
};

export default commands;