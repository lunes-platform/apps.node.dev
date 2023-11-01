// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from '../types.js';
import { chainsLunesSVG } from '../ui/logos/chains/generated/lunesSVG.js';
import type { LinkOption } from './types.js';

export const CUSTOM_ENDPOINT_KEY = 'polkadot-app-custom-endpoints';

interface EnvWindow {
  // eslint-disable-next-line camelcase
  process_env?: {
    WS_URL: string;
  }
}

export function createCustom (t: TFunction): LinkOption[] {
  const WS_URL = process.env?.WS_URL?"":"ws://superblock.lunes.io:9944";
  return [
      {
        isHeader: true,
        info: 'WS_URL',
        text: t('rpc.dev.custom.entry', 'Lunes Nightly - Mainnet', { ns: 'apps-config', replace: { WS_URL } }),
        textBy: '',
        ui: {
          color: '#6C38FF',
          logo:chainsLunesSVG
        },
        value: WS_URL
      }
    ];
}

export function createOwn (t: TFunction): LinkOption[] {
  try {
    // this may not be available, e.g. when running via script
    const storedItems = typeof localStorage === 'object' && typeof localStorage.getItem === 'function'
      ? localStorage.getItem(CUSTOM_ENDPOINT_KEY)
      : null;

    if (storedItems) {
      const items = JSON.parse(storedItems) as string[];

      return items.map((textBy) => ({
        info: 'local',
        text: t('rpc.dev.custom.own', 'Custom', { ns: 'apps-config' }),
        textBy,
        ui: {},
        value: textBy
      }));
    }
  } catch (e) {
    console.error(e);
  }

  return [];
}

export function createDev (t: TFunction): LinkOption[] {
  return [
    {
      dnslink: 'local',
      info: 'local',
      text: t('rpc.dev.local', 'Local Node', { ns: 'apps-config' }),
      textBy: '127.0.0.1:9944',
      ui: {},
      value: 'ws://127.0.0.1:9944'
    }
  ];
}
