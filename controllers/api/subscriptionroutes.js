const router = require('express').Router();
const { Account } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAccount = await Account.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newAccount);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const accountData = await Account.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!accountData) {
      res.status(404).json({ message: 'No account found with this id!' });
      return;
    }

    res.status(200).json(accountData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;