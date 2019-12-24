export default {
    dancing() {

    },
    epic() {

    },
    vintage() {

    },
    sexual({synthesis, props}) {
        const sexualSongs = [
            'T7K0pZ9tGi4&list=RDT7K0pZ9tGi4',
            '_DjE4gbIVZk&list=RD_DjE4gbIVZk'
        ];
        synthesis.talk('ok, let\'s get horny');
        window.open(`https://www.youtube.com/watch?v=${sexualSongs[props.random(sexualSongs.length - 1)]}`);
    },
    cool({
        synthesis,
        props
    }) {
        const coolSongs = [
            'S2T0TmT-ipU',
            'oJnF5VxTO5g',
            'm3YX8zlR4BU&list=RDm3YX8zlR4BU'
        ];
        synthesis.talk('ok, what about this');
        window.open(`https://www.youtube.com/watch?v=${coolSongs[props.random(coolSongs.length - 1)]}`);
    },
    hippie({
        synthesis,
        props
    }) {
        const hippieSongs = [
            'Mb3iPP-tHdA&list=PLcKsmDSQYsoGtUH85L4Wa5yRVxOAD29iu',
            'cRjQCvfcXn0&list=RDcRjQCvfcXn0'
        ];
        synthesis.talk('Hippie music incoming');
        window.open(`https://www.youtube.com/watch?v=${hippieSongs[props.random(hippieSongs.length - 1)]}`);
    },
    latino({
        synthesis,
        props
    }) {
        const latinoSongs = [
            'AsCnKFzhFSA&list=RDAsCnKFzhFSA',
            'GhciBgYbA74&list=PLhxNyMmTLzoxuruCiW1gcYfLKVpY8OkQs'
        ];
        synthesis.talk('Ready to dance?');
        window.open(`https://www.youtube.com/watch?v=${latinoSongs[props.random(latinoSongs.length - 1)]}`);
    }
};