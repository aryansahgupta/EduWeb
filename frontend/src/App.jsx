import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { AssetsListPage } from './pages/AssetsListPage';
import { AssetFormPage } from './pages/AssetFormPage';
import { AssignmentPage } from './pages/AssignmentPage';
import { EmployeesPage } from './pages/EmployeesPage';
import { MaintenancePage } from './pages/MaintenancePage';
import { DepreciationPage } from './pages/DepreciationPage';
import { RequestsPage } from './pages/RequestsPage';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* public route */}
        <Route path="/login" element={<LoginPage />} />

        {/* authenticated routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/assets" element={<AssetsListPage />} />
          <Route path="/assets/new" element={<AssetFormPage />} />
          <Route path="/assets/edit/:id" element={<AssetFormPage />} />
          <Route path="/assignments" element={<AssignmentPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/depreciation" element={<DepreciationPage />} />
          <Route path="/requests" element={<RequestsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
