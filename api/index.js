module.exports = (req, res) => {
  const date = new Date();
  const yyyymm = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2);
  const url = `https://280blocker.net/files/280blocker_adguard_${yyyymm}.txt`;
  res.redirect(301, url);
};