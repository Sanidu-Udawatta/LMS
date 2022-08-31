import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: 15,
        backgroundColor: "#d9d9d9",
        color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));


const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(date, notification) {
    return {date, notification};
}

const rows = [
    createData('2022-01-02', "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createData('2019-02-02', "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createData('2029-02-02', "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createData('2023-03-02', "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createData('2028-04-02', "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createData('2022-07-02', "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
];

export default function NotificationBody() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow className="custom-tab">
                        <StyledTableCell align="center">Date</StyledTableCell>

                        <StyledTableCell align="center" >Notification</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.rows}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.notification}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
