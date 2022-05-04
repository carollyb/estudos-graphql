const arrayUsers = [
    {
        nome: "Carolly",
        ativo: true
    },
    {
        nome: "Nayara",
        ativo: false
    }
]

const userResolvers = {
    Query: {
        users: () => arrayUsers,
        primeiroUser: () => arrayUsers[0]
    }
}

module.exports = userResolvers