const axios = require("axios");

const cep_endereco = (req, res, next) => {
  // Remove caracteres indesejados do CEP
  const cep = req.body.cep.replaceAll(".", "").replaceAll("-", "");

  // Validação do CEP
  if (cep.length == 8 && !isNaN(Number(cep))) {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => {
        // Atribui o valor ao campo correto
        req.body.cep_endereco = Number(cep); // Certifique-se de converter para Number

        // Atribui o endereço completo se necessário
        req.body.endereco = resposta.data;

        next();
      })
      .catch(err => {
        // Lida com erros na requisição à API
        res.status(500).json({ error: 'Erro ao consultar o CEP' });
      });
  } else {
    res.status(400).json({ error: 'CEP inválido' });
  }
};

module.exports = cep_endereco;
