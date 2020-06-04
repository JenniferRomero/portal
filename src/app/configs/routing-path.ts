export class RoutingPath {
    public static appRouting = {
        auth: {
            pages: {
                login: {
                    path: 'login',
                    breadcrumb: 'Inicio de sesión'
                },
                register: {
                    path: 'register',
                    breadcrumb: 'Registrarse'
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