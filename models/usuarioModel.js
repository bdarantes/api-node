let usuarios = [
{id:1, nome: "Marta"},
{id:2, nome: "Joaquina"}
];

export const listarUsuarios= () => usuarios;

export const buscarPorId = (id)=> usuarios.find(u=> u.id ===id);

export const criarUsuario = (nome) => {
	const novoUsuario = {
		id: usuarios.length + 1,
		nome
		};
		usuarios.push(novoUsuario);
		return novoUsuario;
};

export const atualizar = (id,nome) => {
	const usuario = usuarios.find(u=> u.id === id);
	if(!usuario) return null;
	usuario.nome = nome;
	return usuario;
};

export const deletar = (id)=> {
	const index = usuarios.findIndex(u=>u.id===id);
	if(index === -1) return false;
	usuarios.splice(index, 1);
	return true;
};
	

	
