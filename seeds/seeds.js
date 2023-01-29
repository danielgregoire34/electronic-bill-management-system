const sequelize = require('../config/connection');
const { User, Account } = require('../models');

const userData = require('./userData.json');
const accountData = require('./accountData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const account of accountData) {
    await Account.create({
      ...account,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();