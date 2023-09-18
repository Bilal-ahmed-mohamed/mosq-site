const db = require("../config/config");

const {DataTypes , STRING } = require("sequelize");


const Darsas = db.define('Duruus' , {
    title :{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    audio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      

},
{
    timestamps : true,
    freezeTableName:true,
});

db.sync()
.then(() => {
    console.log("Darsas table synched successfully");
})
.catch((error) => {
    console.log('unable to sync darsas table : ', error );
})

module.exports = Darsas;