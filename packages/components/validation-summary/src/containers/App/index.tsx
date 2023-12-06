/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

import React from 'react';
import { 
  PluginBridgeProvider
} from '@assurance/plugin-bridge-provider';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import Validation from '../../components/ValidationView';

const App = () => {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <PluginBridgeProvider>
      <div style={{ color: 'red', fontSize: '20px' }}>Plugin Goes Here</div>
      <Validation />
      </PluginBridgeProvider>
    </Provider>
  );
};

export default App;
