$(document).ready(function() {
  $('#guess').click(function(){

    function randomCards(arr, n) {
      var i, j, temp;
      for (i=0; i<arr.length; i++) {
        j = Math.floor(Math.random() * i);
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };
      return arr.slice(0, n);
    };

    var senior_cards = randomCards(tarokka.seniordeck, 2);
    var junior_cards = randomCards(tarokka.juniordeck, 3);

    // показать расклад карт
    $('.response').fadeIn('600');
    // TODO: скролл на скрин с картами

    $('.alignment img').click(function(event) {
      var item = $(event.target);
      var item_number = item.attr("data-img");
      item_number = parseInt(item_number);

      // Замена изображения по клику
      // Вывод описания карты
      //FIX: медленно грузит картинки, надо подгружать втихаря
      switch(item_number){
        case 1:
          item.attr("src", junior_cards[0].image);
          $(".result-info h4").text(junior_cards[0].name);
          $(".result-info p").text(junior_cards[0].description);
          $(".forecaster").css({'background': 'url("img/eva.png") 53% 28% / cover no-repeat', 'background-size': '500px'});
          break;
        case 2:
          item.attr("src", junior_cards[1].image);
          $(".result-info h4").text(junior_cards[1].name);
          $(".result-info p").text(junior_cards[1].description);
          $(".forecaster").css({'background': 'url("img/eva.png") 53% 28% / cover no-repeat', 'background-size': '500px'});
          break;
        case 3:
          item.attr("src", junior_cards[2].image);
          $(".result-info h4").text(junior_cards[2].name);
          $(".result-info p").text(junior_cards[2].description);
          $(".forecaster").css({'background': 'url("img/eva.png") 53% 28% / cover no-repeat', 'background-size': '500px'});
          break;
        case 4:
          item.attr("src", senior_cards[0].image);
          $(".result-info h4").text(senior_cards[0].name);
          $(".result-info p").text(senior_cards[0].ally);
          $(".forecaster").css({'background': 'url("img/eva.png") 53% 28% / cover no-repeat', 'background-size': '500px'});
          break;
        case 5:
          item.attr("src", senior_cards[1].image);
          $(".result-info h4").text(senior_cards[1].name);
          $(".result-info p").text(senior_cards[1].location);
          $(".forecaster").css({'background': 'url("img/eva.png") 53% 28% / cover no-repeat', 'background-size': '500px'});
          break;
        default:
          alert ('Ошибочка вышла =)');
      };
    });

  });

});
