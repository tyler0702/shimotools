

  var z = 0;
// 付箋追加
$(function() {
  $('#box_button').click(function() {
    var kazu_number = $(".tab-pane.active .sticky").length;

     var max_number = $(".tab-pane.active .sticky:last-child .number").text(); 
     console.log("max_number" + max_number);
     if(max_number > kazu_number){
        number = max_number ;
     }else{
        number = kazu_number;
     }
      number++;

      //var accordion_number = number;
      var object = {
          number: number,
          title_accordion_number: (2 * number) - 1,
          comment_accordion_number: 2 * number
      }
        var Baccordion =  (function () {/*
<h3 class="ui-accordion-header ui-state-default ui-accordion-icons ui-corner-all" role="tab" id="ui-id-${title_accordion_number}" aria-controls="ui-id-${comment_accordion_number}" aria-selected="false" aria-expanded="false" tabindex="0">
<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>${number}</h3>
<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" id="ui-id-${comment_accordion_number}" aria-labelledby="ui-id-${title_accordion_number}" role="tabpanel" aria-hidden="true" style="display: none; height: 178px;"><textarea class="comment"></textarea></div>

*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
console.log(Baccordion);
        var Baccordion_box = jQuery.tmpl(Baccordion, object);

        var test = '<h3>'+ number +'</h3><div><textarea></textarea></div>';
        $( "#accordion" ).append(test);
        $( "#accordion" ).accordion('destroy');

       // $('#accordion').append(test);
        $( "#accordion" ).accordion({ active: false, collapsible: true, animated: 'bounceslide'  });

// console.log(number);
    //z = number;
     // z ++;
        var closeBtn = "&nbsp;<button class=\"close\" id=boxclose>&times;</button>";
     $('<div class="sticky hvr-float-shadow" style=position:absolute;><span class=number>'+ number +'</span>'+ closeBtn +'<div id="textbox" class=textbox'+ number +'>Drag & Double Clickしてね</div></div>')
      .appendTo('.tab-pane.active .place_button_class')
      .draggable({
        containment: "parent",
        zIndex: number
      })
      .resizable({
        minHeight: 50,
        minWidth: 100
      })
      .dblclick(function() {
        $(this).children("#textbox").wrapInner('<textarea id="text_default"></textarea>')
          .find('textarea')
          .focus()
          .select()
          .blur(function() {
            $(this).parent().html($(this).val());
          });
      });
  });
});

//削除対応
  $(document).on('click', 'button#boxclose', function (e) {
        var myz = $(this).prev("span").text();

        var delId = $(this);

        swal({
          title: "削除するぅ?",   
          text: "消せば戻らぬぞ",   
          type: "warning",   
          showCancelButton: true,
          cancelButtonText: "まだ消せねぇ",    
          confirmButtonColor: "#DD6B55",   
          confirmButtonText: "消すわ",   
          closeOnConfirm: false,   
          closeOnCancel: false
          },
          function(isConfirm){ 
            if (isConfirm) {
              delId.parent(".sticky").remove();
              var a = $(".ui-accordion-header:contains("+ myz + ")");
              a.next().remove();
              a.remove();
              console.log(a);
              var number = $(".tab-pane.active .sticky").length;
              // if(myz == number){
              //   number--;
              // }
            swal("悪・即・斬","牙突発動", "success");   
          } else {
            swal("殺さず", "命拾いしたな", "error");   
          }  
            
          });
    });



// tab 追加
$(function () {
    // tab
    function addTab(tabId,URL) {
       // console.log(URL);
        var liId = tabId + "LiId";
        var closeBtnId = tabId + "CloseBtnId";
        var frame = "<iframe id=\"main_frame" + tabId + "\" src=\"" + URL + "\"></iframe><div class=place_button_class id=\"place_button" + tabId + "\"></div>";
       // console.log(frame);
        var closeBtnTag = "&nbsp;<button class=\"close\" id=\"" + closeBtnId + "\">&times;</button>";
        //$('#listidTabs').append("<li id=\"" + liId + "\"><a id=\"" + hrefId + "\" href=\"#" + tabcount + "\" data-toggle=\"tab\">新規タブ" + tabcount + "<button class=\"close\" id=\""                                        + tabcount + "CloseBtn\">&times;</button></a></li>");
       //Accordion用意
        // var Baccordion = '<h3>タブ'+ tabId +'</h3><div><textarea id=comment'+ tabId +'>なにか</textarea></div>';

//        var toggleadd = '<dt>アコーディオンメニュー1</dt><dd style=display: none;>アコーディオンメニューが開く。</dd>';

        $('#listidTabs').append("<li id=\"" + liId + "\"><a href=\"#" + tabId + "\" data-toggle=\"tab\">タブ" + tabId + closeBtnTag + "</a></li>");

        $('#listStatsTab').append("<div id=\"" + tabId + "\" class=\"tab-pane\">" + frame + " </div>");

        //$('.accrdion_box').append(Baccordion).accordion({ collapsible: true, animated: 'bounceslide'  });

        //accordion set
        var accourdion_set = "<h2 class=accordion_Headers>タブ"+ tabId +"</h2><div id=accordion class=accrdion_box"+ tabId +"></div>";

        //rightside追加
        $("#rightside").append("<div class=rightsidable_"+ tabId +">"+ accourdion_set +"</div>");
 

        $("#place_button"+ tabId).css({
          'background-color': 'rgba(255,255,255,0.1)',
          'width': '100%',
          'height': '100%',
          'border': '1px solid',
          'position': 'absolute',
          'top': '42px',
          'left': '0'
        });
        $("#main_frame"+ tabId).css({
          'width': '100%',
          'height': '100%'
        });

        $("#" + liId + " a").tab('show');

        console.log("a");
    }

    var tabcount = 1;
// tab削除
    $(document).on('click', 'button.close', function (e) {
        console.log("close click!");

        var removeTabPaneId = (e.target.parentNode.href).split("#")[1];
        var removeTabId = e.target.parentNode.parentNode.id;
        // get near element 
        var meIndex = $("#listidTabs li").index(e.target.parentNode.parentNode);
        console.log("meIndex = " + meIndex);

        console.log(removeTabId);
        console.log("removeTabPaneId = " + removeTabPaneId);
        //console.dir(e.target);
        $("#listidTabs li" + "#" + removeTabId).remove();
        $("#listStatsTab div.tab-pane" + "#" + removeTabPaneId).remove();
        $("#listidTabs li:eq(" + meIndex + ") a").tab('show');
    });

            var URL = $("#url").val();

    // 動的に作成したタブがクリックされた場合の処理
    $(document).on('click', 'a[data-toggle="tab"]', function (e) {
        if(e.target.href) {

            var tabId = (e.target.href).split("#")[1];
            console.log("tabId = " + tabId);
            if(tabId == "plus") {
                // タブを追加する。
                addTab(tabcount,URL);
                tabcount++;
            }
        }
    });
    

    for(var i = 0; i < 1; i++) {
        addTab(tabcount,URL);
        tabcount++;
    }

});

        // $("#acMenu dt").on("click", function() {
        //     $(this).next().slideToggle();
        // });
