import Cliente from '../model/cliente.js'

class ServiceCliente {

    asyncBuscar() {
        return Cliente.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Cliente.BuscarUm(id)
    }
    
    async Criar(nome) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        await Cliente.create({ nome })
    }
    
    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        
        const clienteAlterar = await Cliente.findByPk(id)

        if(!clienteAlterar) {
            throw new Error("Cliente não encontrada")
        }

        clienteAlterar.nome = nome

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
