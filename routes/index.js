'use strict';

module.exports = app => {
  
  const local = app.controllers.local_get.local;
  const todos_jogadores = app.controllers.jogadores_get.jogadores;
  const grava_jogadores = app.controllers.jogadores_post.jogadores;
  const altera_jogador = app.controllers.jogador_patch.jogador;

  app.get('/', local);
  app.get('/jogadores', todos_jogadores);
  app.post('/jogadores', grava_jogadores);
  app.patch('/jogador', altera_jogador);

};
