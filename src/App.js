import logo from './logo.svg';
import './App.css';
import CardStacks from './components/CardStacks';
import StarLogo from './images/star.png';
import CoinLogo from './images/coins.png';
import LayerLogo from './images/layer.png';
import ShieldLogo from './images/shield.png';

const CardDataList = [
  {
    title: 'FEED Staking',
    topRightText: 'Shares of Platforms',
    topRightNumber: '0.57%',
    dataTitle: 'Total Investments',
    dataNumber:'$ 3,336.56',
    icon : ShieldLogo,
  },
  {
    title: 'FEED Farming',
    topRightText: 'Pool Shares',
    topRightNumber: '3.43%',
    dataTitle: 'Total Investments',
    dataNumber:'$ 3,336.56',
    icon: LayerLogo,
  },
  {
    title: 'Investments',
    topRightText: 'Average APY',
    topRightNumber: '15.43%',
    dataTitle: 'Total Investments',
    dataNumber:'$ 3,336.56',
    icon : CoinLogo,
  },
  {
    title: 'Account Summary',
    topRightText: 'Daily Profit',
    topRightNumber: '$ 16.75',
    dataTitle: 'Total Investments',
    dataNumber:'$ 3,336.56',
    icon : StarLogo,
  },
]

function App() {
  return (
    <div className="App">
      <CardStacks
      data={CardDataList}
      />
    </div>
  );
}

export default App;
