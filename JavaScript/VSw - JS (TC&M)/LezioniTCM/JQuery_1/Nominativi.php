<?php
$cg = $_GET['cg'];
$no = $_GET['no'];

$size=7;
$cognomi[0]="Rossi"; $nomi[0] = "Paolo";
$cognomi[1]="Binahci"; $nomi[1] = "Paolo";
$cognomi[2]="Verdi"; $nomi[2] = "Paolino";
$cognomi[3]="Rossi"; $nomi[3] = "Mario";
$cognomi[4]="Rossini"; $nomi[4] = "Paolo";
$cognomi[5]="Verdone"; $nomi[5] = "Carlo";
$cognomi[6]="Cavallone"; $nomi[6] = "Matteo";
$count=0;
?>
{"list": [
<?php
$i=0 ;
while($i < $size)
{
  $ok=0;  
  if( $cg=="" && $no=="") $ok=1;
  if( $cg!="" && $no=="" &&  $cg==$cognomi[$i]) $ok=1;
  if( $cg=="" && $no!="" &&  $no==$nomi[$i]) $ok=1;
  if( $cg!="" && $no!="" &&  $cg==$cognomi[$i] && $no==$nomi[$i]) $ok=1;
  if($ok==1)
   {
      if($count>0)
         echo ",";
      echo '{"cognome": "' . $cognomi[$i] . '", "nome": "' . $nomi[$i] . '"}';
      $count++;
   }
   $i++;
}
?>], "size": <?php echo $count; ?>}
