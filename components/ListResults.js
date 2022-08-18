import { Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const ListResults = ({ rows, columns, ...rest }) => {
  return (
    <Card {...rest}>
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          autoHeight
          sx={{
            color: "primary.main",
            boxShadow: 2,
          }}
        />
      </div>
    </Card>
  );
};

ListResults.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default ListResults;
