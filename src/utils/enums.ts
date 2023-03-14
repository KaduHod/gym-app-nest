enum permission {
    ALUNO=1,
    PERSONAL=2,
    ADMIN=3
}

enum mysqlErrors {
    DUPLICATED_DATA = 'ER_DUP_ENTRY'
}

export default {
    permission,
    mysqlErrors
}