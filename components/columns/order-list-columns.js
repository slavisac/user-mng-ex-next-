// import { format } from 'date-fns';

export const orderListColumns = [
  {
    field: "orderDate",
    headerName: "Order Date",
    width: 220,
    sortable: true,
    filterable: true,
  },
  {
    field: "orderId",
    headerName: "OrderID",
    headerAlign: "center",
    width: 160,
  },
  {
    field: "number",
    headerName: "Number",
    width: 100,
    headerAlign: "center",
  },
  {
    field: "customerId",
    headerName: "Customer ID",
    width: 160,
    headerAlign: "center",
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 360,
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 260,
    headerAlign: "center",
  },
];
