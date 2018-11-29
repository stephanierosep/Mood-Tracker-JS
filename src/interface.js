$( document ).ready(function() {
  var mood = new Mood;

  $("#Happy").toggle(1000).toggle(1000);
  $("#Sad").toggle(1000).toggle(1000);
  $("#Grumpy").toggle(1000).toggle(1000);
  $("#Apathetic").toggle(1000).toggle(1000);
  $("#Crisis").toggle(1000).toggle(1000);


  function update() {
    $("#currentMood").html(mood.getCurrentMood());
  }
  update();

  $("#Happy").on('click', function() {
    $("#Happy").html("(◕‿◕✿)")
  });

  $("#Sad").on('click', function() {
    $("#Sad").html("(;´༎ຶД༎ຶ`)")
  });

  $("#Grumpy").on('click', function() {
    $("#Grumpy").html("(ノಠ益ಠ)ノ彡┻━┻")
  });

  $("#Apathetic").on('click', function() {
    $("#Apathetic").html("¯|_(ツ)_|¯")
  });

  $("#Crisis").on('click', function() {
    $("#Crisis").html("┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻")
  })

});
