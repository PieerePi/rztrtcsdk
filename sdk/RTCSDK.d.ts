export class RTCSDK {
    constructor(account: string, password: string, url: string, port: number, displayName?: string);
    eventHandler: any;
    start(): void;
    setParams(paramSet: any): void;
    call(phoneNo: string, callType: string, shareScreen?: boolean): void;
    answer(shareScreen?: boolean): void;
    answerOnlyOneMedia(mediaType: string, shareScreen?: boolean): void;
    switchVideoSource(newVideoSource: string): void;
    answerSecondCall(shareScreen?: boolean): void;
    getVideoStatus(): boolean;
    getAudioStatus(): boolean;
    getVideoSource(): string;
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
