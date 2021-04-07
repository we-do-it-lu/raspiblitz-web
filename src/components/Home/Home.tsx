import React, { Component } from 'react';
import DashboardBox from '../Shared/DashboardBox/DashboardBox';
import StatusBox from './StatusBox/StatusBox';
import { ReactComponent as BitcoinLogo } from '../../assets/bitcoin-circle.svg';
import { ReactComponent as LightningLogo } from '../../assets/lightning.svg';

export class Home extends Component {
  sendBtcHandler = () => {
    console.log('sendBtcHandler');
  };

  receiveBtcHandler = () => {
    console.log('receiveBtcHandler');
  };

  sendLightningHandler = () => {
    console.log('sendLightningHandler');
  };

  receiveLightningHandler = () => {
    console.log('receiveLightningHandler');
  };

  render(): JSX.Element {
    return (
      <React.Fragment>
        <div className='content-container w-full bg-gray-300 dark:bg-gray-600 dark:text-white transition-colors'>
          <div className='py-8'>
            <div className='flex flex-wrap items-stretch justify-around'>
              <StatusBox status='online'>Bitcoin</StatusBox>
              <StatusBox>Lightning</StatusBox>
              <StatusBox>Tor</StatusBox>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap lg:flex-nowrap w-full items-start'>
              <DashboardBox
                name='Bitcoin Core'
                icon={<BitcoinLogo className='w-10 h-10' />}
                transactionBox
                send={this.sendBtcHandler}
                receive={this.receiveBtcHandler}
              ></DashboardBox>
              <DashboardBox
                name='Lightning'
                icon={<LightningLogo className='w-10 h-10' />}
                transactionBox
                send={this.sendLightningHandler}
                receive={this.receiveLightningHandler}
              ></DashboardBox>
              <DashboardBox name='Services'></DashboardBox>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
