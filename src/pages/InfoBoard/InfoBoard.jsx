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
        infoBoardData.map((section, sectionIndex) =>
          <div key={sectionIndex + 1} className={css.section}>
            <h3 className={css.section__title}>{section.title}</h3>
            {
              section.data.map((item, index) =>
                <InfoBoardItem key={index + 1}
                  href={item.href}
                  joke={item.joke}
                  important={item.important}
                  text={item.text}
                />
              )
            }
          </div>
        )
      }
    </>
  );
};