import React from "react";
import AdminTag from "@/components/Admin/Tag";

type Props = {
  params: { tagId: string };
};
const AdminEmployerPage = async ({ params }: Props) => {
  return <AdminTag tagId={params.tagId} />;
};

export default AdminEmployerPage;
