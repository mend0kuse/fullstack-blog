export default function modifyDate(date) {
	const Date = date.split('T')[0]
	const time = date.split('T')[1].split('.')[0]
	return Date + '  ' + time
}