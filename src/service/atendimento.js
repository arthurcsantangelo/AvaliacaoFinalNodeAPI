import Atendimento from '../model/atendimento.js'

class ServiceAtendimento {

    asyncBuscar() {
        return Atendimento.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Atendimento.findByPk(id)
    }
    
    async Criar(nome) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        await Atendimento.create({ nome })
    }
    
    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        
        const atendimentoAlterar = await Atendimento.findByPk(id)

        if(!atendimentoAlterar) {
            throw new Error("Atendimento não encontrada")
        }

        atendimentoAlterar.nome = nome

        await atendimentoAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        
        const atendimentoDelete = await Atendimento.findByPk(id)

        if(!atendimentoDelete) {
            throw new Error("Favor informar o Id corretamente")
        }

        await atendimentoDelete.destroy()
    }
    
}

export default new ServiceAtendimento()
