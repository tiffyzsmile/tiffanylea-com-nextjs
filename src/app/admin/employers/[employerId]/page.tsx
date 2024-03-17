import React from "react";
import AdminEmployer from "@/components/Admin/Employer";

type Props = {
  params: { employerId: string };
};
const AdminEmployerPage = async ({ params }: Props) => {
  return <AdminEmployer employerId={params.employerId} />;
};

export default AdminEmployerPage;
