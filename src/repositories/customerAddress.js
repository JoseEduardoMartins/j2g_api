'use strict';
//connection
const db = require('../connections/j2g-connection');
//SELECTS
exports.select = async () =>{
    return new Promise((resolve, reject) => {
        db.query('SELECT * from tb_customer_address',
        (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
};
exports.selectById = async (customer_address_id) => {
	return new Promise((resolve, reject) => {
        db.query('SELECT * from tb_customer_address where customer_address_id = ?',
        [customer_address_id],
        (err, result) => {
            return err ? reject(err) : resolve(result[0]);
        });
	});
};
//INSERTS
exports.insert = async (customer_address) => {
	return new Promise((resolve, reject) => {
        db.query('INSERT INTO tb_customer_address (customer_id, customer_address_municipality, customer_address_street, company_address_number, customer_address_detals, customer_address_district, customer_address_city, customer_address_state, customer_address_zip, customer_address_coutry, customer_address_isDelete) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [customer_address.customer_id, customer_address.customer_address_municipality, customer_address.customer_address_street, customer_address.company_address_number, customer_address.customer_address_detals, customer_address.customer_address_district, customer_address.customer_address_city, customer_address.customer_address_state, customer_address.customer_address_zip, customer_address.customer_address_coutry, customer_address.customer_address_isDelete],
        (err, result) => {
            return err ? reject(err) : resolve(result.insertId);
        });
	});
};
//UPDATES
exports.update = async (customer_address) => {
	return new Promise((resolve, reject) => {
        db.query('UPDATE tb_customer_address SET customer_address_municipality = ?, customer_address_street = ?, company_address_number = ?, customer_address_detals = ?, customer_address_district = ?, customer_address_city = ?, customer_address_state = ?, customer_address_zip = ?, customer_address_coutry = ? WHERE customer_address_id = ?',
        [customer_address.customer_address_municipality, customer_address.customer_address_street, customer_address.company_address_number, customer_address.customer_address_detals, customer_address.customer_address_district, customer_address.customer_address_city, customer_address.customer_address_state, customer_address.customer_address_zip, customer_address.customer_address_coutry, customer_address.customer_address_id],
        (err, result) => {
            return err ? reject(err) : resolve(result);
        });
	});
};
