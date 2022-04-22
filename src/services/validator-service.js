'use strict';

exports.isRequired = (value) => {
  return (!value || value.length <= 0) ? false : true;
}

exports.hasMinLen = (value, min) => {
  return (!value || value.length < min) ? false : true;
}

exports.hasMaxLen = (value, max) => {
  return (!value || value.length > max) ? false : true;
}

exports.isFixedLen = (value, len) => {
  return (value.length != len) ? false : true;
}

exports.isCpf = (value) => {
	const reg = new RegExp(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/);
	return (!reg.test(value)) ? false : true;
}

exports.isCnpj = (value) => {
	const reg = new RegExp(/\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}/);
	return (!reg.test(value)) ? false : true;
}

exports.isCpfOrCnpj = (value) => {
	const regCnpj = new RegExp(/\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}/);
	const regCpf = new RegExp(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/);

	return (!regCpf.test(value) || !regCnpj.test(value)) ? false : true;
}

exports.isEqualFields = (FirstValue, secondValue) => {
  return (FirstValue !== secondValue) ? false : true;
}

exports.isPhoneNumber = (value) => {
	const reg = new RegExp(/\d{2} ?(\d{5})|(\d{4})-?\d{4}/);
	return (!reg.test(value)) ? false : true;
}

exports.isEmail = (value) => {
	const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
	return (!reg.test(value)) ? false : true;
}

exports.isPassword = (value) => {
	const reg = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
	return (reg.test(value)) ? false : true;
}
