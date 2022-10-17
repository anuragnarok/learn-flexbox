import './app.css';
import DisplayComponent from './Components/DisplayComponent';
import FlexDirection from './Components/FlexDirection';
import MainBox from './Components/MainBox';

function App() {
  return (
    <div className="App">
        <h1>Flex box properties </h1>
        <DisplayComponent/>
        <FlexDirection/>
        <MainBox head = {'Justify Content'} head2= {'flex-start'}  />
        <MainBox head2 = {'flex-end'}/>
        <MainBox head2 = {'center'}/>
        <MainBox head2 = {'space-between'}/>
        <MainBox head2 = {'space-around'}/>
        <MainBox head2 = {'space-evenly'}/>
        {/* <MainBox head = {'Align-items'} head2 = {'flexstart'}/>
        <MainBox head = {'Align-items'} head2 = {'flexend'}/>
        <MainBox head = {'Align-items'} head2 = {'Center'}/>
        <MainBox head = {'Align-items'} head2 = {'stretch'}/>
        <MainBox head = {'Align-items'} head2 = {'baseline'}/> */}
       </div>
  );
}

export default App;
