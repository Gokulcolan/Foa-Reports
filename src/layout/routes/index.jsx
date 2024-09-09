import UserRoutes from "./userRoutes";
import AuthRoutes from "./authRoutes";
import LandingRoutes from "./landingRoutes";

const ROLES_ROUTES = {
  0: LandingRoutes,
  1: AuthRoutes,
  2: UserRoutes,
  // 3: AdminRoutes,
};

export const getRoutes = (role) => {
  return ROLES_ROUTES[role];
};
