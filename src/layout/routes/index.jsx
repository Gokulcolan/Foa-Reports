import AdminRoutes from "./adminRoutes";
import UserRoutes from "./userRoutes";
import AuthRoutes from "./authRoutes";

const ROLES_ROUTES = {
  0: AuthRoutes,
  1: UserRoutes,
  2: AdminRoutes,
};

export const getRoutes = (role) => {
  return ROLES_ROUTES[role];
};
