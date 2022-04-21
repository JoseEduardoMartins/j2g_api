'use strict';

const db = require('../connections/j2g-connection');

//SELECTS
exports.select = async () =>{
	return new Promise((resolve, reject) => {
			db.query('SELECT * from tb_company_interaction',
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
exports.selectById = async (company_interaction_id) => {
	return new Promise((resolve, reject) => {
			db.query('SELECT * from tb_company_interaction where company_interaction_id = ?',
			[company_interaction_id],
			(err, result) => {
					return err ? reject(err) : resolve(result[0]);
			});
	});
};
//INSERTS
exports.insert = async (company_interaction) => {
	return new Promise((resolve, reject) => {
			db.query('INSERT INTO tb_company_interaction (company_interaction_id, customer_user_login, customer_user_password, customer_user_type) VALUES (?, ?, ?, ?)',
			[company_interaction.company_interaction_id, company_interaction.customer_user_login, company_interaction.customer_user_password, company_interaction.customer_user_type],
			(err, result) => {
					return err ? reject(err) : resolve(result.insertId);
			});
	});
};
//UPDATES
exports.update = async (company_interaction) => {
	return new Promise((resolve, reject) => {
			db.query('UPDATE tb_company_interaction SET company_interaction_id = ?, customer_user_login = ?, customer_user_password = ?, customer_user_type = ? WHERE company_interaction_id = ?',
			[company_interaction.customer_id, company_interaction.customer_user_login, company_interaction.customer_user_password, company_interaction.customer_user_type, company_interaction.customer_user_id],
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
