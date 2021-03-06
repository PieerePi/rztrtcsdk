CHANGELOG
=========

Version 1.3.0 (released in 2020-12-10)
---------------------------------------

* 共享屏幕功能增强，通话过程中可在摄像头或屏幕之间做切换，并可以设置共享屏幕的参数

* 关闭/打开摄像头 修改为 关闭/打开本地视频

* 按钮 进入/退出桌面共享模式 修改为 选项 使用屏幕作为默认视频源

Version 1.2.3 (released in 2020-11-19)
---------------------------------------

* 新的debug库使用了console.debug，这在Chrome中需要点击user messages后才能看到调试日志，现回退并固定为4.1.1版本

Version 1.2.2 (released in 2020-11-10)
---------------------------------------

* 优化ICE Candidates收集：原来的超时机制有可能会丢失视频的candidate，造成视频通话失败

Version 1.2.1 (released in 2020-10-26)
---------------------------------------

* 使用github图片

Version 1.2.0 (released in 2020-09-10)
---------------------------------------

* 调用call或answer时共享桌面参数为true，但用户却最终取消了桌面分享，这时候仍然会呼出或接听（使用摄像头作为视频源），可设置参数cancelCallWhenShareCanceled为true，来改变这种默认行为

* 分享桌面时，不显示分享音频选项，可设置参数displayShareAudioOption为true，来改变这种默认行为

* 分享桌面时，如果没有分享音频（电脑播放出的声音），将会使用麦克风（人说话的声音）

Version 1.1.0 (released in 2020-09-08)
---------------------------------------

* 增加version版本号接口

Version 1.0.0 (released in 2020-09-07)
---------------------------------------

* 第一版
