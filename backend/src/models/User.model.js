import { Sequelize, DataTypes } from 'sequelize';

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: DataTypes.STRING(40),
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING(40),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        nickname: {
          type: DataTypes.STRING(15),
          allowNull: false,
          unique: true,
        },
        profileImg: {
          type: DataTypes.STRING(2048),
          allowNull: false,
          defaultValue:
            'https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
        },
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'users',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }
  static associate(db) {
    db.User.hasMany(db.Like, {
      foreignKey: 'userId',
      sourceKey: 'userId',
    });
  }
};
