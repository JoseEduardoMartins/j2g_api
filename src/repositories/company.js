'use strict';

const db = require('../connections/j2g-connection');

//SELECTS
exports.select = async () =>{
	return new Promise((resolve, reject) => {
			db.query('SELECT * from tb_company',
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
exports.selectById = async (company_id) => {
	return new Promise((resolve, reject) => {
			db.query('SELECT * from tb_company where company_id = ?',
			[company_id],
			(err, result) => {
					return err ? reject(err) : resolve(result[0]);
			});
	});
};
//INSERTS
exports.insert = async (company) => {
	return new Promise((resolve, reject) => {
			db.query('INSERT INTO tb_company (company_id, company_email, company_name) VALUES (?, ?, ?)',
			[company.company_id, company.company_email, company.company_name],
			(err, result) => {
					return err ? reject(err) : resolve(result.insertId);
			});
	});
};
//UPDATES
exports.update = async (company) => {
	return new Promise((resolve, reject) => {
			db.query('UPDATE tb_company SET company_email = ?, company_name = ? WHERE company_id = ?',
			[company.company_email, company.company_name, company.customer_id],
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
