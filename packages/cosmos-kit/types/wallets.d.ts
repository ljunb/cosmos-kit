import { MainWalletBase } from '@cosmos-kit/core';
export declare type WalletName = 'keplr' | 'cosmostation' | 'ledger' | 'station' | 'leap' | 'exodus' | 'trust' | 'xdefi' | 'vectis' | 'frontier' | 'omni' | 'coin98' | 'compass';
export declare type WalletList<E extends MainWalletBase | null, M extends MainWalletBase | null> = (E extends MainWalletBase ? M extends MainWalletBase ? [E, M] : [E] : M extends MainWalletBase ? [M] : []) & {
    mobile: M | null;
    extension: E | null;
};
export declare function createWalletList<ExtensionWallet extends MainWalletBase | null, MobileWallet extends MainWalletBase | null>(extension: ExtensionWallet | null, mobile: MobileWallet | null): WalletList<ExtensionWallet, MobileWallet>;
export declare const keplr: WalletList<import("@cosmos-kit/keplr-extension").KeplrExtensionWallet, import("@cosmos-kit/keplr-mobile").KeplrMobileWallet>;
export declare const cosmostation: WalletList<import("@cosmos-kit/cosmostation-extension").CosmostationExtensionWallet, import("@cosmos-kit/cosmostation-mobile").CosmostationMobileWallet>;
export declare const station: WalletList<import("@cosmos-kit/station-extension").StationExtensionWallet, any>;
export declare const leap: WalletList<import("@cosmos-kit/leap-extension").LeapExtensionWallet, import("@cosmos-kit/leap-mobile").LeapMobileWallet>;
export declare const exodus: WalletList<import("@cosmos-kit/exodus-extension").ExodusExtensionWallet, any>;
export declare const trust: WalletList<any, import("@cosmos-kit/trust-mobile").TrustMobileWallet>;
export declare const xdefi: WalletList<import("@cosmos-kit/xdefi-extension").XDEFIExtensionWallet, any>;
export declare const vectis: WalletList<import("@cosmos-kit/vectis-extension").VectisExtensionWallet, any>;
export declare const frontier: WalletList<import("@cosmos-kit/frontier-extension").FrontierExtensionWallet, any>;
export declare const omni: WalletList<any, import("@cosmos-kit/omni-mobile").OmniMobileWallet>;
export declare const coin98: WalletList<import("@cosmos-kit/coin98-extension").Coin98ExtensionWallet, any>;
export declare const compass: WalletList<import("@cosmos-kit/compass-extension").CompassExtensionWallet, any>;
export declare type SubWalletList = MainWalletBase[] & {
    get mobile(): MainWalletBase[];
    get extension(): MainWalletBase[];
};
export declare type AllWalletList = SubWalletList & {
    keplr: typeof keplr;
    cosmostation: typeof cosmostation;
    station: typeof station;
    leap: typeof leap;
    exodus: typeof exodus;
    trust: typeof trust;
    xdefi: typeof xdefi;
    vectis: typeof vectis;
    frontier: typeof frontier;
    omni: typeof omni;
    coin98: typeof coin98;
    compass: typeof compass;
    for: (...names: WalletName[]) => SubWalletList;
    not: (...names: WalletName[]) => SubWalletList;
};
export declare function defineGetters(wallets: MainWalletBase[]): SubWalletList;
export declare function createAllWalletList(ws: MainWalletBase[]): AllWalletList;
export declare const wallets: AllWalletList;
