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
    
    async Criar(dia, hora, valor, concluido) {
        if(!dia || !hora || !valor || !concluido ) {
            throw new Error("Favor informar os dados")
        }
        
        await Atendimento.create({ dia, hora, valor, concluido })
    }
    
    async Alterar(id, dia, hora, valor, concluido) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await Atendimento.findByPk(id)
        if(!atendimentoAlterar) {
            throw new Error("Atendimento não encontrada")
        }

        atendimentoAlterar.dia = dia
        atendimentoAlterar.valor = valor
        atendimentoAlterar.hora = hora
        atendimentoAlterar.concluido = concluido

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
