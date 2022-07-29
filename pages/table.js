import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },

}));

const ColoredTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: "#60A5FA",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function CustomizedTables() {
    const header = ['row1', 'row2', 'row3']
    const data = [['rl11', 'rl12', 'rl13'], ['rl21', 'rl22', 'rl23'], ['r31', 'rl32', 'rl33']]

    // const 
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">{header[0]}</StyledTableCell>
                        <StyledTableCell align="center">{header[1]}</StyledTableCell>
                        <StyledTableCell align="center">{header[2]}</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        .map((row) => {

                            const WhichTableCell = row[2] === 'rl23' ? ColoredTableCell : StyledTableCell
                            return (
                                <StyledTableRow key={row}>
                                    <WhichTableCell align="center">{row[0]}</WhichTableCell>
                                    <WhichTableCell align="center">{row[1]}</WhichTableCell>
                                    <WhichTableCell align="center">{row[2]}</WhichTableCell>
                                </StyledTableRow>
                            )
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}