import React from 'react';
// components
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminFoodModal from './AdminFoodModal';

const AdminDashboard = () => (
    <section>
        <AdminHeader />
        <AdminActionBtns />
        <AdminCategoryModal />
        <AdminFoodModal />
    </section>
);

export default AdminDashboard;