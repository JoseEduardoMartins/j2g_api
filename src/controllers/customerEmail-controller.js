'use strict';
//imports
const emailValidator = require("email-validator");
//repository
const repository = require('../repositories/customerEmail');
//METHODS GET
exports.get = async (req, res, next) => {
  try {
		console.log('adasddsa');
		const emails = await repository.select();
		res.status(200).send({ emails });
  } catch (error) {
    res.status(400).send({ error });
  }
};
exports.getById = async (req, res, next) => {
  try {
      const email = await repository.selectById( req.body.customer_email_id );
			console.log(req.body.customer_email_id);
      res.status(200).send({ email });
  } catch (error) {
      res.status(400).send({ error });
  }
};
//METHODS POST
exports.set = async (req, res, next) => {
  try {
      const { customer_id, customer_email } = req.body;

			if(!emailValidator.validate(customer_email)) res.status(400).send({ message: 'Email Invalido!' }).end();

      const customer_email_id = await repository.insert({ customer_id, customer_email });

      res.status(200).send({ customer_email_id });
  } catch (error) {
      res.status(400).send({ error });
  }
};
//METHODS PUT
exports.update = async (req, res, next) => {
  try {
		const { customer_email_id, customer_id, customer_email } = req.body;

		if(!emailValidator.validate(customer_email)) res.status(400).send({ message: 'Email Invalido!' }).end();

		await repository.update({ customer_email_id, customer_id, customer_email });

		res.status(200).send({ message: 'Requisição realizada com sucesso!' });
} catch (error) {
		res.status(400).send({ error });
}
};
