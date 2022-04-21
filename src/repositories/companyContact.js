'use strict';

const db = require('../connections/j2g-connection'); 

//SELECTS
exports.select = async () =>{
	return new Promise((resolve, reject) => {
			db.query('SELECT * from tb_customer_user',
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
exports.selectById = async (customer_user_id) => {
	return new Promise((resolve, reject) => {
			db.query('SELECT * from tb_customer_user where customer_user_id = ?',
			[customer_user_id],
			(err, result) => {
					return err ? reject(err) : resolve(result[0]);
			});
	});
};
//INSERTS
exports.insert = async (customer_user) => {
	return new Promise((resolve, reject) => {
			db.query('INSERT INTO tb_customer_user (customer_id, customer_user_login, customer_user_password, customer_user_type) VALUES (?, ?, ?, ?)',
			[customer_user.customer_id, customer_user.customer_user_login, customer_user.customer_user_password, customer_user.customer_user_type],
			(err, result) => {
					return err ? reject(err) : resolve(result.insertId);
			});
	});
};
//UPDATES
exports.update = async (customer_user) => {
	return new Promise((resolve, reject) => {
			db.query('UPDATE tb_customer_user SET customer_id = ?, customer_user_login = ?, customer_user_password = ?, customer_user_type = ? WHERE customer_user_id = ?',
			[customer_user.customer_id, customer_user.customer_user_login, customer_user.customer_user_password, customer_user.customer_user_type, customer_user.customer_user_id],
			(err, result) => {
					return err ? reject(err) : resolve(result);
			});
	});
};
