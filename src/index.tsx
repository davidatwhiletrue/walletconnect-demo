import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CsprClickInitOptions } from '@make-software/csprclick-core-client';
import { ClickProvider } from '@make-software/csprclick-ui';
import { CONTENT_MODE } from '@make-software/csprclick-core-types';
import App from './App';

const clickOptions: CsprClickInitOptions = {
	appName: 'CSPR.app',
	contentMode: CONTENT_MODE.IFRAME,
	providers: ['casper-wallet', 'ledger', 'walletconnect', 'casperdash', 'metamask-snap', 'torus-wallet', 'casper-signer'],
	appId: 'walletconnect-demo',    
	csprclickHost: 'https://cspr-click-accounts.dev.make.services',
    walletConnect: {
        logger: 'debug',
        relayUrl: 'wss://relay.walletconnect.com',
        projectId: '6cdf3095d26e511f0126b484e219cc4d',
    }
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ClickProvider options={clickOptions}>
			<App />
		</ClickProvider>
	</React.StrictMode>
);
