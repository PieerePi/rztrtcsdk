export class RTCSDK {
    constructor(account: string, password: string, url: string, port: number, displayName?: string);
    eventHandler: any;
    start(): void;
    setParams(paramSet: any): void;
    call(phoneNo: string, callType: string, shareDesktop?: boolean): void;
    answer(shareDesktop?: boolean): void;
    answerSecondCall(shareDesktop?: boolean): void;
    getVideoStatus(): boolean;
    getAudioStatus(): boolean;
    switchVideo(): void;
    switchAudio(): void;
    isOnHold(): boolean;
    hold(): void;
    unhold(): void;
    hangup(): void;
    hangupSecondCall(): void;
    stop(): void;
    version(): string;
    canAnswer(): boolean;
    inCall(): boolean;
    getCallInfo(): {
        remoteUser: string;
        remoteUserId: string;
        callType: string;
    };
    hasSecondCall(): boolean;
    getSecondCallInfo(): {
        remoteUser: string;
        remoteUserId: string;
        callType: string;
    };
    enableDebug(): void;
    disableDebug(): void;
}
export const JsSIP: typeof import("./JsSIP");
