const houseModel = require("../models/houseModel");

const getAllHouses = async (req, res) => {
    try {
        const houses = await houseModel.getHouses();
        res.json(houses);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar casas." });
    }
};

const getHouse = async (req, res) => {
    try {
        const house = await houseModel.getHouseById(req.params.id);
        if (!house) {
            return res.status(404).json({ message: "Casa não encontrada." });
        }
        res.json(house);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar casa." });
    }
};

const createHouse = async (req, res) => {
    try {
        const { name, founder } = req.body;
        const newHouse = await houseModel.createHouse(name, founder);
        res.status(201).json({ message: "Casa criada com sucesso.", newHouse });
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar casa." });
    }
};

const updateHouse = async (req, res) => {
    try {
        const { id, name, founder } = req.body;
        const updatedHouse = await houseModel.updateHouse(id, name, founder);
        res.status(200).json({ message: "Casa atualizada com sucesso.", updatedHouse });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar casa." });
    }
};

const deleteHouse = async ( req, res) => {
    try {
        const { id } = req.params;
        const deletedHouse = await houseModel.deleteHouse(id);
        res.status(200).json({ message: "Casa excluída com sucesso.", deletedHouse });
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir casa." });
    }
};



module.exports = { getAllHouses, getHouse, createHouse, updateHouse, deleteHouse };
