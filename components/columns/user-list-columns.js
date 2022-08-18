import { Avatar } from "@mui/material";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";

import { getInitials } from "../../utility/get-initials";
// import { format } from 'date-fns';

export const userListColumns = [
  {
    field: "name",
    headerName: "",
    width: 70,
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return (
        <Avatar src={params.row.avatarUrl} sx={{ mr: 2 }}>
          {getInitials(params.row.firstname + " " + params.row.lastname)}
        </Avatar>
      );
    },
  },
  {
    field: "username",
    headerName: "Username",
    headerAlign: "center",
    width: 160,
  },
  {
    field: "firstname",
    headerName: "First name",
    width: 160,
    headerAlign: "center",
  },
  {
    field: "lastname",
    headerName: "Last name",
    width: 160,
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 260,
    headerAlign: "center",
  },
  {
    field: "userRole",
    headerName: "Role",
    width: 160,
    headerAlign: "center",
    valueGetter: (params) => params.row.userRole.label,
  },
  {
    field: "location",
    headerName: "Location",
    sortable: false,
    width: 380,
    headerAlign: "center",
    valueGetter: (params) => {
      let street = params.row.street ? params.row.street + "," : "";
      let city = params.row.city ? params.row.city + "," : "";
      return `${street} ${city} ${params.row.country}`;
    },
  },
  {
    field: "active",
    headerName: "Status",
    width: 100,
    headerAlign: "center",
    valueGetter: (params) => (params.row.active == 1 ? "Active" : "Inactive"),
  },
  {
    field: "id",
    headerName: "Edit",
    width: 60,
    renderCell: (params) => (
      <Link href={`/admin/users/${params.row.id}`} key={params.row.id}>
        <a>
          <EditIcon />
        </a>
      </Link>
    ),
  },
];
