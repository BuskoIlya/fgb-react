import './InfoBoard.css';

function InfoBoard() {
  return (
      <section className = "info-board">
        <div className = "info-board__item">
          <h3 className = "title">Сайты федераций Го</h3>
          <p>
              <a href = "https://www.nihonkiin.or.jp" target = "_blank">Международная федерация Го</a>
              <small>[Осторожно! Японский]</small>
              <small><i>(Федерация находится в Японии)</i></small>
          </p>
          <p><a href = "http://kpmc.kbaduk.or.kr" target = "_blank">Кубок премьер министра Южной Кореи</a></p>
          <p><a href = "https://www.eurogofed.org/" target = "_blank">Европейская федерация Го</a></p>
          <p><a href = "http://www.europeangodatabase.eu/EGD/" target = "_blank">База данных игроков Европы</a></p>
          <p><a href = "https://pandanet-igs.com/communities/pandanet" target = "_blank">
            Проведение командных чемпионатов Европы</a></p>
          <p><a href = "https://gofederation.ru/" target = "_blank">Российская федерация Го</a></p>
          <p><a href = "http://go.art.pl/" target = "_blank">Польская федерация Го</a></p>
        </div>

        <div className = "info-board__item">
          <h3 className = "title">Играть в Го онлайн</h3>
          <p>
            <a href = "https://online-go.com/" target = "_blank">Европейский Го сервер</a>
            <small><i>(через браузер)</i></small>
          </p>
          <p>
            <a href = "https://www.gokgs.com/" target = "_blank">Международный Го сервер КГС</a>
            <small><i>(требуется установка приложения)</i></small>
          </p>
          <p>
            <a href = "https://pandanet-igs.com/communities/gopanda2" target = "_blank">
              Европейский Го сервер Панда игр сборных
            </a>
            <small><i>(требуется установка приложения)</i></small>
          </p>
          <p>
            <a href = "http://www.tygemgo.com/" target = "_blank">Поиграть с корейцами</a>
            <small className = "text-danger">[Осторожно! Драчливые корейцы: сначала режут, а потом думают]</small>
            <small><i>(требуется установка приложения)</i></small>
          </p>
          <p>
            <a href = "https://www.foxwq.com/" target = "_blank">Поиграть с китайцами</a>
            <small>[Осторожно! Китайский]</small>
            <small><i>(требуется установка приложения)</i></small>
          </p>
        </div>

        <div className = "info-board__item">
          <h3 className = "title">Группы во вконтакте</h3>
          <p>
            <a href = "https://vk.com/go_secrets" target = "_blank">Игра Го. Секреты мастерства</a>
            <small><i>(Динерштейн Александр)</i></small>
          </p>
          <p>
            <a href = "https://vk.com/club23841735" target = "_blank">Клуб Гo в Минске "Каменный дракон"</a>
            <small><i>(Грунковский Юрий)</i></small>
          </p>
        </div>
      </section>
  );
}

export default InfoBoard;