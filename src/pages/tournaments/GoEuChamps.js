import GoEuCommand from './GoEuCommand';
import GoEuPersonal from './GoEuPersonal';
import MainTitleLayout from '../../components/blocks/MainTitleLayout';

import './GoEuChamps.css';
import TabLayout from '../../components/blocks/TabLayout';

function GoEuChamps() {
  return (
      <MainTitleLayout title = "Чемпионаты Европы">
        <TabLayout tab1Title = "Личный" tab1 = { <GoEuPersonal/> }
          tab2Title = "Командный" tab2 = { <GoEuCommand/> }/>
      </MainTitleLayout>
  );
}

export default GoEuChamps;