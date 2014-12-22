/// <reference path="../../../../../../../../dev/otools/inc/typescript/1.0/jquery-1.7.1.d.ts" />
declare var ClipperPrefix: string;
/****************************************************************************
ChromeStub.ts

A stub for Chrome's extension framework.
****************************************************************************/
interface Chrome {
    browserAction: {
        onClicked: {
            addListener(listener: Function): any;
        };
    };
    storage: {
        local: ChromeStorageArea;
        sync: ChromeStorageArea;
    };
    runtime: {
        onMessage: {
            addListener(listener: Function): any;
        };
        sendMessage(message: Object, callback: Function): any;
        lastError: Object;
    };
    tabs: {
        executeScript(tabIndex: number, object: any, callback?: Function): any;
        getSelected(windowId: number, callback: (tab: Tab) => any): any;
        create(data: {
            url: string;
        }): any;
    };
}
interface ChromeStorageArea {
    get(s: string, callback?: Function): any;
    set(o: Object, callback?: Function): any;
}
interface Tab {
    url?: string;
}
declare var chrome: Chrome;
declare var ClipperPrefix: string;
declare var ClipperRootUrl: string;
declare var ClipperIdPropertyName: string;
declare var ClipperExecuteCode: string;
declare var ClipperId: string;
declare var ChromeStorage: ChromeStorageArea;
declare function GetOrCreateClipperId(data: Object): void;
declare function IsOnOneNoteDomain(url: string): boolean;
declare function RegisterBrowserAction(): void;
declare function GetClipperExecuteCode(queryString: string): string;
declare function GenerateClipperId(): string;
declare function GenerateGuid(): string;
declare function GenerateFourCharGuid(): string;
declare var ClipperExecuteCode: string;
declare var ChromeStorage: ChromeStorageArea;
declare var chrome: Chrome;
declare var ClipperId: string;
declare var ClipperTooltipDisplayTimeProperty: string;
declare var ClipperTooltipLastUpdateTimeKey: string;
declare var ClipperTooltipManagerKey: string;
declare var ClipperTooltipManagerUpdateInterval: number;
declare var ClipperTooltipEnabled: boolean;
declare function RunTooltipScript(callback: Function): void;
declare function CacheTooltipScript(code: string): void;
declare function CheckpointTooltipDisplay(tooltipType: any): void;
declare function ValidateTooltipDisplayAgainstGlobalTimer(tooltipProperties: any, callback: Function): void;
declare function ProcessTooltipDisplayRequestAndRespond(tooltipProperties: any, sendResponse: any): void;
declare function tt_process(sendResponse: any): void;
