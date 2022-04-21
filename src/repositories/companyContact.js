'use strict';

const db = require('../connections/j2g-connection');

//SELECTS
exports.select = async () =>{
	return new Promise((resolve, reject) => {
			db.query('SELECT * from tb_company_contact',
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
exports.selectById = async (company_id) => {
	return new Promise((resolve, reject) => {
			db.query('SELECT * from tb_company_contact where company_contact_id = ?',
			[company_contact_id],
			(err, result) => {
					return err ? reject(err) : resolve(result[0]);
			});
	});
};
//INSERTS
exports.insert = async (company) => {
	return new Promise((resolve, reject) => {
			db.query('INSERT INTO tb_company_contact (company_contact_id, company_contact_email, company_contact_name) VALUES (?, ?, ?)',
			[company.company_id, company.company_email, company.company_name],
			(err, result) => {
					return err ? reject(err) : resolve(result.insertId);
			});
	});
};
//UPDATES
exports.update = async (company) => {
	return new Promise((resolve, reject) => {
			db.query('UPDATE tb_company_contact SET company_contact_email = ?, company_contact_name = ? WHERE company_contact_id = ?',
			[company.company_email, company.company_name, company.company_contact_id],
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
