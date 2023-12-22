//Components
import Header from './Header';
import Introduction from './Introduction';
import Opportunities from './Opportunities';
import Technologies from './Technologies';
import Membership from './Membership';

const HomePage = () => {
    return (
        <div class="App">
            <Header/>
            <Introduction/>
            <Opportunities/>
            <Technologies/>
            <Membership/>
        </div>
    )
}

export default HomePage;