const argv = require('./config/yargs').argv;
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const colors = require('colors');


colors.setTheme({
    data: 'green'
})
let parametro = argv._[0];

switch (parametro) {

    case 'listar':
        listarArchivo(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.data(archivo)))
            .catch(e => console.log(e));
        break
}