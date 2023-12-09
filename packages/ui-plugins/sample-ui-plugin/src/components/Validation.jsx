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
import { ValidationItem } from '@assurance/validation-summary';

//directly add validatoin items to the validation view
const namespaces = ['aep-consent-configuration', 'aep-consent-registered', 'adobe-core-configuration'];

const Validation = () => {
return (
    <>
       {namespaces.map(namespace => <ValidationItem key={namespace} namespace={namespace} />)}
     </>
   );
 };

export default Validation;
