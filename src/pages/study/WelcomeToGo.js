import TitleLayout from '../../components/layouts/TitleLayout';

function WelcomeToGo() {

  const videos = ["2Uos29KWnBc", "8uJxzU1P71A", "weEKSi1Gwu8", "VoT4rCqqn3Q",
    "KrMS_NzKRms", "e6i3L_muzqM", "oTLapsZrtEU", "UBo4tIx3mA4"];

  return (
    <TitleLayout title="Знакомство с игрой Го">
      {
        videos.map(item =>
          <iframe
            key={item}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${item}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      }
    </TitleLayout>
  );
}

export default WelcomeToGo;