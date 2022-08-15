

const seleccionarGenero = (req, res) => {
    res.send(`seleccionarGenero`)
    console.log('seleccionarGenero')
}


const listarGeneros = (req, res) => {
    res.send(`listar genero`)
}


const guardarGenero = (req, res) => {
    const {nombre, descripcion } = req.body;
    console.log(`El nombre de genero es ${nombre} y su descripcion es ${descripcion}`);
    res.send(`El genero musical ha sido guardado con éxito!`);
}

module.exports = {
    seleccionarGenero,
    listarGeneros,
    guardarGenero
}