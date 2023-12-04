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

export type PluginBridgeConfig = {
  init: (options: BridgeSettings) => void;
  navigateTo: (navigation: string) => void;
  receiveConnections: (connections: any) => void;
  receiveEvents: (events: any[]) => void;
  receivePlugins: (plugins: any) => void;
  receiveSelectedEvents: (events: any) => void;
  receiveSession: (session: any) => void;
  receiveSettings: (settings: any) => void;
  receiveValidation: (validation: any) => void;
};

export type GenericObject = Record<string, unknown>;

export type BridgeConnections = {
  connections: GenericObject[];
}

export type BridgeEvents = {
  events?: GenericObject[];
};

export type BridgeNavigation = {
  path: string;
}

export type BridgeSelectedEvents = {
  selected?: GenericObject[];
}

export type BridgeSettings = {
  env: string;
  imsAccessToken: string;
  imsOrg: string;
  showColumnSettings: boolean;
  showReleaseNotes: boolean;
  showTimeline: boolean;
  tenant: string;
}

export type BridgeValidation = {
  validation: Record<string, ValidatiobnRecord>;
};

export type ValidationResult = {
  events: string[],
  message: string,
  result: string;
};

export type ValidatiobnRecord = {
  category: string,
  container: string,
  description: string,
  displayName: string,
  icon: string,
  level: string,
  namespace: string,
  orgId: string,
  results: ValidationResult,
  type: string,
};
