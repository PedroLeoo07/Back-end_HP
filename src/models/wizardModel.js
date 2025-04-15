const pool = require("../config/database");

const getWizards = async (name) => {
    console.log(name);
    if(!name) {
        const result = await pool.query(
            `SELECT wizards.*, houses.name AS house_name 
             FROM wizards 
             LEFT JOIN houses ON wizards.house_id = houses.id`
        );
        return result.rows;
    }else{
        const result = await pool.query(`
            SELECT wizards.*, houses.name AS house_name 
            FROM wizards 
            LEFT JOIN houses ON wizards.house_id = houses.id
            WHERE wizards.name ILIKE $1`, [`%${name}%`]
        );
        return result.rows;
    }
    
};

const getWizardById = async (id) => {
    const result = await pool.query(
        `SELECT wizards.*, houses.name AS house_name 
         FROM wizards 
         LEFT JOIN houses ON wizards.house_id = houses.id 
         WHERE wizards.id = $1`, [id]
    );
    return result.rows[0];
};

//atualizar a foto do bruxo
const createWizard = async (name, house_id, photo) => {
    const result = await pool.query(
        "INSERT INTO wizards (name, house_id, photo) VALUES ($1, $2, $3) RETURNING *",
        [name, house_id, photo]
    );
    return result.rows[0];
};

const updateWizard = async (id, name, house_id) => {
    const result = await pool.query(
        "UPDATE wizards SET name = $1, house_id = $2 WHERE id = $3 RETURNING *",
        [name, house_id, id]
    );
    return result.rows[0];
};

const deleteWizard = async (id) => {
    const result = await pool.query("DELETE FROM wizards WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = { getWizards, getWizardById, createWizard, updateWizard, deleteWizard };


