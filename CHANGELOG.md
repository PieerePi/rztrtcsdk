CHANGELOG
=========

Version 1.3.5 (released on 2021-11-10)
---------------------------------------

* 将一些callEstablishFailed事件，优化为remoteHangupCall事件和localHangupCall事件
  * remoteHangupCall事件 - 远端挂断
  * localHangupCall事件 - 呼出取消、呼入拒接和呼入不应答
* 呼入未接通时对端挂断和呼入不应答，将产生missCall事件
* 共享屏幕时，用户如果点击了浏览器的停止共享按钮，视频源将自动切换到摄像头
* setParams支持参数一个一个地设置；删除参数需要将参数置为undefined

Version 1.3.4 (released on 2021-09-06)
---------------------------------------

* 丰富呼叫建立失败callEstablishFailed事件的来源originator和原因cause

Version 1.3.3 (released on 2021-09-03)
---------------------------------------

* 收集不到媒体地址时不会呼出或不会应答，同时抛出错误（callEstablishFailed/system/RTP Timeout）
* 同步JsSIP 3.8.1的主要问题修复
* sdkdemo.html中protocol is 'https:' not 'https'

Version 1.3.2 (released on 2021-06-29)
---------------------------------------

* 修复 通话过程中共享屏幕，没有显示分享音频按钮 的问题

Version 1.3.1 (released on 2021-03-29)
---------------------------------------

* SDK demo页面增加忽略语音接听（只有视频）按钮，供与freeswitch-webrtc-bench测试时使用

Version 1.3.0 (released on 2020-12-10)
---------------------------------------

* 共享屏幕功能增强，通话过程中可在摄像头或屏幕之间做切换，并可以设置共享屏幕的参数

* 关闭/打开摄像头 修改为 关闭/打开本地视频

* 按钮 进入/退出桌面共享模式 修改为 选项 使用屏幕作为默认视频源

Version 1.2.3 (released on 2020-11-19)
---------------------------------------

* 新的debug库使用了console.debug，这在Chrome中需要点击user messages后才能看到调试日志，现回退并固定为4.1.1版本

Version 1.2.2 (released on 2020-11-10)
---------------------------------------

* 优化ICE Candidates收集：原来的超时机制有可能会丢失视频的candidate，造成视频通话失败

Version 1.2.1 (released on 2020-10-26)
---------------------------------------

* 使用github图片

Version 1.2.0 (released on 2020-09-10)
---------------------------------------

* 调用call或answer时共享桌面参数为true，但用户却最终取消了桌面分享，这时候仍然会呼出或接听（使用摄像头作为视频源），可设置参数cancelCallWhenShareCanceled为true，来改变这种默认行为

* 分享桌面时，不显示分享音频选项，可设置参数displayShareAudioOption为true，来改变这种默认行为

* 分享桌面时，如果没有分享音频（电脑播放出的声音），将会使用麦克风（人说话的声音）

Version 1.1.0 (released on 2020-09-08)
---------------------------------------

* 增加version版本号接口

Version 1.0.0 (released on 2020-09-07)
---------------------------------------

* 第一版
