import FGBTournamentTable from '../components/FGBTournamentTable/FGBTournamentTable';



function Photos() {

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

  return (
    <FGBTournamentTable table={data}/>
  );
}

export default Photos;