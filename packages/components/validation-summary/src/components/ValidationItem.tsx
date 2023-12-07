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

import React, { useState, useEffect } from 'react';
import {
  ActionButton,
  Flex,
  Heading,
  Text,
  Tooltip,
  TooltipTrigger,
  View,
  Well
} from '@adobe/react-spectrum';

import { 
  useValidation,
} from '@assurance/plugin-bridge-provider';

import Alert from '@spectrum-icons/workflow/Alert';
import Checkmark from '@spectrum-icons/workflow/CheckmarkCircle';
import Info from '@spectrum-icons/workflow/InfoOutline';

const ValidationItem = ({namespace}) => {

  const validation = useValidation();

  const [displayName, setDisplayName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    Object.entries(validation || {}).forEach(([key, value]) => {
     if (key === namespace && typeof value === 'object' && value !== null && 'displayName' in value && 'description' in value && 'results' in value && 'message' in (value.results as { message: unknown })) {
  console.log(`Namespace: ${key}, Category: ${value.displayName}`);
  setDisplayName(value.displayName as string);
  setDescription(value.description as string);
  setMessage((value.results as { message: string }).message);
}
    });
  }, [validation, namespace]);

  return (
    <Well key={namespace} data-testid={namespace}>
      <Flex alignItems="center">
        {namespace.result === 'matched' ? (
          <Checkmark data-testid="validationSuccess" size="M" color="positive" />
        ) : (
          <Alert
            data-testid="validationError"
            size="M"
            color={namespace.level === 'warn' ? 'notice' : 'negative'}
          />
        )}
        <View marginX="size-200" flex={1}>
              <Flex alignItems="center">
                <Heading marginY="size-100">{displayName}</Heading>
                <TooltipTrigger delay={200}>
                  <ActionButton isQuiet>
                    <Info size="S" />
                  </ActionButton>
                  <Tooltip>{description}</Tooltip>
                </TooltipTrigger>
              </Flex>
              <Text>{message}</Text>
            </View>
          </Flex>
    </Well>
  );
};

export default ValidationItem;
