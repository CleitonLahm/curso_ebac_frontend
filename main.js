$(document).ready(function() {
  const apiUrl = 'https://api.github.com/users/cleitonlahm';

  $.ajax({
      url: apiUrl,
      dataType: 'json',
      success: function(data) {
          $('.profile-avatar').attr('src', data.avatar_url);
          $('.profile-name').text(data.name);
          $('.profile-username').text('@' + data.login);
          $('.repo-title').text('Repositórios');
          $('.repo-count').text(data.public_repos);
          $('.follower-title').text('Seguidores');
          $('.follower-count').text(data.followers);
          $('.following-title').text('Seguindo');
          $('.following-count').text(data.following);
      },
      error: function() {
          console.log('Erro ao carregar os dados do GitHub.');
      }
  });
});