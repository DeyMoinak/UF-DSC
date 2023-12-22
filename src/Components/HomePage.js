//Components
import Header from './Header';
import Introduction from './Introduction';
import Opportunities from './Opportunities';
import Technologies from './Technologies';
import Officers from './Officers';
import Membership from './Membership';
import Challenge from './SolutionChallenge';
import Questions from './Faqs';

const HomePage = () => {
    return (
        <div class="App">
            <Header/>
            <Introduction/>
            <Opportunities/>
            <Challenge/>
            <Technologies/>
            <Officers/>
            <Questions/>
            <Membership/>
        </div>
    )
}

export default HomePage;