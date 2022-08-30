import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#d9d9d9",
        color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(date, activity, mark, highest) {
    return { date, activity, mark, highest};
}

const rows = [
    createData('2022-01-02', "Test", 80, 90, ),
    createData('2019-02-02', "Test", 60, 67, ),
    createData('2029-02-02', "Test", 61, 89, ),
    createData('2023-03-02', "Test", 23, 45, ),
    createData('2028-04-02', "Test", 12, 35, ),
    createData('2022-07-02', "Test", 18, 23, )
];

export default function EnglishTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Date</StyledTableCell>
                        <StyledTableCell align="center">Activity Name</StyledTableCell>
                        <StyledTableCell align="center">Marks</StyledTableCell>
                        <StyledTableCell align="center">Highest Markets</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.rows}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.activity}</StyledTableCell>
                            <StyledTableCell align="center">{row.mark}</StyledTableCell>
                            <StyledTableCell align="center">{row.highest}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
