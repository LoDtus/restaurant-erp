// src/routes/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { appRoutes } from './route-config';
import { RequireAuth } from '@/components/access/RequireAuth';
import { flattenRoutes } from './utils'; // hàm helper flatten để check quyền

function buildRouterRoutes(routes: RouteConfig[]) {
    return routes.map((route) => {
        const element = route.element ? <route.element /> : undefined;

        let wrappedElement = element;

        if (route.requiredPermissions?.length) {
            wrappedElement = (
                <RequireAuth
                    requiredPermissions={route.requiredPermissions}
                    redirectTo={route.redirectIfUnauthorized ?? '/'}
                >
                    {element}
                </RequireAuth>
            );
        }

        if (route.layout) {
            wrappedElement = <route.layout>{wrappedElement}</route.layout>;
        }

        return {
            path: route.path,
            index: route.index,
            element: wrappedElement,
            children: route.children ? buildRouterRoutes(route.children) : undefined,
        };
    });
}

export const router = createBrowserRouter(buildRouterRoutes(appRoutes));