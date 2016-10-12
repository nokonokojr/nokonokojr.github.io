    function onButtonClick() {

      selindex = document.form1.Select1.selectedIndex;
      target = document.getElementById("output");

          var message = $('a');
      switch (selindex) {
        
        case 1:
          message.attr("href", "tokyo/index.html");
          break;
        case 2:
         message.attr("href", "oosaka/index.html");
          break;
        case 3:
          message.attr("href", "hokkaido/index.html");
          break;
        case 4:
          message.attr("href", "okinawa/index.html");
          break;
              case 5:
          message.attr("href", "fukuoka/index.html");
          break;
      }
    }
