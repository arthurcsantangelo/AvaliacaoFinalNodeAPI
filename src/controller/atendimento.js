import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {
    
    async Buscar(_, res) {
        try {
            const atendimentos = await ServiceAtendimento.Buscar()
            res.status(200).send({ mensagem: atendimentos })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async BuscarUm(req, res) {
         try {
            const id = req.params.id
            const nome = ServiceCliente.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { id, dia, hora, valor, concluído } = req.body

            await ServiceAtendimento.Criar(id, dia, hora, valor, concluído)
            
            res.status(201).send({ mensagem: "Atendimento cadastrado com sucesso!" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { dia, hora, valor, concluído } = req.body
            const id = req.params.id

            await ServiceAtendimento.Alterar(id, dia, hora, valor, concluído)
            
            res.status(200).send({ mensagem: "Atendimento alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceAtendimento.Deletar(identificador)

            res.status(200).send({ mensagem: "Atendimento deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerAtendimento()