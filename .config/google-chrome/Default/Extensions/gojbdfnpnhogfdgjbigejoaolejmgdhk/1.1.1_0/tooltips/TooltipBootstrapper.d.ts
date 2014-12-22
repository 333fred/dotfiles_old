/// <reference path="../../../../../../../../../dev/otools/inc/typescript/1.0/jquery-1.7.1.d.ts" />
declare var chrome: Chrome;
declare var displaytooltip: any;
declare var tooltipIframeId: string;
declare var SendMessageToExtension: (msg: any, callback: any) => void;
declare var CreateIframeTooltip: (url: any, css: any) => void;
declare var CreateIframeListener: (cid: any) => void;
declare function Do(): void;
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
