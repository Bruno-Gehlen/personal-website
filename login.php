<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificação das informações de login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST['username'];
  $password = $_POST['password'];
  $sql = "SELECT id FROM usuarios WHERE username = '$username' and password = '$password'";
  $result = mysqli_query($conn, $sql);
  $count = mysqli_num_rows($result);
  
  // Se as informações estiverem corretas, definir um cookie de autenticação
  if ($count == 1) {
    session_start();
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    header("location: pagina_restrita.php");
  } else {
    $error = "Nome de usuário ou senha inválidos.";
  }
}
?>

// Nesse exemplo, temos um script PHP que recebe as informações de login enviadas pelo formulário HTML. O script verifica se o nome de usuário e a senha estão corretos em um banco de dados MySQL e, se estiverem, define um cookie de autenticação e redireciona o usuário para a página restrita.