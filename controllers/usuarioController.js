import * as UsuarioModel from '../models/usuarioModel.js';

export const buscarUsuarios= (req, res)=> {
    res.json(UsuarioModel.listarUsuarios());

};

export const buscarUsuarioPorId = (req, res)=> {
    const id = parseInt(req.params.id);
    const usuario = UsuarioModel.buscarPorId(id);
    if(!usuario) return res.status(404).json({mensagem: "Usuario não encontrado"});
    res.json(usuario);
};

export const criarNovoUsuario = (req, res) => {
    const {nome} = req.body;
    if(!nome) return res.status(400).json({mensagem: "Nome é obrigatório"});
    const novo = UsuarioModel.criarUsuario(nome);
    res.status(201).json(novo);
};

export const atualizarUsuario = (req, res)=> {
    const id = parseInt(req.params.id);
    const {nome} = req.body;
    const atualizado = UsuarioModel.atualizar(id, nome);
    if(!atualizado) return res.status(404).json({mensagem: "Usuário não encontrado"});
    res.json(atualizado);
};

export const deletarUsuario = (req, res)=> {
    const id = parseInt(req.params.id);
    const deletado = UsuarioModel.deletar(id);
    if(!deletado) return res.status(404).json({mensagem:"Usuário não encontrado" });
    res.status(204).send();
    }
