// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { chainsLunesSVG } from '../ui/logos/chains/generated/lunesSVG.js';
import type { EndpointOption } from './types.js';

export const LunesParas: EndpointOption[] = [
  {
    info: 'LunesMainnet',
    dnslink: 'LunesMainnet',
    paraId: 1000,
    providers: {
      Dwellir: 'ws://superblock.lunes.io:9944',
      
    },
    teleport: [-1],
    text: 'Lunes Mainnet',
    ui: {
      color: '#9469FF',
      logo: chainsLunesSVG
    }
  }
];

export const LunesTestParas: EndpointOption[] = [
  {
    info: 'LunesTestNet',
    paraId: 1000,
    dnslink: 'LunesTestNet',
    providers: {
      Dwellir: 'ws://testnet.lunes.io:9944'
    },
    teleport: [-1],
    text: 'Lunes TestNet',
    ui: {
      color: '#F9F9F9',
      logo: chainsLunesSVG
    }
  }
];
