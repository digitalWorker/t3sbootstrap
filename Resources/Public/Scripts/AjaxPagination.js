/* ajax pagination */
$(document).ready(function(){$(".news").on("click",".page-navigation a",function(n){$("#news-spinner").css("display","block");var e=$(this).attr("href");if(void 0!==e&&""!==e){n.preventDefault();var a="news-container-"+$(this).data("container");$.ajax({url:e,type:"GET",success:function(n){var e=$(n).find("#"+a);$("#"+a).replaceWith(e),$("#news-spinner").delay(350).fadeOut("slow")}})}})});