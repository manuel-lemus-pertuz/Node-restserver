const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre, edad
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}