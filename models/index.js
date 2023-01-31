const User = require('./User.js');
const Account = require('./Account.js');

User.hasMany(Account, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Account.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Account };