const fs = require('fs');
const CleanCSS = require('clean-css');

const files = [
    'static/css/bootstrap-3.4.1.min.css',
    'static/css/bootstrap-3.4.1.min.css.map',
    'static/css/fonts.css',
    'static/css/pygment.css',
    'static/css/nid.css'
];

let combinedCss = '';

files.forEach((file) => {
    try {
        const content = fs.readFileSync(file, 'utf-8');
        combinedCss += content;
    } catch (error) {
        console.error(`Error when read file ${file}: ${error.message}`);
    }
});

const minifiedCss = new CleanCSS().minify(combinedCss).styles;

fs.writeFile('static/css/all.min.css', minifiedCss, (error) => {
    if (error) {
        console.error(`Erro when write file all.min.css: ${error.message}`);
    } else {
        console.log('Files was minified with success.');
    }
});
