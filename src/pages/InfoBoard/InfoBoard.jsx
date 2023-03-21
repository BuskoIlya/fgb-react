import { InfoBoardItem } from './InfoBoardItem';
import css from './InfoBoard.module.css';

import { federationWebsites, gameGoServers, vkGroups } from './getInfoBoardData';
const infoBoardData = [
  { title: 'Сайты федераций Го', data: federationWebsites },
  { title: 'Играть в Го онлайн', data: gameGoServers },
  { title: 'Группы во вконтакте', data: vkGroups }
];

export const InfoBoard = () => {
  return (
    <>
      {
        infoBoardData.map(section =>
          <div key={section.title} className={css.section}>
            <h3 className={css.section__title}>{section.title}</h3>
            {
              section.data.map(x =>
                <InfoBoardItem key={x.text}
                  href={x.href}
                  joke={x.joke}
                  important={x.important}
                  text={x.text}
                />
              )
            }
          </div>
        )
      }
    </>
  );
};