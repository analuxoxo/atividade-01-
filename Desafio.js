console.log("======================= Oásis do Sabor =========================")

console.log("           Bem vindos à Sorverteria Oásis do Sabor!             ")

///////// *Dados cadastrais dos clientes* //////////

// *Lista de clientes e pedidos
let clientes = [];
let pedidos = [];

// Função para cadastrar cliente
function cadastrarCliente(cpf, nome) {
    let existe = false;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].cpf === cpf) {
            existe = true;
            break;
        }
    }

    if (existe) {
        console.log("!Cliente já cadastrado.");
    } else {
        clientes.push({ cpf: cpf, nome: nome });
        console.log(`!Cliente ${nome} cadastrado com sucesso.`);
    }
}

// Função para fazer pedido
function fazerPedido(cpfCliente, sabor, tipo) {
    let cliente = null;

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].cpf === cpfCliente) {
            cliente = clientes[i];
            break;
        }
    }

    if (!cliente) {
        console.log("!Cliente não encontrado. Faça o cadastro primeiro.");
    } else {
        if (tipo === "casquinha" || tipo === "pote") {
            pedidos.push({
                nome: cliente.nome,
                cpf: cliente.cpf,
                sabor: sabor,
                tipo: tipo
            });
            console.log(`!Pedido registrado: ${cliente.nome} escolheu ${sabor} na ${tipo}.`);
        } else {
            console.log("!Tipo inválido. Escolha 'casquinha' ou 'pote'.");
        }
    }
}

// Função para mostrar clientes
function mostrarClientes() {
    if (clientes.length === 0) {
        console.log("!Nenhum cliente cadastrado.");
    } else {
        console.log("🧊 Clientes:");
        for (let cliente of clientes) {
            console.log(`- ${cliente.nome} (CPF: ${cliente.cpf})`);
        }
    }
}

// Função para mostrar pedidos
function mostrarPedidos() {
    if (pedidos.length === 0) {
        console.log("!Nenhum pedido realizado.");
    } else {
        console.log("📋 Pedidos:");
        for (let p of pedidos) {
            console.log(`- ${p.nome} pediu ${p.sabor} na ${p.tipo}.`);
        }
    }
}