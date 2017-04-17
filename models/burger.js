module.exports = function(sequelize, DataType){
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: DataType.STRING
		},
		devoured: {
			type: DataType.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	return Burger;
}