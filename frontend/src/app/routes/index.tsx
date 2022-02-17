import { 
  Route, 
  Routes as ReactRouterRoutes, 
  useLocation,
  Navigate, 
} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { DashboardPage } from '../../ui/pages/Dashboard';
import { SignUp } from '../../ui/pages/SignUp';
import { SignIn } from '../../ui/pages/SignIn';
import { Profile } from '../../ui/pages/Profile';

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path='/' element={<Navigate to="/signin" />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />

      <Route path='/dashboard' element={<RequireAuth component={DashboardPage} />} />
      <Route path='/me' element={<RequireAuth component={Profile} />} />

    </ReactRouterRoutes>
  );
}

export function RequireAuth({ component: ReactComponent }: { component: React.ComponentType }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate
      to="/signin"
      state={{ from: location }}
      replace
    />
  }

  return <ReactComponent />;
}
