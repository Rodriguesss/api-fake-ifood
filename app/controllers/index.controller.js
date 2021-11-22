exports.welcome = async (req, res) => {
  try {
    return res.status(200).json({ project: 'fake ifood', owner: 'vino 🤖' });
  } catch (err) {
    return res.status(500).json({ situation: '😵', err })
  }
}
