'use strict';

/* GET - Obtem todos os locais de jogo */
module.exports.local = (req, res) => {
  const local_jogo = [
    {
      id: 1,
      local: 'campo'
    },
    {
      id: 2,
      local: 'quadra'
    },
    {
      id: 3,
      local: 'society'
    }
  ];
  res.json(local_jogo);
};
