'use strict'

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.get = (req, res, next) => {
    Usuario.find({})
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var usuario = new Usuario(req.body);

    usuario
        .save()
        .then(x => {
            res.status(201).send({
                message: 'cadastrado'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'falha',
                data: e
            });
        });

};

exports.delete = (req, res, next) => {
    Usuario.findOneAndRemove(
        req.body.id
    )
    .then(data => {
        res.status(201).send({
            message: 'Usuario removido com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover usuario',
            data: e
        });
    });
};

exports.login = (req, res, next) => {
    Usuario.find({
        email: req.params.email,
        senha1: req.params.senha
    })
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

