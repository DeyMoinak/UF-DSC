//Components
import Header from './Header';
import Introduction from './Introduction';
import Opportunities from './Opportunities';
import Technologies from './Technologies';
import Officers from './Officers';
import Membership from './Membership';

const HomePage = () => {
    return (
        <div class="App">
            <Header/>
            <Introduction/>
            <Opportunities/>
            <Technologies/>
            <Officers/>
            <Membership/>
        </div>
    )
}

export default HomePage;