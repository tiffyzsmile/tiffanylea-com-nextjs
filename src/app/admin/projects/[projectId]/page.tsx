import React from "react";
import AdminProject from "@/components/Admin/Project";

type Props = {
  params: { projectId: string };
};
const AdminProjectsPage = async ({ params }: Props) => {
  return <AdminProject projectId={params.projectId} />;
};

export default AdminProjectsPage;
