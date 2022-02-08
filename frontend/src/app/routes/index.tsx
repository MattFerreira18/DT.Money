import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import { DashboardPage } from '../../ui/pages/Dashboard';
import { SignUp } from '../../ui/pages/SignUp';

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path='/signup' element={<SignUp />} />

      <Route path='/dashboard' element={<DashboardPage />} />
    </ReactRouterRoutes>
  );
}
