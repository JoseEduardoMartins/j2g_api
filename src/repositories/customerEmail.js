'use strict';

const db = require('../connections/j2g-connection');

//SELECTS
exports.select = async () => {
	return new Promise((resolve, reject) => {
			db.query('SELECT * FROM tb_customer_email',
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
exports.selectById = async (customer_emaiL_id) => {
	return new Promise((resolve, reject) => {
			db.query('SELECT * FROM tb_customer_email WHERE customer_emaiL_id = ?',
			[customer_emaiL_id],
			(err, result) => {
					return err ? reject(err) : resolve(result[0]);
			});
	});
};
//INSERTS
exports.insert = async (customer_emaiL) => {
	return new Promise((resolve, reject) => {
			db.query('INSERT INTO tb_customer_email (customer_id, customer_email) VALUES (?, ?)',
			[customer_emaiL.customer_id, customer_emaiL.customer_email],
			(err, result) => {
					return err ? reject(err) : resolve(result.insertId);
			});
	});
};
//UPDATES
exports.update = async (customer_emaiL) => {
	return new Promise((resolve, reject) => {
			db.query('UPDATE tb_customer_email SET customer_emaiL = ? WHERE customer_email_id = ?;',
			[customer_emaiL.customer_email, customer_emaiL.customer_email_id],
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
