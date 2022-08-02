import { Avatar, Box, Card, Checkbox, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getInitials } from "../../utility/get-initials";
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';



export const UserListResults = ({ users, ...rest }) => {


    const columns = [
        {
            field: 'name',
            headerName: '',
            width: 70,
            sortable: false,
            filterable: false,
            renderCell: (params) => {
                return (
                    <Avatar
                        src={params.row.avatarUrl}
                        sx={{ mr: 2 }}>
                        {getInitials(params.row.firstname + ' ' + params.row.lastname)}
                    </Avatar>
                );
            }
        },
        {
            field: 'username',
            headerName: 'Username',
            headerAlign: 'center',
            width: 160
        },
        {
            field: 'firstname',
            headerName: 'First name',
            width: 160,
            headerAlign: 'center',
        },
        {
            field: 'lastname',
            headerName: 'Last name',
            width: 160,
            headerAlign: 'center',
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 260,
            headerAlign: 'center',
        },
        {
            field: 'userRole',
            headerName: 'Role',
            width: 160,
            headerAlign: 'center',
        },
        {
            field: 'location',
            headerName: 'Location',
            sortable: false,
            width: 380,
            headerAlign: 'center',
            valueGetter: (params) => {
                let street = params.row.street ? params.row.street + ',' : "";
                let city = params.row.city ? params.row.city + ',' : "";
                return `${street} ${city} ${params.row.country}`;
            },
        },
        {
            field: 'active',
            headerName: 'Status',
            width: 100,
            headerAlign: 'center',
            valueGetter: (params) => params.row.active == 1 ? "Active" : "Inactive",
        },


    ];


    return (
        <Card {...rest}>
            <div style={{ width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    autoHeight
                    sx={{
                        color: 'primary.main',
                        boxShadow: 2,
                    }}
                />
            </div>
        </Card>
    )
};

UserListResults.propTypes = {
    users: PropTypes.array.isRequired
};