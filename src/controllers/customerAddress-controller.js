'use strict';
//repository
const repository = require('../repositories/customerAddress');
//METHODS GET
exports.get = async (req, res, next) => {
    try {
        const address = await repository.select();
        res.status(200).send({ address });
    } catch (error) {
        res.status(400).send({ error });
    }
};
exports.getById = async (req, res, next) => {
    try {
        const { customer_address_id } = req.body;
        const address = await repository.selectById( customer_address_id );
        res.status(200).send({ address });
    } catch (error) {
        res.status(400).send({ error });
    }
};
//METHODS POST
exports.set = async (req, res, next) => {
    try {
        const { customer_id, customer_address_municipality, customer_address_street, company_address_number, customer_address_detals, customer_address_district, customer_address_city, customer_address_state, customer_address_zip, customer_address_coutry } = req.body;

        const address_id = await repository.insert({ customer_id, customer_address_municipality, customer_address_street, company_address_number, customer_address_detals, customer_address_district, customer_address_city, customer_address_state, customer_address_zip, customer_address_coutry, customer_address_isDelete: 0 });

        res.status(200).send({ address_id });
    } catch (error) {
        res.status(400).send({ error });
    }
};
//METHODS PUT
exports.update = async (req, res, next) => {
    try {
        const { customer_address_id, customer_address_municipality, customer_address_street, company_address_number, customer_address_detals, customer_address_district, customer_address_city, customer_address_state, customer_address_zip, customer_address_coutry } = req.body;

        await repository.update({ customer_address_id, customer_address_municipality, customer_address_street, company_address_number, customer_address_detals, customer_address_district, customer_address_city, customer_address_state, customer_address_zip, customer_address_coutry });

        res.status(200).send({ message: 'Requisição realizada com sucesso!' });
    } catch (error) {
        res.status(400).send({ error });
    }
};
