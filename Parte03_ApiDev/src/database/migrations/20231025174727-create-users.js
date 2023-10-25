/** @type {import('sequelize-cli').Migration} */

// Padrão: instadev_tables -> table_campo
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('instadev_users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      user_nickname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      user_avatar: {
        type: Sequelize.STRING,
      },
      user_biography: {
        type: Sequelize.STRING,
      },
      user_gender: {
        type: Sequelize.STRING,
      },
      user_password_hash: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_create_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_status: {
        allowNull: false,
        type: Sequelize.ENUM('A', 'I', 'E'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('instadev_users');
  },
};
