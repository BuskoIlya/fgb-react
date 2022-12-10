import Card from "../components/Card";

import "./Home.css";

function Home() {
  return (
      <section className = "home">
          <Card key = { '2022-10-12' }
                title = { 'Турнир' } refname = { 'Ссылка' }
                date = { '2022-10-12' } address = { 'Адрес' } author = { 'Автор' }/>
      </section>
  );
}

export default Home;