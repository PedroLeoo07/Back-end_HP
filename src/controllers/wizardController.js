const wizardModel = require("../models/wizardModel");

const getAllWizards = async (req, res) => {
    try {
        const wizards = await wizardModel.getWizards();
        res.json(wizards);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxos." });
    }
};

const getWizard = async (req, res) => {
    try {
        const wizard = await wizardModel.getWizardById(req.params.id);
        if (!wizard) {
            return res.status(404).json({ message: "Bruxo não encontrado." });
        }
        res.json(wizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxo." });
    }
};

const createWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const newWizard = await wizardModel.createWizard(name, house_id);
        res.status(201).json({ message: "Bruxo criado com sucesso.", newWizard });
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar bruxo." });
    }
};

const updateWizard = async (req, res) => {
    try {
        const { id, name, house_id } = req.body;
        const updatedWizard = await wizardModel.updateWizard(id, name, house_id);
        res.status(200).json({ message: "Bruxo atualizado com sucesso.", updatedWizard });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar bruxo." });
    }
};

const deleteWizard = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedWizard = await wizardModel.deleteWizard(id);
        res.status(200).json({ message: "Bruxo excluído com sucesso.", deletedWizard });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir bruxo." });
    }
};



module.exports = { getAllWizards, getWizard, createWizard, updateWizard, deleteWizard };
