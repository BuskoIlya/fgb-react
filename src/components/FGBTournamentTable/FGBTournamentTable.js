import React from 'react';

const FGBTournamentTable = ({ table, title }) => {
  const columnNames = table.info.column_names.split(',');

  return (
    <table className="table table_blue">
      {title && <caption className="table__caption">{title}</caption>}
      <thead>
        <tr>
          {columnNames.map((item, index) => <th key={index + 1} className="table__cell">{item}</th>)}
        </tr>
      </thead>
      <tbody>
      {
        table.items.map((item, itemIndex) =>
          <tr key={itemIndex + 1}>
            {
              Object.keys(item).map((key, keyIndex) => {
                let className = 'table__cell';
                if (keyIndex == 1) {
                  className += ' table__cell_left';
                }
                if (typeof item[key] === 'string') {
                  if (item[key].endsWith('+')) {
                    className += ' table__cell_green';
                  }
                  if (item[key].endsWith('-')) {
                    className += ' table__cell_red';
                  }
                }
                return <td key={keyIndex + 1} className={className}>{item[key]}</td>
              })
            }
          </tr>
        )
      }
      </tbody>
    </table>
  );
}

export default FGBTournamentTable;