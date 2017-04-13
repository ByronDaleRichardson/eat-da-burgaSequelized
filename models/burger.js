module.exports = function(sequelize, DataTypes) {
  	var Burger = sequelize.define("Burger", {
    	burger_name: DataTypes.STRING,
    	devoured: {
        	type: DataType.BOOLEAN,
        	defaultValue: 0
    	}
  	});
  	return Burger;
};