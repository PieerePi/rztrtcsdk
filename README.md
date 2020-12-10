# RTC SDK

RTC SDK是一套在Web上使用的音视频通话SDK，Web应用软件通过集成该SDK，可以快速赋予该应用软件音视频通话能力。

![SDK DEMO截图][demopic-url]

本套SDK提供以下功能接口：

- 双向语音通话
- 双向视频通话
- 通话中媒体操作，包括：
  - 切换摄像头/共享屏幕
  - 关闭/打开本地视频
  - 静音/取消静音
  - 保持/解保持
    - 说明：在Chrome中此功能会造成音视频延迟，请慎用。
- 第二路来电提示
  - 说明：不支持多路通话，接听第二路来电会将当前通话挂断。

本套SDK需要运行于Chrome浏览器中，同时需要服务器侧支持SIP和WEBRTC协议。

更多内容，请参考sdk目录下的文档《RTC SDK使用说明V1.pdf》。

[demopic-url]: https://raw.githubusercontent.com/PieerePi/rztrtcsdk/master/sdk/demo.png
