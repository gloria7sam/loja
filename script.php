<?php
 //Variáveis
 $nome = $_POST['name2'];
 $email = $_POST['mail2'];
 $telemovel = $_POST['telemovel'];
 $servicos = $_POST['servicos'];
 $descricao = $_POST['descricao'];
 $data_envio = date('d/m/Y');
 $hora_envio = date('H:i:s');

 //Compo E-mail
 $arquivo = "
   <html>
     <p><b>Nome: </b>$nome</p>
     <p><b>E-mail: </b>$email</p>
     <p><b>Telemóvel: </b>$telemovel</p>
     <p><b>Serviços: </b>$servicos</p>
     <p><b>Descrição: </b>$descricao</p>
     <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
   </html>
 ";
 
 //Emails para quem será enviado o formulário
 $destino = "gloriasamuel789@gmail.com";
 $assunto = "Contato pelo Site - Pergaminho Vanguarda";

 //Este sempre deverá existir para garantir a exibição correta dos caracteres
 $headers  = "MIME-Version: 1.0\n";
 $headers .= "Content-type: text/html; charset=iso-8859-1\n";
 $headers .= "From: $name2 <$mail2>";

 //Enviar
 mail($destino, $assunto, $arquivo, $headers);
 
 echo "<meta http-equiv='refresh' content='10;URL=../contato.html'>";
?>
