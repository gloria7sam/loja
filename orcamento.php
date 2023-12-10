<?php

//Variáveis

$nome = $_POST['nome'];
$email = $_POST['email'];
$destino = 'pergaminho.vanguarda@gmail.com';
$assunto = 'Pedido de Orçamento';

$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset-iso-8859-1\n";
$headers .= "From: $nome <$email>";


?>