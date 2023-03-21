export default {
    Themes: [
        'cosmo',
        'cyborg',
        'darkly',
        'flatly',
        'journal',
        'lumen',
        'lux',
        'materia',
        'minty',
        'morph',
        'quartz',
        'pulse',
        'sandstone',
        'simplex',
        'sketchy',
        'slate',
        'solar',
        'superhero',
        'united',
        'vapor',
        'yeti',
        'zephyr',
    ],

    setTheme(theme) {
        const cssId = 'themeCss'; // you could encode the css path itself to generate id..
        const cssElem = document.getElementById(cssId)
        const newTheme = ((theme.toLowerCase() !== 'default')&&(theme!=null))?theme:'slate'
        // console.log()
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/css/' + newTheme + '/app.css';
        link.media = 'all';
        head.appendChild(link);
        cssElem.remove();
    }
}
