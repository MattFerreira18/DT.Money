import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import { DashboardPage } from '../../ui/pages/Dashboard';
import { SignUp } from '../../ui/pages/SignUp';
import { SignIn } from '../../ui/pages/SignIn';

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />

      <Route path='/dashboard' element={<DashboardPage />} />
    </ReactRouterRoutes>
  );
}
