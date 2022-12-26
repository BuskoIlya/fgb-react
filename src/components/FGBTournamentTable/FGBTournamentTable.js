import React from 'react';

const data = {
  roundsCount: 3,
  coeffNames: ["SOS", "SDOS"],
  items: [
    {
      player: "Бусько Илья Владимирович", city: "Витебск", rank: "2 дан", score: "2234",
      rounds: ["1+", "2+", "3+"],
      total: "2",
      coeffs: ["12", "7"]
    },
    {
      player: "Грунковский Юрий Анатольевич", city: "Минск", rank: "2 кю", score: "1900",
      rounds: ["1+", "2+", "3+"],
      total: "1",
      coeffs: ["12", "7"]
    }
  ]
}

const FGBTournamentTable = ({ table }) => {
  return (
    <table className="table table_blue">
      <thead>
        <tr>
          <th className="table__cell">№</th>
          <th className="table__cell">ФИО</th>
          <th className="table__cell">Город</th>
          <th className="table__cell">Разряд</th>
          <th className="table__cell">Рейтинг</th>
          {
            [...Array(table.roundsCount)].map((item, index) =>
              <th key={index} className="table__cell">{index + 1}</th>
            )
          }
          <th className="table__cell">Очки</th>
          {table.coeffNames.map(item => <th key={item} className="table__cell">{item}</th>)}
        </tr>
      </thead>
      <tbody>
      {
        table.items.map((item, index) =>
          <tr key = {index + 1}>
            <td className = "table__cell">{index + 1}</td>
            <td className = "table__cell table__cell_left">{item.player}</td>
            <td className = "table__cell">{item.city}</td>
            <td className = "table__cell">{item.rank}</td>
            <td className = "table__cell">{item.score}</td>
            {
              item.rounds.map((round, roundIndex) =>
                <td key={`${index + 1}-${roundIndex + 1}`} className="table__cell">{round}</td>
              )
            }
            <td className="table__cell">Очки</td>
            {item.coeffs.map((coeff, coeffIndex) => <td key={`${index + 1}-${coeffIndex + 1}`} className="table__cell">{coeff}</td>)}
          </tr>
        )
      }
      </tbody>
    </table>
  );
}

export default FGBTournamentTable;