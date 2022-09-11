import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import animal from "../../../../Assets/Puzzel/Animal/main.png"
import fruit from "../../../../Assets/Puzzel/Fruit/main.png"
import EnglishActivity from "./EnglishActivity";
import {useState} from "react";

const columns = [
    {
        id: 'activityName',
        label: 'Activity Name',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'image',
        label: 'Image',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'marks',
        label: 'Marks',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'highestMark',
        label: 'Highest Mark',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'moreActions',
        label: 'More Actions',
        minWidth: 100,
        align: 'center'
    },
];

function createData(id, activityName, image, marks, highestMark,) {
    return {
        id,
        activityName,
        image,
        marks,
        highestMark,
    };
}

const rows = [
    createData(1, "Fruit", fruit, "00", "00"),
    createData(2, "Animal", animal, "00", "00"),
];


export default function EnglishActivityTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    //Pop up form
    const [id, setId] = useState(0);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const toggleFormPopup = () => {
        setIsFormOpen(!isFormOpen);
    }

    const openActivityForm = (id) => (action) => {
        setId(id);
        toggleFormPopup();
    };

    return (
        <div>
            <Paper sx={{width: '100%', overflow: 'hidden'}}>
                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                if (column.label === "More Actions") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <div onClick={openActivityForm(row.id)}>
                                                                <FaIcons.FaEye className="view-more"/>
                                                            </div>
                                                        </TableCell>
                                                    );
                                                } else if (column.label === "Image") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <img width="150px" src={value}
                                                                 alt="Puzzle  Image"/>
                                                        </TableCell>
                                                    );
                                                } else {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {isFormOpen && <EnglishActivity
                id={id}
                handleClose={toggleFormPopup}
            />}
        </div>
    );
}