import './InfoBoard.css';
import FGBLink from '../../components/FGBLink/FGBLink';

function InfoBoard() {
  return (
      <section className = "info-board">
        <div className = "info-board__item">
          <h3 className = "title">Сайты федераций Го</h3>
          <p>
              <FGBLink href = "https://www.nihonkiin.or.jp">Международная федерация Го</FGBLink>
              <small>[Осторожно! Японский]</small>
              <small><i>(Федерация находится в Японии)</i></small>
          </p>
          <p><FGBLink href = "http://kpmc.kbaduk.or.kr">Кубок премьер министра Южной Кореи</FGBLink></p>
          <p><FGBLink href = "https://www.eurogofed.org/">Европейская федерация Го</FGBLink></p>
          <p><FGBLink href = "http://www.europeangodatabase.eu/EGD/">База данных игроков Европы</FGBLink></p>
          <p><FGBLink href = "https://pandanet-igs.com/communities/pandanet">
            Проведение командных чемпионатов Европы</FGBLink></p>
          <p><FGBLink href = "https://gofederation.ru/">Российская федерация Го</FGBLink></p>
          <p><FGBLink href = "http://go.art.pl/">Польская федерация Го</FGBLink></p>
        </div>

        <div className = "info-board__item">
          <h3 className = "title">Играть в Го онлайн</h3>
          <p>
            <FGBLink href = "https://online-go.com/">Европейский Го сервер</FGBLink>
            <small><i>(через браузер)</i></small>
          </p>
          <p>
            <FGBLink href = "https://www.gokgs.com/">Международный Го сервер КГС</FGBLink>
            <small><i>(требуется установка приложения)</i></small>
          </p>
          <p>
            <FGBLink href = "https://pandanet-igs.com/communities/gopanda2">
              Европейский Го сервер Панда игр сборных
            </FGBLink>
            <small><i>(требуется установка приложения)</i></small>
          </p>
          <p>
            <FGBLink href = "http://www.tygemgo.com/">Поиграть с корейцами</FGBLink>
            <small className = "text-danger">[Осторожно! Драчливые корейцы: сначала режут, а потом думают]</small>
            <small><i>(требуется установка приложения)</i></small>
          </p>
          <p>
            <FGBLink href = "https://www.foxwq.com/">Поиграть с китайцами</FGBLink>
            <small>[Осторожно! Китайский]</small>
            <small><i>(требуется установка приложения)</i></small>
          </p>
        </div>

        <div className = "info-board__item">
          <h3 className = "title">Группы во вконтакте</h3>
          <p>
            <FGBLink href = "https://vk.com/go_secrets">Игра Го. Секреты мастерства</FGBLink>
            <small><i>(Динерштейн Александр)</i></small>
          </p>
          <p>
            <FGBLink href = "https://vk.com/club23841735">Клуб Гo в Минске "Каменный дракон"</FGBLink>
            <small><i>(Грунковский Юрий)</i></small>
          </p>
        </div>
      </section>
  );
}

export default InfoBoard;