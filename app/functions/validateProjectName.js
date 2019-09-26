module.exports = (value) => {
	return /^[A-zА-яЁё0-9+_-]{1,36}$/.test(value) ? true : `От 1, до 36 символов, A-zА-я0-9 -_+`;
}