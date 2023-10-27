// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

//import { chains3dpassSVG, chainsAcalaSVG, chainsAlephSVG, chainsBrainstormPNG, chainsCreditcoinTestPNG, chainsDebioSVG, chainsEquilibriumSVG, chainsFerrumPNG, chainsFragnovaPNG, chainsJurPNG, chainsKintsugiPNG, chainsLogionPNG, chainsMyriadPNG, chainsShidenPNG, chainsSkyekiwiPNG, chainsTanglePNG } from '../ui/logos/chains/index.js';
//import { nodesAjunaPNG, nodesArcticPNG, nodesAresGladiosSVG, nodesAutomataPNG, nodesBifrostSVG, nodesBitcountryPNG, nodesCereSVG, nodesCessPNG, nodesCloverSVG, nodesCrustMaxwellSVG, nodesCurioSVG, nodesDatahighwayPNG, nodesDockPNG, nodesDolphinSVG, nodesDotmogSVG, nodesEdgewareWhitePNG, nodesEncointerBlueSVG, nodesFantourPNG, nodesGalitalLogoPNG, nodesGamepowerSVG, nodesGeekSVG, nodesInterlaySVG, nodesIpsePNG, nodesJazPNG, nodesJupiterSVG, nodesKarmachainSVG, nodesKhalaSVG, nodesKiltPNG, nodesKlugPNG, nodesKylinPNG, nodesLaminarCircleSVG, nodesLitentryPNG, nodesMantaPNG, nodesMathSVG, nodesMetaquityNetworkPNG, nodesMinixPNG, nodesMoonbaseAlphaSVG, nodesMybankPNG, nodesNftmartPNG, nodesNodleSVG, nodesOpalLogoPNG, nodesOpportunityPNG, nodesPangoroSVG, nodesPhalaSVG, nodesPhoenixPNG, nodesPichiuPNG, nodesPolkadexSVG, nodesPolkafoundrySVG, nodesPolymeshSVG, nodesPontemSVG, nodesPrismPNG, nodesRealisPNG, nodesRiochainSVG, nodesSherpaxPNG, nodesSoonsocialPNG, nodesSoraSubstrateSVG, nodesSubdaoPNG, nodesSubgameSVG, nodesSubspacePNG, nodesSubstrateHexagonSVG, nodesTernoaSVG, nodesThebifrostPNG, nodesUniartsPNG, nodesUniqueSVG, nodesUnitnetworkPNG, nodesWeb3gamesSVG, nodesZCloakSVG } from '../ui/logos/nodes/index.js';

//export * from './testingRelayRococo.js';
//export * from './testingRelayWestend.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testChains: Omit<EndpointOption, 'teleport'>[] = [
 
  {
    info: 'lunesnightly-testnet',
    providers: {
      'Lunesnightly-testnet #1': 'ws://31.220.50.80:9944',
      
    },
    text: 'Lunes Nightly Testnet',
    ui: {
      color: '#FF474C',
      //logo: nodesThebifrostPNG
    }
  },
];
