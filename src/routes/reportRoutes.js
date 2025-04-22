const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const apikeyMiddleware = require("../config/apiKey.js"); // crie a pasta middleware e o arquivo apiKey.js 

router.use(apikeyMiddleware); // Adiciona o middleware de autenticação de chave de API a todas as rotas

//Rota para gerar CSV
router.get("/report/csv", reportController.exportWizardCSV);

//Rota para gerar PDF
router.get("/report/pdf", reportController.exportWizardPDF);

module.exports = router;