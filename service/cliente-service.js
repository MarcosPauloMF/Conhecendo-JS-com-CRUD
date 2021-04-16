const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then (resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não é possível listar Cliente')

    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then (resposta => {
        if (resposta.ok){
            return resposta.body
        }
        throw new Error('Não é possível criar Cliente')
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    }).then(resposta => {
        if (resposta.ok){
            return resposta.body
        }
        throw new Error('Não é possivel remover um cliente')
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then (resposta => {
        if (resposta.ok){
            return resposta.json()
        }
        throw new Error('Não é possivel detalhar os clientes')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then (resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não é possivel atualizar um cliente')
    })
}

export const clienteService = {
    listaClientes, 
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}