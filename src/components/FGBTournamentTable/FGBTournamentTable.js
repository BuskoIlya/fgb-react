import React from 'react';
import Country from '../Country';

const FGBTournamentTable = ({ table, title }) => {

  const columnNames = table.info.column_names.split(',');
  const flagPath = process.env.REACT_APP_IMG_FLAG_MINI_PATH;

  return (
    <table className="table">
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
                if (typeof item[key] === 'string'
                  && item[key].length > 3 && item[key].includes(' ')) {
                  className += ' table__cell_left';
                }
                if (typeof item[key] === 'string') {
                  if (item[key].endsWith('+') || item[key].startsWith('+')) {
                    className += ' table__cell_green';
                  }
                  if (item[key].endsWith('-') || item[key].startsWith('-')) {
                    className += ' table__cell_red';
                  }
                }
                if (typeof item[key] === 'object') {
                  return (
                    <td key={keyIndex + 1} className="table__cell">
                      <Country img={flagPath + item[key].flag_img} imgTitle={item[key].name} />
                    </td>
                  );
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