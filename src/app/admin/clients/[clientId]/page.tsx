import React from "react";
import AdminClient from "@/components/Admin/Client";

type Props = {
  params: { clientId: string };
};
const AdminClientPage = async ({ params }: Props) => {
  return <AdminClient clientId={params.clientId} />;
};

export default AdminClientPage;
