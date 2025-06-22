'use client';
import { AllCommunityModule, ModuleRegistry, themeMaterial } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { colDefs } from '../constants';

ModuleRegistry.registerModules([AllCommunityModule]);

function Table({ deadlines, quickFilterText }) {
  return (
    <div>
      <AgGridReact
        animateRows={false}
        autoSizeStrategy={{
          type: 'fitGridWidth',
          defaultMinWidth: 90,
          columnLimits: [
            {
              colId: 'description',
              minWidth: 300
            }
          ]
        }}
        columnDefs={colDefs}
        defaultColDef={{
          autoHeight: true,
          suppressMovable: true,
          wrapHeaderText: true,
          wrapText: true,
        }}
        domLayout='autoHeight'
        quickFilterText={quickFilterText}
        rowData={deadlines}
        rowHeight={25}
        theme={themeMaterial}
      />
    </div>
  );
}

export default Table;
