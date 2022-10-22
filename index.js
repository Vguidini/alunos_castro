(async () => {
    const alunos = require("./models/alunos");

    const new_aluno = await alunos.create(
        {
            RA: "000052011",
            nome: "Vinícius Guidini",
            nascimento: "2006-03-014",
            curso: "Mecatrônica",
        }
    );

})();