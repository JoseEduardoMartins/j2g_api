'use strict'; 
//imports
const validator = require('../services/validator-service');
//repository
const repository = require('../repositories/customerUser');
//METHODS GET
exports.get = async (req, res, next) => {
	try {
		console.log('dfds');
		const customer_phones = await repository.select();
		res.status(200).send({ customer_phones });
	} catch (error) {
		res.status(400).send({ error });
	}
};
exports.getById = async (req, res, next) => {
  try {
			const { customer_phone_id } = req.body;
      const customer_phone = await repository.selectById( customer_phone_id );
      res.status(200).send({ customer_phone });
  } catch (error) {
      res.status(400).send({ error });
  }
};
//METHODS POST
exports.set = async (req, res, next) => {
  try {
		const { customer_id, customer_user_login, customer_user_password, customer_user_type } = req.body;
		const customer_user_id = await repository.insert({ customer_id, customer_user_login, customer_user_password, customer_user_type });
		res.status(200).send({ customer_user_id });
  } catch (error) {
    res.status(400).send({ error });
  }
};
//METHODS PUT
exports.update = async (req, res, next) => {
  try {
		const { customer_id, customer_user_login, customer_user_password, customer_user_type, customer_user_id } = req.body;

		await repository.update({ customer_id, customer_user_login, customer_user_password, customer_user_type, customer_user_id });

		res.status(200).send({ message: 'Requisição realizada com sucesso!' });
	} catch (error) {
		res.status(400).send({ error });
	}
};
