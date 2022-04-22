'use strict';
//imports
const { phone } = require('phone')
//repository
const repository = require('../repositories/customerPhone');
//METHODS GET
exports.get = async (req, res, next) => {
		try {
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
		const { customer_id, customer_phone } = req.body;

		const id_number = await repository.insert({
				customer_id,
				customer_phone: customer_phone.replaceAll("+","").replaceAll(" ", "").replaceAll("-", "").replaceAll("(", "").replaceAll(")", ""),
			});

		res.status(200).send({ id_number });
	} catch (error) {
		res.status(400).send({ error });
	}
};
//METHODS PUT
exports.update = async (req, res, next) => {
  try {
		const { company_phone_id, company_phone } = req.body;
		const phoneValidate = phone(company_phone);

		if(!phoneValidate.isValid) res.status(400).send({ error })

		await repository.update({
			company_phone_id,
			company_phone: phoneValidate.phoneNumber,
		});

		res.status(200).send({ message: 'Requisição realizada com sucesso!' });
	} catch (error) {
		res.status(400).send({ error });
	}
};
