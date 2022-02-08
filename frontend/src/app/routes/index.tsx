import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import { DashboardPage } from '../../ui/pages/Dashboard';

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path='/dashboard' element={<DashboardPage />} />
    </ReactRouterRoutes>
  );
}
