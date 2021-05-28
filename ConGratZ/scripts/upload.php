<?php
if( $_SERVER['REQUEST_METHOD']=='POST' && isset( $_POST['image'],$_POST['filename'] ) ){

    $image=$_POST['image'];
    $filename=$_POST['filename'];

    /* edit to suit own environment */
    $savepath='F:/xampp/htdocs/ConGratZ/scripts/';

    $target=$savepath . $filename;
    $result=file_put_contents( $target, base64_decode( $image ) );

    header('HTTP/1.1 200 OK',true,200);
    header('Content-Type: text/plain');
    exit( $result ? sprintf( 'File uploaded & saved as %s', $target ) : sprintf( 'Unable to save %s',$filename ) );
}
?>
<!doctype html>
<html>
<head>
    <meta charset='utf-8' />
    <title>HTML Canvas Image to PHP</title>
    <script>
        (function(options){
            document.addEventListener('DOMContentLoaded',function(e){
                /*
                    generate a canvas with some sort of image -
                    in this example a promo picture from the classic
                    B-Horror film "The Blob"
                */
                var canvas=document.getElementById('canvas');
                var ctx=canvas.getContext('2d');
                var img=new Image();
                img.src='/resources/placeholder.png';
                img.onload=function(){
                    canvas.width=img.width;
                    canvas.height=img.height;
                    ctx.drawImage( img, 0, 0, canvas.width, canvas.height );
                }


                /*
                    Button click event handler
                    create FormData Object and read the canvas data
                    then send via ajax to a PHP script ( in this case the same page )
                    to process the uploaded image.
                */
                function bindEvents(event){

                    var fd=new FormData();
                    fd.append('action','save');
                    fd.append('image', canvas.toDataURL('image/jpg').replace( /^data:image\/(png|jpg);base64,/, '' ) );
                    fd.append('filename',img.src.split('/').pop() )

                    var ajax=function(url,data,callback){
                        var xhr=new XMLHttpRequest();
                        xhr.onreadystatechange=function(){
                            if( this.readyState==4 && this.status==200 )callback.call( this, this.response );
                        };
                        xhr.open( 'POST', url, true );
                        xhr.send( data );
                    };

                    var callback=function(r){
                        alert(r)
                    }

                    ajax.call( this, location.href, fd, callback );
                }


                document.getElementById('bttn').addEventListener( 'click', bindEvents, options );

            }, options );
        })({ passive:true, capture:false, once:false });
    </script>
</head>
<body>
<canvas id='canvas'></canvas>
<input type='button' id='bttn' value='Upload & Save Image' />
</body>
</html>
