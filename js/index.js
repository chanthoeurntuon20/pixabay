$(document).ready(function(){
    $('button').on('click',function(){
        var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
        $.ajax({
            dataType: "json",
            url: url,
            success: function(data){
              var result = "";
              var condition = 0;
              data.hits.forEach(element => {
                if(condition <= 5){
                  result += `
                  <div class="card mt-5 shadow-lg">
                     <div class="card-header text-uppercase">
                         <img src = "${element.userImageURL}" class = "img-fluid rounded-circle" width = "40">
                         ${element.user}
                         <button type="button" class="btn btn-primary float-right " data-toggle="modal" data-target="#myModal${element.id}">Veiew</button>
                     </div>
                     <div class="card-body">
                          <img src = "${element.largeImageURL}" class = "img-fluid" >
                     </div>
                 </div>

                 <div class="modal fade" id="myModal${element.id}">
                 <div class="modal-dialog">
                   <div class="modal-content">
                   
                     <!-- Modal Header -->
                     <div class="modal-header">
                       <h4 class="modal-title">Modal Heading</h4>
                       <button type="button" class="close" data-dismiss="modal">&times;</button>
                     </div>
                     
                     <!-- Modal body -->
                     <div class="modal-body">
                          <img src = "${element.largeImageURL}" class = "img-fluid" >

                      <ul class="list-group list-group-horizontal mt-5">
                          <li class="list-group-item">
                             ${element.likes}
                             &nbsp;
                             <i class = "material-icons float-right text-primary">thumb_up</i>
                          </li>
                        
                          <li class="list-group-item">
                             ${element.comments}
                             &nbsp;
                             <i class = "material-icons float-right text-warning">comments</i>
                          </li>
                        
                          <li class="list-group-item">
                             ${element.favorites}
                             &nbsp;
                             <i class = "material-icons float-right text-info">favorite</i>
                          </li>
                        
                          <li class="list-group-item">
                             ${element.views}
                             &nbsp;
                             <i class = "material-icons float-right text-danger">visibility_off</i>
                          </li>
                        
                        </ul>
                     </div>
                   </div>
                 </div>
               </div>
               `
                }
                  condition++;
              });
              $('#display').append(result);
            }
        })
    })
})