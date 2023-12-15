let livros = [];
const endpontDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivroDaAPI();

async function getBuscarLivroDaAPI() {
  const res = await fetch(endpontDaAPI);
  livros = await res.json();
  console.table(livros);
}
