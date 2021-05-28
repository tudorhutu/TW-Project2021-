<?php
if( $_SERVER['REQUEST_METHOD']=='POST' && isset( $_POST['image'],$_POST['filename'] ) ){

    $image=$_POST['image'];
    $filename=$_POST['filename'];

    /* edit to suit own environment */
    $savepath='F:/xampp/htdocs/ConGratZ/resources/generated_backgrounds/';

    $target=$savepath . $filename;
    $result=file_put_contents( $target, base64_decode( $image ) );

    header('HTTP/1.1 200 OK',true,200);
    header('Content-Type: text/plain');
    exit( $result ? sprintf( $target ) : sprintf( 'Unable to save %s',$filename ) );
}
?>
