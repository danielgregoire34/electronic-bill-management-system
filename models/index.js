const User = require('./User');
const Account = require('./account');

User.hasMany(Account, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Account.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Account };