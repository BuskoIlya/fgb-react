import React from 'react';
import { TDCountry } from '../TDCountry';

export const TournamentTable = ({ table, title }) => {
  const columns = table.info.columnNames.split(',');
  return (
    <table className="table">
      {title && <caption className="table__caption">{title}</caption>}
      <thead>
        <tr>
          {columns.map((x, i) => <th key={i + 1} className="table__cell">{x}</th>)}
        </tr>
      </thead>
      <tbody>
      {
        table.items.map((x, i) =>
          <tr key={i + 1}>
            {
              Object.keys(x).map((key, keyIndex) => {
                let className = 'table__cell';
                if (typeof x[key] === 'string'
                  && x[key].length > 3 && x[key].includes(' ')) {
                  className += ' table__cell_left';
                }
                if (typeof x[key] === 'string') {
                  if (x[key].endsWith('+') || x[key].startsWith('+')) {
                    className += ' table__cell_green';
                  }
                  if (x[key].endsWith('-') || x[key].startsWith('-')) {
                    className += ' table__cell_red';
                  }
                }
                if (typeof x[key] === 'object') {
                  return (
                    <TDCountry key={keyIndex + 1}
                      label={columns[keyIndex]}
                      img={x[key].flagImg}
                      tooltip={x[key].name}
                    />
                  );
                }
                return (
                  <td data-label={columns[keyIndex]} key={keyIndex + 1} className={className}>
                    {x[key]}
                  </td>
                );
              })
            }
          </tr>
        )
      }
      </tbody>
    </table>
  );
};