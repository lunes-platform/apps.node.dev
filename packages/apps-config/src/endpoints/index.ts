// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction, TOptions } from '../types.js';
import type { LinkOption } from './types.js';

import { chainsLunesPNG } from '../ui/logos/chains/generated/lunesPNG.js';

export { CUSTOM_ENDPOINT_KEY } from './development.js';
export * from './productionLunes.js';

function defaultT (keyOrText: string, text?: string | TOptions, options?: TOptions): string {
  return (
    (options?.replace?.host as string) ||
    text?.toString() ||
    keyOrText
  );
}

export function createWsEndpoints (t: TFunction = defaultT): LinkOption[] {
  return [
    {
      isDisabled: true,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.dev.custom.entry', 'Lunes Nightly', { ns: 'apps-config' }),
      textBy: '',
      ui: {
        color: '#6C38FF',
        logo: chainsLunesPNG
      },
      value: ''
    },  
  ].filter(({ isDisabled }) => !isDisabled);
}
