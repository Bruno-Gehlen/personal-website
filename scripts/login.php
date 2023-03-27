<?php
// Obtém os valores enviados pelo formulário
$username = $_POST['username'];
$password = $_POST['password'];

// Conecta ao banco de dados MySQL
$mysqli = new mysqli('localhost', 'usuario', 'senha', 'nome_do_banco_de_dados');

// Verifica se a conexão foi bem-sucedida
if ($mysqli->connect_error) {
  die('Erro de conexão: ' . $mysqli->connect_error);
}

// Prepara a consulta SQL para buscar o usuário e a senha no banco de dados
$sql = "SELECT * FROM usuarios WHERE username = '$username' AND password = '$password'";

// Executa a consulta SQL e obtém o resultado
$resultado = $mysqli->query($sql);

// Verifica se o usuário e a senha são válidos
if ($resultado->num_rows == 1) {
  // Inicia uma sessão e redireciona para a página protegida
  session_start();
  $_SESSION['username'] = $username;
  header('Location: pagina_protegida.php');
  exit;
} else {
  // Exibe uma mensagem de erro e volta para a página de login
  echo 'Nome de usuário ou senha incorretos.';
}
?>
