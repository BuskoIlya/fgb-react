import { LinkExternal as LE } from 'fgb-ui-components';
import './InfoBoard.css';

function InfoBoard() {
  return (
    <div className="info-board">
      <div className="info-board__item">
        <h3 className="title">Сайты федераций Го</h3>
        <p>
          <LE href="https://www.nihonkiin.or.jp">Международная федерация Го</LE>
          <small>[Осторожно! Японский]</small>
          <small><i>(Федерация находится в Японии)</i></small>
        </p>
        <p><LE href="http://kpmc.kbaduk.or.kr">Кубок премьер министра Южной Кореи</LE></p>
        <p><LE href="https://www.eurogofed.org/">Европейская федерация Го</LE></p>
        <p><LE href="http://www.europeangodatabase.eu/EGD/">База данных игроков Европы</LE></p>
        <p><LE href="https://pandanet-igs.com/communities/pandanet">
          Проведение командных чемпионатов Европы</LE></p>
        <p><LE href="https://gofederation.ru/">Российская федерация Го</LE></p>
        <p><LE href="http://go.art.pl/">Польская федерация Го</LE></p>
      </div>

      <div className="info-board__item">
        <h3 className="title">Играть в Го онлайн</h3>
        <p>
          <LE href="https://online-go.com/">Европейский Го сервер</LE>
          <small><i>(через браузер)</i></small>
        </p>
        <p>
          <LE href="https://www.gokgs.com/">Международный Го сервер КГС</LE>
          <small><i>(требуется установка приложения)</i></small>
        </p>
        <p>
          <LE href="https://pandanet-igs.com/communities/gopanda2">
            Европейский Го сервер Панда игр сборных
          </LE>
          <small><i>(требуется установка приложения)</i></small>
        </p>
        <p>
          <LE href="http://www.tygemgo.com/">Поиграть с корейцами</LE>
          <small className="text-danger">
            [Осторожно! Драчливые корейцы: сначала режут, а потом думают]
          </small>
          <small><i>(требуется установка приложения)</i></small>
        </p>
        <p>
          <LE href="https://www.foxwq.com/">Поиграть с китайцами</LE>
          <small>[Осторожно! Китайский]</small>
          <small><i>(требуется установка приложения)</i></small>
        </p>
      </div>

      <div className="info-board__item">
        <h3 className="title">Группы во вконтакте</h3>
        <p>
          <LE href="https://vk.com/go_secrets">Игра Го. Секреты мастерства</LE>
          <small><i>(Динерштейн Александр)</i></small>
        </p>
        <p>
          <LE href="https://vk.com/club23841735">Клуб Гo в Минске "Каменный дракон"</LE>
          <small><i>(Грунковский Юрий)</i></small>
        </p>
      </div>
    </div>
  );
}

export default InfoBoard;