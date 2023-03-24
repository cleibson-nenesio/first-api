const { isUtf8 } = require("buffer");
const fs = require("fs");
const path = require("path");

// Criar uma pasta

// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }

//   console.log("Pasta criada meu nobre");
// });

// Criar um arquivo

// fs.writeFile(
//   path.join(__dirname, "/test", "test.html"),
//   "<html><body><h1>Hello world</h1></body></html>",
//   (err) => {
//     if (err) {
//       return console.log("erro: ", err);
//     }

//     console.log("Arquivo criado com sucesso!");
//   }
// );

// Criar pasta com arquivo dentro

// fs.mkdir(path.join(__dirname, "/html"), (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("Pasta criada com sucesso!");

//   fs.writeFile(
//     path.join(__dirname, "/html", "teste.html"),
//     "<html><body><h1>Hello world!</h1></body></html>",
//     (err) => {
//       if (err) {
//         return console.log(err);
//       }

//       console.log("Arquivo HTML Criado com sucesso!");
//     }
//   );
// });

// Adicionar a um arquivo

// fs.appendFile(
//   path.join(__dirname, "/html", "teste.html"),
//   "Fala meu nobre",
//   (err) => {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Texto adicionado");
//   }
// );

// Ler arquivo
fs.readFile(
  path.join(__dirname, "/html", "teste.html"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data);
  }
);
