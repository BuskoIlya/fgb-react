import { LayoutTitle } from 'fgb-ui-components';

const videos = [
  "2Uos29KWnBc", "8uJxzU1P71A", "weEKSi1Gwu8", "VoT4rCqqn3Q",
  "KrMS_NzKRms", "e6i3L_muzqM", "oTLapsZrtEU", "UBo4tIx3mA4"
];

export const WelcomeToGo = () => {
  return (
    <LayoutTitle title="Знакомство с игрой Го">
      {
        videos.map(item =>
          <iframe key={item}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            height="315"
            src={`https://www.youtube.com/embed/${item}`}
            title="YouTube video player"
            width="560"
          />
        )
      }
    </LayoutTitle>
  );
};