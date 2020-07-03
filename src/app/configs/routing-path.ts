export class RoutingPath {
    public static appRouting = {
        validateToken: {
            pages: {
                validate: {
                    path: ':idProcess/:identificationNumber/:token',
                    breadcrumb: 'Validación Token'
                },
                error: {
                    path: 'error',
                    breadcrumb: 'Error al validar Token'
                }
            }
        },
        pages: {
            modules: {
                transactions: {
                    path: 'transactions/:idTx/:entityId/:userStatus',
                    breadcrumb: 'Inicio',
                    submodules: {
                        
                    }
                },
                profile: {
                    path: 'profile',
                    breadcrumb: 'Perfil'
                }
            }
        }
    }
}