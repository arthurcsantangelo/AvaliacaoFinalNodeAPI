import Cliente from '../model/cliente.js'

class ServiceCliente {

    asyncBuscar() {
        return Cliente.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Cliente.findByPk(id)
    }
    
    async Criar(nome, email, senha) {
        if(!nome || !email || !senha ) {
            throw new Error("Favor informar o nome, email ou senha")
        }
        
        await Cliente.create({ nome, email, senha })
    }
    
    async Alterar(id, nome, email, senha) {
         if (!id) {
            throw new Error("Favor informar os dados");
        }
        
        const clienteAlterar = await Cliente.findByPk(id)

        if(!clienteAlterar) {
            throw new Error("Cliente não encontrada")
        }

        clienteAlterar.nome = nome
        clienteAlterar.email = email
        clienteAlterar.senha = senha

        await clienteAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        
        const clienteDelete = await Cliente.findByPk(id)

        if(!clienteDelete) {
            throw new Error("Favor informar o Id corretamente")
        }

        await clienteDelete.destroy()
    }
    
}

export default new ServiceCliente()
