export class RoutingPath {
    public static appRouting = {
        transaction: {
            pages: {
                validate: {
                    path: ':idTx/:userState/:idEntity',
                    breadcrumb: 'Inicio de sesión'
                },
                error: {
                    path: 'error',
                    breadcrumb: 'Error al validar Token'
                }
            }
        },
        pages: {
            modules: {
                dashboard: {
                    path: 'dashboard',
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