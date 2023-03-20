---
title: Markdown使用教程
date: 2019-12-25 14:27:01
permalink: /pages/ad247c4332211551
categories:
  - 技术
  - 技术文档
---


[>>SDK版本下载地址](https://hdgit.bokecc.com/ccvideo/Live_Android_Play_SDK/-/releases)

## 目录

- [目录](#目录)
- [Release4.8.0](#release480)
- [Release4.7.0](#release470)
- [Release4.6.1](#release461)
- [Release4.6.0](#release460)
- [Release4.5.0](#release450)
- [Release4.3.0](#release430)
- [Release4.2.0](#release420)
- [Release4.1.0](#release410)
- [Release4.0.0](#release400)
- [Release3.18.0](#release3180)
- [Release3.21.1](#release3211)
- [Release3.21.0](#release3210)
- [Release3.20.0](#release3200)
- [Release3.19.0](#release3190)
- [Release3.17.10](#release31710)
- [Release3.17.9](#release3179)
- [Release3.17.8](#release3178)
- [Release3.17.6](#release3176)
- [Release3.17.5](#release3175)
- [Release3.17.4](#release3174)
- [Release3.17.3](#release3173)
- [Release3.17.2](#release3172)
- [Release3.17.1](#release3171)
- [Release3.17.0](#release3170)
- [Release3.16.1](#release3161)
- [Release3.16.0](#release3160)
- [Release3.15.5](#release3155)
- [Release3.15.4](#release3154)
- [Release3.15.3](#release3153)
- [Release3.15.2](#release3152)
- [Release3.15.1](#release3151)
- [Release3.15.0](#release3150)
- [Release3.14.1](#release3141)
- [Release3.14.0](#release3140)
- [Release3.13.0](#release3130)
- [Release3.12.0](#release3120)
- [Release3.11.2](#release3112)
- [Release3.11.1](#release3111)
- [Release3.11.0](#release3110)
- [Release3.10.0](#release3100)
- [Release3.9.2](#release392)
- [Release3.9.1](#release391)
- [Release3.9.0](#release390)
- [Release3.8.1](#release381)
- [Release3.8.0](#release380)
- [Release3.7.3](#release373)
- [Release3.7.2](#release372)
- [Release3.7.1](#release371)
- [Release3.7.0](#release370)
- [Release3.6.0](#release360)
- [Release3.5.1](#release351)
- [Release3.4.5](#release345)
- [Release3.4.4](#release344)
- [Release3.4.3](#release343)
- [Release3.4.2](#release342)
- [Release3.4.1](#release341)
- [Release3.4.0](#release340)
- [Release3.3.0](#release330)
- [Release3.2.1](#release321)
- [Release3.2.0](#release320)
- [Release3.1.1](#release311)
- [Release3.1.0](#release310)
- [Release 3.0.1](#release-301)
- [Release3.0.0](#release300)



## Release4.8.0

1. 更新日志

   1. 新增竖屏观看功能

   2. 加入聊天置顶功能
   3. 优化公告的显示和阅读
   4. 直播带货支持多平台链接
   5. 优化播放器和回放文档画笔下载

2. 远端集成

   ``` groovy
   api 'com.bokecc.doc:docsdk:4.8.0'
   ```

3. api变动

   | 模块 | 调整 | API                                                          | 描述                 | 备注                                                         |
   | ---- | ---- | ------------------------------------------------------------ | -------------------- | ------------------------------------------------------------ |
   | 直播 | 新增 | `LiveDigestBean getLiveDigestInfo`                             | 获取直播相关信息     | startLogin成功后调用，需要判空，LiveDigestBean：icon-直播间logo |
   | 直播 | 新增 | `DWLiveListener.onChatTop(ArrayList<CCChatTopBean> ccChatTopBeanList) `| 回调聊天置顶列表     | CCChatTopBean：属性定义见参数说明                            |
   | 直播 | 新增 | `DWLiveListener.onUnChatTop(ArrayList<String> chatIdList)`     | 回调取消聊天置顶列表 |                                                              |

4. 参数说明

   `CCChatTopBean`

   ``` java
   		/**
        * 置顶消息id
        */
       private String id;
       /**
        * 置顶消息内容
        */
       private String content;
       /**
        * 置顶消息发送者id
        */
       private String fromViewerId;
       /**
        * 置顶消息发送者昵称
        */
       private String fromViewerName;
       /**
        * 置顶消息发送者头像
        */
       private String fromViewerAvatar;
       /**
        * 置顶消息发送者分组id
        */
       private String fromViewerGroupId;
       /**
        * 值为1  主讲、推流端角色（publisher）
        * 值为2  助教端角色（teacher）
        * 值为3  主持人角色（host）
        * 值为4  学生、观看端角色（student）
        * 值为0  其它角色（other）
        */
       private int fromViewerRole;
   ```

   



## Release4.7.0

1. 更新日志

   1. 新增直播文档重试功能 

   2. 新增直播低延迟与多人连麦解耦 
   3. 新增在线回放文档重试功能 
   4. 新增抽奖老虎机样式 
   5. 新增红包雨自定义封面 
   6. 修复其他已知问题 
   7. 优化Demo层UI

2. 远端集成

   ``` groovy
   api 'com.bokecc.doc:docsdk:4.7.0'
   ```

3. 注意事项

   对外api改动（直播和回放模块）：
   docLoadCompleteFailedWithIndex(int index)
   修改部分状态值含义，所有状态值及含义如下：

   | index 状态值 | 状态定义                                                     | 操作     |
   | ------------ | ------------------------------------------------------------ | -------- |
   | 0            | 文档组件加载完成                                             | 无       |
   | 3            | 文档组件加载失败（SDK内部已做重试逻辑，但仍失败需要退出重新进入房间） | 退出重进 |
   | 1            | 动态文档翻页成功                                             | 无       |
   | 5            | 动态文档翻页超时（展示文档刷新按钮，用户可手动触发文档重载） | 手动重试 |
   | 2            | 非动画文档(白板 图片)文档翻页完成                            | 无       |
   | 4            | 静态文档翻页失败（展示文档刷新按钮，用户可手动触发文档重载） | 手动重试 |
   | 6            | 画板翻页失败（展示文档刷新按钮，用户可手动触发文档重载）     | 手动重试 |
   | 9            | 文档翻页超时                                                 | 无       |
   | 10           | 静态文档翻页超时（展示文档刷新按钮，用户可手动触发文档重载） | 手动重试 |
   | 11           | 动态文档动画执行成功                                         | 无       |
   | 12           | 动态文档动画执行超时（内部重试）                             | 无       |
   | 13           | 动态文档加载成功                                             | 无       |
   | 14           | 动态文档加载失败（展示文档刷新按钮，用户可手动触发文档重载） | 手动重试 |

   

   对外API新增：

   | 模块 | 调整 | API                                                          | 描述                   | 备注                                                         |
   | ---- | ---- | ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------ |
   | 直播 | 新增 | `reloadPageChange(BaseCallback<String> callback)`              | 刷新当前页文档         | `callback`回调`onSuccess`为调用成功，回调`onError`为调用失败       |
   | 回放 | 新增 | `reloadPageChange(BaseCallback<String> callback)`              | 刷新当前页文档         | `callback`回调`onSuccess`为调用成功，回调`onError`为调用失败       |
   | 回放 | 新增 | `IDocManagerListener.onPageInfoList(ArrayList<ReplayPageInfo> infoList)` | 回调当前回放翻页信息   | 4.7.0之前版本`DWLiveReplayListener`的`onPageInfoList`方法不再回调，使用此方法替代 |
   | 回放 | 新增 | `IDocManagerListener.onMetaDataLoadSuccess`                    | 回调回放元数据下载完成 | 回放翻页、画笔等数据下载完成回调                             |
   | 回放 | 废弃 | `~~DWLiveReplayListener.onPageInfoList~~ `                     | 回放翻页信息           | 使用`docsdk`的回放文档功能时，此方法废弃不再使用               |



## Release4.6.1

1. 更新日志

   1. 新增隐私协议弹窗

   2. 新增权限申请弹窗

   3. 修复多人连麦流异常问题 

   4. 修复音频模式播放失败问题

   5. 修复1v1声网连麦切换网络窗口消失问题

   6. 修复切换视图文档显示不全问题

2. 远端集成

   ``` groovy
   //文档sdk内部引用直播sdk，单独引入：api 'com.bokecc:dwlivesdk:4.6.1'
   api 'com.bokecc.doc:docsdk:4.6.1'
   ```

3. 注意事项

   ```
   1. CCBasePlayer.CCPlayerStatus中去除了RenderingStart状态
   2. DWLiveEngine的init方法由于权限合规修改，去除了非主进程调用检查，需要确保此方法调用是在主进程
   3. 全局混淆增加：
   -keep class com.tencent.tbs.** {
       *;
   }
   ```

   

## Release4.6.0

1. 更新日志

   1. 文档模块优化及升级  [文档模块参考文档](文档SDK接入指南)

   2. 优化回放画笔数据加载 

   3. 修复横屏观看直播顶部样式问题 

   4. 修复网络重连后文档及音频状态异常问题

2. 远端集成

   ``` groovy
   //文档sdk内部引用直播sdk，单独引入：api 'com.bokecc:dwlivesdk:4.6.0'
   api 'com.bokecc.doc:docsdk:4.6.0'
   ```

3. 因类路径变化，module中ELog等类报错，请重新导入类



## Release4.5.0

1. 更新日志

   1. 新增直播带货功能      [组件参考文档](module/interactive)    [直播API参考文档](2.3.18.0及之后直播接入文档)

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:4.5.0'
   ```



## Release4.3.0

1. 更新日志

   1. 新增直播邀请卡功能      [参考文档](module/interactive)
   1. 新增直播问卷功能    [参考文档](module/interactive)
   1. 优化已知问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:4.3.0'
   ```

## Release4.2.0

1. 更新日志

   1. 直播新增投票功能      [参考文档](module/interactive)
   1. 直播新增红包雨功能    [参考文档](module/interactive)
   1. 新增鉴黄直播结束提示
   1. 优化画笔流畅度

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:4.2.0'
   ```

3. api变动

   1. 新增DWLive.getInteractiveOngoing（获取正在进行的组件活动，直播登录后调用）

   2. 新增DWLiveListener.onLiveStop(boolean isNormal, String msg)，替代原DWLiveListener.onStreamEnd(boolean isNormal) 方法，增加返回结束直播提示语

   3. 过时DWLiveListener.onStreamEnd(boolean isNormal) 方法

## Release4.1.0

1. 更新日志
   1. 直播新增打赏功能      [参考文档](module/interactive)
   1. 直播新增点赞功能     [参考文档](module/interactive)
   1. 直播新增连麦网络状态回调
   1. 回放新增试看功能
   1. 修复视频宽高回调无效问题
   1. 文档加载失败优化
   1. 修复离线回放崩溃问题
   1. 修复抽奖统计问题
   
2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:4.1.0'
   ```

3. 直播DWLive新增API

   ``` java
   //获取互动组件配置信息
   public InteractionConfigure getInteractionConfigure()
   //获取互动组件token
   public void getInteractiveToken(BaseCallback<String> callback);
   
   //互动组件的配置
   public class InteractionConfigure {
       //点赞  0:关闭 1:直播间配置 2:全局配置
       private int likeSwitch = 0;
       //礼物配置
       private GiftConfigure giftConfigure;
   }
   //打赏组件的配置
   public class GiftConfigure {
       //0:关闭 1:直播间配置 2:全局配置
       private int giftSwitch = 0;
       //0:关闭 1: 左侧特效 2：全局特效
       private int specialEffects;
   }
   ```

4. 直播连麦RTCConnectListener中新增回调

   ``` java
      /**
        * 推流网络状态
        * @param hdStreamQuality
        */
       void onPublishQuality(HDStreamQuality hdStreamQuality);
       /**
        * 拉流网络状态
        * @param userId 用户id
        * @param hdStreamQuality  网络信息
        */
       void onPlayQuality(String userId, HDStreamQuality hdStreamQuality);
   
   public class HDStreamQuality {
       /** 本机到服务器的往返时延(ms) */
       private int rtt;
       /**上行丢包(0~255)，数值越大丢包越高，丢包率 = pktLostRate/255 */
       private int pktLostRate;
       /**下行丢包率*/
       private int downLostRate;
       /** 上行综合网络质量(0~3)，分别对应优、良、中、差 */
       private int txQuality;
       /** 下行综合网络质量(0~3)，分别对应优、良、中、差*/
       private int rxQuality;
       /**音频码率*/
       private double akbps;
       /**视频码率*/
       private double vkbps;
   }
   ```

5. 在线回放DWLiveReplayListener新增回调

   ``` java
   /**
    * 回调回放试看时长
    * @param trialDuration 单位秒
    */
   public void onTrialDuration(int trialDuration);
   ```

6. 修复直播普通模式(非连麦状态)、在线回放、离线回放视频宽高回调问题

   ``` java
   public abstract class LiveRtmpPlayerCallBack {
      ...
      
       /**
        * 检测到视频宽高发生变化
        *
        * @param width  宽
        * @param height 高
        */
       public void onVideoSizeChanged(int width, int height) {
       }
   
      ...
   }
   
   public abstract class PlaybackPlayerListener {
      ...
       /**
        * 检测到视频宽高发生变化
        *
        * @param width  宽
        * @param height 高
        */
       public void onVideoSizeChanged(int width, int height) {
       }
   
       ...
   }
   ```

   

## Release4.0.0

1. 更新日志
   1. 在线回放新增自定义字段
   2. 直播、在线回放新增视频LOGO
   3. 修复以及优化一些已知问题
   4. 新增红包雨功能
   5. sdk内的图片地址链接HTTP换成HTTPS  
   6. 登陆字符限制为40
   7. 解决频繁获取androidID导致审核不通过

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:4.0.0'
   ```

3. 4.0.0开始不再提供本地jar包支持

  

4. 新增方法

   ``` java
   
     
   // region -------------------- 在线回放 ---------------------
   //设置播放器监听
   public void setReplayPlayerListener(ReplayPlayerListener replayPlayerListener)
   //设置防录屏
   public void setAntiRecordScreen(Activity activity)
   //设置播放器显示模式
   public void setVideoType(CCBasePlayer.VideoType videoType)
   //获取视频总时长
   public long getDuration()
   //获取播放状态
   public CCBasePlayer.CCPlayerStatus getPlayStatus()
   //获取当前播放进度
   public long getCurrentPosition()
   //是否是播放中
   public boolean isPlaying()
   // endregion
     
   // region -------------------- 离线回放 ---------------------
   //设置离线回放播放器回调
   public void setReplayPlayerListener(ReplayPlayerListener replayPlayerListener)
   //设置视频拉伸模式
   public void setVideoType(CCBasePlayer.VideoType type)
   //获取当前播放状态
   public CCBasePlayer.CCPlayerStatus getPlayerStatus()
   //当前是否是播放中
   public boolean isPlaying()
   //是否处于可播放状态
   public boolean isInPlaybackState()
   //设置播放进度
   public void seekTo(long progress)
   //获取当前播放进度
   public long getCurrentPosition()
   //获取视频总时长
   public long getDuration()
   // endregion
   
   ```

5. 修改方法

   ``` java
   // region -------------------- 在线回放 ---------------------
   //设置在线回放回调监听
   public void setReplayParams(DWLiveReplayListener replayListener)
   //开始播放
   public void start(Context context)
   // endregion
     
   // region -------------------- 离线回放 ---------------------
   //设置离线回放参数
   public void setReplayParams(DWLiveLocalReplayListener replayListener, DocView docView, String dir)
   //开始播放
   public void start(Context context)
     
   // endregion     
   
   ```

6. 废弃或删除方法

   ``` java
   // region -------------------- 在线回放 ---------------------
   //设置在线回放的参数
   public void setReplayParams(DWLiveReplayListener replayListener, Context
            context, DWReplayPlayer player, DocView docView)
   //设置播放器
   public void setReplayPlayer(DWReplayPlayer player)
   //开始播放
   public void start(Surface surface)
   // endregion
     
   // region -------------------- 离线回放 ---------------------
   //开始播放
   public void start(Surface surface)  
   //释放播放器
   public void releasePlayer()
   // endregion
   ```
   
7. 在线回放功能升级指南

   1. 播放器修改

      4.0.0版本之前，需要在布局里面声明 `com.bokecc.livemodule.view.ResizeTextureView` ，并在代码层创建 `DWReplayPlayer` 对象。从4.0.0版本开始，您不需要再声明 `DWReplayPlayer` 播放器对象，在 `DWLiveReplayListener` 中，通过 `public void onPlayBackStreamViewPrepared(HDMediaView hdMediaView) ` 方法，返回播放器视图，您需要创建容器，并将返回的 `hdMediaView` 视图添加进容器即可，并在适当的回调方法中操作移除 `hdMediaView` 。

   2. 播放器事件监听修改

      ``` java
      //在DWLiveReplayListener中新增重写以下回调
      @Override
      public void onPlayBackStreamViewPrepared(HDMediaView hdMediaView) {
          //返回的 hdMediaView 为直播播放器布局
      }
      //播放器注册监听修改
      DWReplayPlayer.setPlayerEventListener(PlayerEvent event);
      -->DWLiveReplay.getInstance().setReplayPlayerListener(ReplayPlayerListener replayPlayerListener);
      ```

   3. 开始播放修改

      ``` java
      DWLiveCoreHandler.getInstance().start();
      -->DWLiveCoreHandler.getInstance().start(context);
      ```

   4. 防录屏修改

      ``` java
      DWReplayPlayer.setAntiRecordScreen(activity);
      --> DWLiveReplay.getInstance().setAntiRecordScreen(activity);
      ```

      

   5. 其他修改

      所有播放器相关的操作将放到DWLiveReplay中进行调用

8. 离线回放升级指南

    1. 播放器修改

      4.0.0版本之前，需要在布局里面声明 `com.bokecc.livemodule.view.ResizeTextureView` ，并在代码层创建 `DWReplayPlayer` 对象。从4.0.0版本开始，您不需要再声明 `DWReplayPlayer` 播放器对象，在 `DWLiveLocalReplayListener` 中，通过 `public void onPlayBackStreamViewPrepared(HDMediaView hdMediaView) ` 方法，返回播放器视图，您需要创建容器，并将返回的 `hdMediaView` 视图添加进容器即可，并在适当的回调方法中操作移除 `hdMediaView` 。

   2. 播放器事件监听修改

      ``` java
      //在DWLiveLocalReplayListener中新增重写以下回调
      @Override
      public void onPlayBackStreamViewPrepared(HDMediaView hdMediaView) {
          //返回的 hdMediaView 为直播播放器布局
      }
      //播放器注册监听修改
      DWReplayPlayer.setPlayerEventListener(PlayerEvent event);
      -->DWLiveLocalReplay.getInstance().setReplayPlayerListener(ReplayPlayerListener replayPlayerListener);
      ```

   3. 开始播放修改

      ``` java
      DWLiveCoreHandler.getInstance().start();
      -->DWLiveCoreHandler.getInstance().start(context);
      ```

   4. 防录屏修改

      ``` java
      DWReplayPlayer.setAntiRecordScreen(activity);
      --> DWLiveReplay.getInstance().setAntiRecordScreen(activity);
      ```

      

   5. 其他修改

      所有播放器相关的操作将放到DWLiveReplay中进行调用
      另外播放完成不需要调用stop
   


## Release3.18.0

1. 更新日志
   1. 支持多人连麦功能
   2. 支持适配直播观看模式
   3. 修复在线回放画笔重叠问题
   
2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.18.0'
   ```

3. 本地集成

   ``` groovy
   删除旧版本dwlivesdk.jar，导入dwlivesdk-3.18.0.jar
   CommonLib-1.1.3.jar替换为CommonLib-1.1.4.jar
   删除旧版本的rtc.jar
   新增CCStreamALib-1.0.9.jar
   新增CCStreamPlayerLib-1.0.5.jar
   新增CCStreamTLib-1.0.9.jar
   新增ClassBaseLib-6.9.3.jar
   新增liteavsdk-8.8.10263.jar
   新增MqttService-1.1.1.jar
   新增mqttv3-1.2.0.jar
   新增RtsNetSDK-1.6.1.jar
   jniLibs新增 libliteavsdk.so libRtsSDK.so libsoundtouch.so libtraeimp-rtmp.so libtxffmpeg.so
   ```

4. 新增方法

   ``` java
   
     
   // region -------------------- 直播对外设置相关 ---------------------
   //设置播放器显示模式
   public void setVideoType(CCBasePlayer.VideoType videoType)
   // endregion
     
   // region -------------------- 连麦对外设置相关 ---------------------
   //设置流监听
   public void setPublishStreamListener(LiveRtmpPlayerCallBack callBack)
   //设置防录屏
   public void setAntiRecordScreen(Activity activity)
   //是否是多人连麦
   public boolean isMultiMediaCall()
   //发起多人连麦
   public void callInPreviewWithType(RtcCallBack rtcCallBack,BaseRtcClient.RtcConnectType type)
   //通过流id拉取远端流
   public void pullRemoteStream(String userId, PullRemoteStreamCallBack baseCallback)
   //通过id移除远端流
   public void removeRemoteStream(String userId,BaseCallback baseCallback)
   //拒绝连麦
   public void rejectCall()
   //同意连麦
   public void agreeCallInPreview(RtcCallBack rtcCallBack,BaseRtcClient.RtcConnectType audiovideo)
   //连麦过程中开启或者关闭麦克风
   public void setLocalAudioEnable(boolean enable)
   //连麦过程中开启或者关闭摄像头
   public void setLocalVideoEnable(boolean enable)
   //连麦过程中切换摄像头
   public void switchLocalCamera()
   // endregion
   
   ```

5. 修改方法

   ``` java
   // region -------------------- 直播对外设置相关 ---------------------
   //开始直播
   public void start()-->public void start(Context context)
   //设置播放参数
   public void setDWLivePlayParams(DWLiveListener dwLiveListener, Context context, DocView docView, DWLivePlayer player)-->public void setDWLivePlayParams(DWLiveListener dwLiveListener, Context context, DocView docView)
     
     
   // endregion
   
   // region -------------------- 连麦对外设置相关 ---------------------
   //断开连麦
   public void disConnectSpeak()-->public void hangup()
   //拒绝连麦
   public void disConnectApplySpeak()-->public void rejectCall()
   //设置连麦回调监听
   public void setRtcClientListener(RtcClientListener rtcClientListener)-->public void setRtcClientListener(RTCConnectListener rtcClientListener)
     
   //设置直播播放音量大小
   public void setVolume(float left, float right)-->public void setVolume(float volume)
   // endregion
     
   
   ```

6. 废弃或删除方法

   ``` java
   // region -------------------- 连麦对外设置相关 ---------------------
   //移除本地摄像头预览。废弃原因：连麦重构，断开连麦自动停止预览，用户手动从视图树移除HDMediaView即可
   public void removeLocalRender()
     
   //关闭资源。废弃原因：连麦重构，底层自动处理，不需要用户手动调用
   public void closeCamera()
     
   //发起连麦。废弃原因：连麦重构，使用callInPreView方法替代
   public void startVoiceRTCConnect()
   public void startRtcConnect()
     
   //设置预览。废弃原因：连麦重构，在发起连麦callback中返回预览视图，用户可选择性添加进视图树
   public void setLocalRender(CCRTCRender localRender)
   public void setRemoteRender(CCRTCRender remoteRender)
   public void setRtcClientParameters(RtcClientListener rtcClientListener, CCRTCRender
               localRender, CCRTCRender remoteRender)
   // endregion
     
   // region -------------------- 直播对外设置相关 ---------------------
     
   //直播设置播放view。废弃原因：重构在Callback里返回HDMediaView视图
   public void start(Surface surface)
     
   // endregion
   ```
   
7. 直播功能升级指南

   1. 播放器修改

      3.18.0版本之前，需要在布局里面声明 `com.bokecc.livemodule.view.ResizeTextureView` ，并在代码层创建 `DWLivePlayer` 对象。从3.18.0版本开始，您不需要再声明 `DWLivePlayer` 播放器对象，在 `DWLiveListener` 中，通过 `public void onLiveStreamViewPrepared(HDMediaView hdMediaView) ` 方法，返回播放器视图，您需要创建容器，并将返回的 `hdMediaView` 视图添加进容器即可，并在适当的回调方法中操作移除 `hdMediaView` 。

   2. 播放器事件监听修改

      ``` java
      //在DWLiveListener中新增重写以下回调
      @Override
      public void onLiveStreamViewPrepared(HDMediaView hdMediaView) {
          //返回的 hdMediaView 为直播播放器布局
      }
      //播放器注册监听修改
      DWLivePlayer.setPlayerEventListener(PlayerEvent event);
      -->DWLive.getInstance().setPublishStreamListener(LiveRtmpPlayerCallBack event);
      ```

   3. 开始播放修改

      ``` java
      DWLiveCoreHandler.getInstance().start();
      -->DWLiveCoreHandler.getInstance().start(mContext);
      ```

   4. 防录屏修改

      ``` java
      DWLivePlayer.setAntiRecordScreen(activity);
      -->DWLive.getInstance().setAntiRecordScreen(activity);
      ```

      

   5. 其他修改

      ``` java
      //不再需要在onStreamEnd(final boolean isNormal)回调中调用以下代码段
      // 暂停播放
      DWLive.getInstance().pause();
      ```

8. 连麦功能升级指南

   3.18.0版本加入了多人连麦的功能，并将单人连麦的API使用与多人连麦进行统一。如果您希望新接入多人连麦功能，在直播间管理后台开启多人连麦的功能后，您可以通过

   `连麦接入文档` 进行多人连麦功能的对接。如果您已经使用了单人连麦的功能，也需要根据文档进行单人连麦功能的修改

9. 无连麦功能接入或者依赖冲突解决

   如果您不使用sdk提供的多人连麦功能突，建议排除连麦库。如果您在使用sdk的过程中出现依赖冲突问题，也可以根据下面代码所示排除方案进行冲突依赖的排除。

   ``` groovy
           api('com.bokecc:dwlivesdk:' + rootProject.ext.android.SDK_VERSION) {
   //            // drm冲突
   //            exclude group: 'com.bokecc', module: 'drm'
   //            // webrtc冲突
   //            exclude group: 'com.bokecc', module: 'hdwebrtc'
   //            // 播放器冲突
   //            exclude group: 'com.bokecc', module: 'CCStreamPlayerLib'
   //            // 云课堂sdk冲突（多人连麦，不使用多人连麦可以排除）
               exclude group: 'com.bokecc', module: 'ClassBaseLib'
   //            // tbs冲突（不使用x5内核，可以在初始化sdk关闭x5开关，并排除此库）
   //            exclude group: 'com.tencent.tbs.tbssdk', module: 'sdk'
           }
   ```
   



## Release3.21.1

1. 更新日志

   1. 修复回放偶现崩溃问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.21.1'
   ```



## Release3.21.0

1. 更新日志

   1. 播放器自动重试功能优化   
   2. 回放文档画笔数据下载增加缓存机制 
   3. 回放文档画笔加载机制优化 
   4. 修复回放翻页回调不准确的问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.21.0'
   ```

3. 注意事项

进入回放会下载元数据（文档相关数据，翻页、画笔等），为了节省资源并提高效率，元数据增加缓存机制，使用应用文件夹进行数据缓存，缓存的路径为/data/data/包名/files/metadata2/ (对应的方法为getFilesDir)

用户可自行根据缓存区大小来清除缓存





## Release3.20.0

1. 更新日志

   1. 在线回放聊天优化

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.20.0'
   ```

3. 最新改动：

   DWLiveReplayListener对外回调新增：
   
   | 模块     | API                                                | 描述             | 备注                                       |
   | -------- | -------------------------------------------------- | ---------------- | ------------------------------------------ |
   | 在线回放 | `onChatMessagePart(TreeSet<ReplayChatMsg> chatMsgs)` | 分段回调聊天数据 | 回调规则是优先返回当前播放时间点的聊天片段 |
   
   

4.注意事项

为了增加效率，在线回放和离线回放会使用sd卡进行数据缓存。缓存的路径为/data/data/包名/files/metadata2/ (对应的方法为getFilesDir)

用户可自行根据缓存区大小来清除缓存



## Release3.19.0

1. 更新日志

   1. 直播支持重载文档翻页功能
   2. 优化直播、在线回放文档状态回调
   3. 优化在线回放画笔展示慢的问题
   4. 优化文档地址加载流程

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.19.0'
   ```

3. 最新改动：

   对外api改动（直播和回放模块）：
   docLoadCompleteFailedWithIndex(int index)
   修改部分状态值含义，所有状态值及含义如下：

   | index 状态值 | 状态定义                                                     | 操作     |
   | ------------ | ------------------------------------------------------------ | -------- |
   | 0            | 文档组件加载完成                                             | 无       |
   | 3            | 文档组件加载失败（SDK内部已做重试逻辑，但仍失败需要退出重新进入房间） | 退出重进 |
   | 1            | 动态文档翻页成功                                             | 无       |
   | 5            | 动态文档翻页超时（展示文档刷新按钮，用户可手动触发文档重载） | 手动重试 |
   | 2            | 非动画文档(白板 图片)文档翻页完成                            | 无       |
   | 4            | 静态文档翻页失败（展示文档刷新按钮，用户可手动触发文档重载） | 手动重试 |
   | 6            | 画板翻页失败（展示文档刷新按钮，用户可手动触发文档重载）     | 手动重试 |
   | 9            | 文档翻页超时                                                 | 无       |
   | 10           | 静态文档翻页超时（展示文档刷新按钮，用户可手动触发文档重载） | 手动重试 |
   | 11           | 动态文档动画执行成功                                         | 无       |
   | 12           | 动态文档动画执行超时（内部重试）                             | 无       |
   | 13           | 动态文档加载成功                                             | 无       |
   | 14           | 动态文档加载失败（展示文档刷新按钮，用户可手动触发文档重载） | 手动重试 |

   

   对外API新增：

   | 模块 | API                                                   | 描述           | 备注                                                   |
   | ---- | ----------------------------------------------------- | -------------- | ------------------------------------------------------ |
   | 直播 | `reloadPageChange(final BaseCallback<String> callback)` | 刷新当前页文档 | callback回调onSuccess为调用成功，回调onError为调用失败 |

   






## Release3.17.10

1. 更新日志

   1. 优化文档画笔内存
   2. 增加文档翻页超时回调

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.10'
   ```

3. 最新改动：

   ``` txt
   1. 文档对外回调docLoadCompleteFailedWithIndex中增加index=9情况，表示文档翻页超时，当文档页面超过30s没有加载成功或者失败响应时，给到用户文档翻页超时回调，用户可选择性捕获
   2. DWLiveEngine.init方法中取消获取系统进程调用（隐私合规），需要用户在外部调用时，确保只在主进程初始化dwlivesdk
   3. 优化直播间全体禁言回调onBanChat，中途进入也会回调禁言状态，在直播中有可能会重复回调同一状态，请在全体禁言状态与上次不同时，再做相应的动作响应
   ```

   



## Release3.17.9

1. 更新日志

   1. 新增直播DP预加载功能
   2. 新增在线回放DP预加载功能
   3. 新增在线回放文档翻页数据获取异常消息通知
   4. 新增在线回放文档支持重载文档翻页数据功能
   5. 新增在线回放文档支持翻页失败时刷新翻页功能

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.9'
   ```

3. 新增api：

   ``` java
   //针对sdk在运行过程中的文档翻页失败、回放基础元数据（规则、规则文件、翻页文件）获取失败，增加2个主动调用API与1个对外回调
   //当文档回调DOC_DP_IMAGE_ERROR(4)时，用户可以调用此方法进行刷新翻页，调用间隔需>3s;返回值为是否调用成功
   DWLiveReplay.reloadPageChange()
   //当回调 onPageDataError 时调用此方法，调用间隔需>3s;返回值为是否调用成功
   DWLiveReplay.reloadPageData()
     
   //新增对外回调 type:0：规则接口请求失败；1：规则文件下载失败；2：翻页文件下载失败;
   DWLiveReplayListener.onPageDataError(int type,String msg)
   ```

   

## Release3.17.8

1. 更新日志

   1. 修复离线回放文档横屏展示异常问题
   2. 修复离线回放聊天列表不回调问题
   3. 修复在线回放文档页面列表不回调问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.8'
   ```

## Release3.17.6

1. 更新日志

   1. 离线回放支持文档动画展示
   2. 离线回放播放崩溃问题修复

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.6'
   ```

3. 本地集成

   `dwlivesdk-3.17.x.jar`替换为`dwlivesdk-3.17.6.jar`

   注意：从3.17.4起，依赖的commonLib升级至1.1.6版本，与老版本（1.1.3及以下）不兼容，如果是jar包集成，请确认commonLib版本是否为1.1.6

   `commonlib-1.1.3.jar`替换为`commonlib-1.1.6.jar`

   添加`libc++_shared.so`和`libccxlog.so`动态库

## Release3.17.5

1. 更新日志

   1. 修复在线回放文档加载回调异常问题
   2. 修复直播连麦开关回调异常问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.5'
   ```

3. 本地集成

   `dwlivesdk-3.17.x.jar`替换为`dwlivesdk-3.17.5.jar`

   注意：从3.17.4起，依赖的commonLib升级至1.1.6版本，与老版本（1.1.3及以下）不兼容，如果是jar包集成，请确认commonLib版本是否为1.1.6

   `commonlib-1.1.3.jar`替换为`commonlib-1.1.6.jar`

   添加`libc++_shared.so`和`libccxlog.so`动态库

## Release3.17.4

1. 更新日志

   1. 支持转播双师模式
   2. 修复在线回放获取viewer导致崩溃的问题
   3. 修复在线回放小窗出现不能拖拽的问题
   4. 修复昵称中带有#号登录失败问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.4'
   ```

3. 本地集成

   `dwlivesdk-3.17.3.jar`替换为`dwlivesdk-3.17.4.jar`

   `commonlib-1.1.3.jar`替换为`commonlib-1.1.6.jar`

   添加`libc++_shared.so`和`libccxlog.so`动态库

## Release3.17.3

1. 更新日志

   1. 修复离线回放文档不显示问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.3'
   ```

3. 本地集成

   ``` groovy
   dwlivesdk-3.17.2.jar替换为dwlivesdk-3.17.3.jar
   ```


## Release3.17.2

1. 更新日志

   1. 修复在线回放部分崩溃问题
   2. 修复聊天审核通过后消息重复问题
   3. 修复在线回放问答提问者可见不生效的问题
   4. 修复离线回放结束后，重新播放画板不刷新的问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.2'
   ```

3. 本地集成

   ``` groovy
   dwlivesdk-3.17.1.jar替换为dwlivesdk-3.17.2.jar
   ```

4. 新增方法

   ``` java
   //获取回放相关信息（直播间标题、直播间描述），返回结果有可能为null，一定要判空
   DWLiveReplay.getInstance().getRoomRecordInfo()
   //使用示例
   RecordInfo recordInfo = DWLiveReplay.getInstance().getRoomRecordInfo();
   if (recordInfo != null) {
     //显示直播间标题
     mTitle.setText(recordInfo.getTitle());
   }
   ```

   

## Release3.17.1

1. 更新日志

   1. 修复抽奖崩溃问题
   2. 修复离线回放黑屏问题 
   3. 修复弹幕显示异常问题
   4. 修复在线回放自动跳回原点问题
   5. SDK新增播放器背景图和提示语

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.1'
   ```

3. 本地集成

   ``` groovy
   CommonLib-1.1.1.jar替换为CommonLib-1.1.3.jar
   dwlivesdk-3.17.0.jar替换为dwlivesdk-3.17.1.jar
   ```

4. 新增字段

   ``` java
   public class RoomInfo {
       /**
        * 播放器提示语
        */
       private String playerBackgroundHint;
       /**
        * 播放器背景图
        */
       private String playerBackgroundImageUri;
   }
   ```

   



## Release3.17.0

1. 更新日志
   1. 新增课件水印
   2. 文档模块重构及内存优化
   3. 优化扫描相册二维码识别不准问题
   4. 修复网络不稳定情况下的崩溃问题
   5. 修复离线回放名称、简介修改未生效问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.17.0'
   ```

3. 注意事项

   1. 课件水印

      如开启课件水印功能之后，监听`DWLiveReplayListener.onPageInfoList(ArrayList<ReplayPageInfo> infoList)`时，`ReplayPageInfo`类中图片地址url属性需要重新定义，如要获取图片地址，可参考下面的方式

      ``` java
          private void handleGetImage(String imageUrl) {
              try {
                  //把传过来的路径转成URL
                  URL url = new URL(imageUrl);
                  //获取连接
                  HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                  //使用GET方法访问网络
                  connection.setRequestMethod("GET");
                  //超时时间为10秒
                  connection.setConnectTimeout(10000);
                  connection.setInstanceFollowRedirects(true);
                  //获取返回码
                  int code = connection.getResponseCode();
                  if (code == 302) {
                      String location = connection.getHeaderField("Location");
                      handleGetImage(location);
                  } else if (code == 200) {
                      InputStream inputStream = connection.getInputStream();
                      //使用BitmapFactory把网络的输入流生产Bitmap
                      final Bitmap bitmap = BitmapFactory.decodeStream(inputStream);
                      inputStream.close();
                      mHandler.post(new Runnable() {
                          @Override
                          public void run() {
                              setBitmap(bitmap);
                          }
                      });
                  } else {
                      if (BuildConfig.DEBUG) {
                          ELog.e(TAG, "handleGetImage failed:" + imageUrl);
                      }
                      mHandler.post(new Runnable() {
                          @Override
                          public void run() {
                              setBackgroundColor(0x00ffffff);
                          }
                      });
                  }
              } catch (IOException e) {
                  ELog.e(TAG, "handleGetImage failed,IOException");
                  setBackgroundColor(0x00ffffff);
              }
          }
      ```

      

## Release3.16.1

1. 更新日志
   1. 更改跑马灯时间单位为毫秒
   2. 修复离线回放画笔展示崩溃问题
   3. 回放接入文档说明补充

## Release3.16.0

1. 更新日志

   1. 提醒样式统一规范
   2. 连麦库升级优化
   3. 只看自己问答按钮交互优化
   4. 弹幕功能交互调整，样式优化
   5. 新增源数据静态化，提高系统兼容性
   6. 直播、回放播放器样式优化，竖屏增加“更多”设置
   7. 修复修改在线回放名称及简介不生效问题
   8. 修复弱网情况在线回放文档数据异常问题
   9. 修复随堂测收起状态下不计时问题

2. 远端集成

   ``` java
   api 'com.bokecc:dwlivesdk:3.16.0'
   ```

3. 本地集成

   1. 替换so库

      替换连麦库 ：libagora-crypto.so和libagora-rtc-sdk.so

      替换播放器库：libijkffmpeg.so、libijkplayer.so、libijksdl.so

   2. 替换jar包

      替换 rtc.jar、 libjingle_peerconnection.jar   

      commonlib-0.1.15.jar替换成commonlib-0.1.20.jar

      dwlivesdk-3.15.5.jar替换成dwlivesdk-3.16.0.jar

4. 直播API变更

    DWLive类修改直播设置连麦的事件监听器，具体请参考demo

   ``` java
   //原先的
   public void setRtcClientParameters(RtcClientListener rtcClientListener, SurfaceViewRenderer localRender, CCRTCRender remoteRender);
   //改为
   public void setRtcClientParameters(RtcClientListener rtcClientListener, CCRTCRender localRender, CCRTCRender remoteRender);
   // 其中SurfaceViewRenderer不再对外提供，统一使用CCRTCRender替换
   ```

5. 在线回放新增API   DWLiveReplay

   ``` java
   /**
    * 获取所有聊天
    */
   public void getAllChats(final BaseFunction<TreeSet<ReplayChatMsg>> func);
   
   /**
    * 获取所有问答数据
    */
   public void getAllQAs(final BaseFunction<TreeSet<ReplayQAMsg>> func);
   
   /**
    * 获取广播
    *
    * @param func {@link BaseFunction}
    */
   public void getAllBoardCasts(final BaseFunction<ArrayList<ReplayBroadCastMsg>> func);
   
   /**
    * 获取随堂测 列表
    *
    * @param func {@link BaseFunction}
    */
   public void getAllPractices(final BaseFunction<ArrayList<ReplayPracticeInfo>> func);
   ```


## Release3.15.5

1. 更新日志

   1. 修复离线回放画笔重叠问题

   2. 优化回放翻页信息回调时机

   3. 优化安卓11系统识别相册二维码兼容问题

2. 远端集成

   ``` java
   api 'com.bokecc:dwlivesdk:3.15.5'
   ```

3. 注意事项

   本版本播放器核心更改为如下版本，详情请看关于[依赖库的版本说明](https://hdgit.bokecc.com/ccvideo/Live_Android_Play_SDK/wikis/%E5%85%B3%E4%BA%8E%E4%BE%9D%E8%B5%96%E5%BA%93%E7%9A%84%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E)

   ``` java
   api 'com.bokecc:hdplayer:1.1.0_lite‘
   ```

## Release3.15.4

1. 更新日志
  
   1. 优化直播和回放文档白屏，提升文档稳定性
   
2. 远端集成

   ``` java
   api 'com.bokecc:dwlivesdk:3.15.4'
   ```

3. 升级注意事项

   文档新增回调方法，增加7和8状态

   ``` java
       public interface DocViewEventListener {
           /**
            * 文档加载状态
            * index
            * 7 dploadingreset成功
            * 8 极速翻页失败
            */
           void docLoadCompleteFailedWithIndex(int index);
       }
   ```

## Release3.15.3

1. 更新日志 
   1. 修复直播无法显示历史画笔问题 
   2. 修复离线回放偶现不显示第一页画笔问题

## Release3.15.2

1. 更新日志 
  
1. 优化回放切换逻辑，提升稳定性
  
2. 远端集成

   ``` java
   api 'com.bokecc:dwlivesdk:3.15.2'
   ```

## Release3.15.1

1. 更新日志 
   1. 直播、离线回放数据增加排序
   2. 优化在线回放画笔数据，减少崩溃率

2. 远端集成

   ``` java
   api 'com.bokecc:dwlivesdk:3.15.1'
   ```



## Release3.15.0

1. 更新日志

   1. 新增回放打点功能
   2. demo新增直播、在线回放后台播放功能
   3. 优化播放器侧边栏交互
   4. 优化回放相关数据接口
   5. 修复断网情况下连麦异常问题
   6. 修复讲师断网情况下播放器提示时间过长问题

2. 远端集成

   ``` java
   api 'com.bokecc:dwlivesdk:3.15.0'
   ```

3. 升级注意事项

   - 新增方法

     DWLiveReplayListener类新增回放打点数据回调

     ``` java
       /**
          * 回放打点列表
          *
          * @param dotList 打点实体列表
          */
         public void onHDReplayDotList(List<ReplayDot> dotList)
     ```

## Release3.14.1

1. 更新日志
  
  1. 修复离线播放检查网络的问题
  
2. 远端集成

  ``` java
  api 'com.bokecc:dwlivesdk:3.14.1'
  ```

3. 本地集成

   替换jar包
   dwlivesdk-3.14.0.jar替换为dwlivesdk-3.14.1.jar

## Release3.14.0

1. 更新日志

   1. 直播回放支持防录屏功能
   2. 直播多清晰度重构增强
   3. 回放取消liveid的兼容
   4. SDK增加x5内核开关
   5. 优化demo显示问题
   6. 优化播放器内核，减少崩溃率
   7. 优化回放获取随堂测信息接口
   8. 修复问答逻辑及连麦样式异常问题

2. 远端集成

   ``` java
   api 'com.bokecc:dwlivesdk:3.14.0'
   ```

3. 本地集成

   替换jar包
   dwlivesdk-3.13.0.jar替换为dwlivesdk-3.14.0.jar

4. 新增的api
    -  **新增方法1**
      
       直播新增防止录屏方法：
       
       DWLivePlayer类
       
       ``` java
           /**
            * 设置防录屏
            * @param activity activity
            */
          public void setAntiRecordScreen(Activity activity);
       ```
       回放新增防止录屏方法
       
       DWReplayPlayer类
       
       ``` java
           /**
            * 设置防录屏
            * @param activity activity
            */
          public void setAntiRecordScreen(Activity activity);
         
       ```
       
    -  **新增方法2**
    
       新增x5内核开关，DWLiveEngine类新增初始化方法，新增参数enableX5代表是否开启x5内核，默认使用,如果开启将使用x5内核加载文档，如果关闭将使用系统内核加载文档内容，并且不再初始化x5内核
       
       ``` java
         /**
            * 3. 初始化SDK
            *
            * @param app       Application
            * @param enableLog 是否开启日志
            * @param enableX5  是否开启x5内核 默认为true
            */
       init(Application app, boolean enableLog, boolean enableX5)
       ```
      
    -  **新增方法3**
    
       直播多清晰度和线路切换
    
       DWLiveListener回调方法中新增线路和清晰度的回调
    
       ``` java
           /**
            * 是否开启音频线路
            *
            * @param hasAudio HAVE_AUDIO_LINE_TRUE 有音频 HAVE_AUDIO_LINE_FALSE 无音频
            */
       public void onHDAudioMode(DWLive.LiveAudio hasAudio)
           /**
            * 视频清晰度列表回调
            * 该api会存在多次回调  如：切换清晰度、网络不稳定、从音频切回到视频模式
            *
            * @param videoQuality   视频清晰度列表
            * @param currentQuality 当前清晰度
            */
       public void onHDReceivedVideoQuality(List<LiveQualityInfo> videoQuality, LiveQualityInfo currentQuality)
           /**
            * 线路回调 包括音频和视频某个清晰度下的线路
            * 该api会存在多次回调  切换清晰度、网络不稳定、音频/视频模式切换
            *
            * @param lines    线路列表
            * @param indexNum 当前线路下标
            */
       public void onHDReceivedVideoAudioLines(List<LiveLineInfo> lines, int indexNum)
       ```
    
       DWLive主动调用方法中新增如下方法
    
       ``` java
           /**
            * 切换清晰度
            *
            * @param quality        清晰度
            * @param changeCallBack 回调
            */
       public void changeQuality(int quality, LiveChangeSourceListener changeCallBack)
            /**
            * 切换线路
            *
            * @param lineIndex      线路index
            * @param changeCallBack changeCallBack
            */
       public void changeLine(int lineIndex, LiveChangeSourceListener changeCallBack)
            /**
            * 切换播放模式
            *
            * @param playMode       播放模式
            * @param changeCallBack 回调
            */
       public void changePlayMode(LivePlayMode playMode, LiveChangeSourceListener changeCallBack)
           
       ```
    
5. 修改的api

   - **修改方法**

     interface类必须将所有回调方法实现，修改为抽象类可支持按需实现回调方法

     回调类
     
     ``` groovy
     public interface DWLiveListener {...}         
     public interface DWLiveReplayListener {...}
     public interface DWLiveLocalReplayListener {...}
     ```
     
     修改为
     
     ``` groovy
     public abstract class DWLiveListener {...}
     public abstract class DWLiveReplayListener {...}
     public abstract class DWLiveLocalReplayListener {...}
     ```
     
     如果在外部通过一个base类实现了以上interface类，需要由implements修改为extends
     
     如无上述使用方式，则不需要改动

6. 废弃的api

   本次废弃方法的维护时间截止到2021年11月8日

   - **方法废弃1**

     DWLiveListener类
   
     ``` java
         /**
          * 回调线路和清晰度列表 该api可能存在多次回调  比如断网 弱网 上下课
          *
       * @param videoPlaySource 视频播放源
          *                        LiveLineParams  lines 线路列表
       *                        quality 清晰度 0是原画  200是流畅  300是标清
          * @param audioPlaySource 音频播放源
          *                        lines 线路列表
          */
      @Deprecated
         public abstract void HDReceivedVideoAudioLines(List<LiveLineVideoParams> videoPlaySource, LiveLineAudioParams audioPlaySource)
     ```
   
     DWLive类
   
     ``` java
     /**
      * 切换线路
      *
      * @param liveLineConfig     disableVideo false:视频,true:音频(账号开启音频模式下才可以传true) 默认为false
      * @param changeLineCallback 切换失败/成功回调
      */
     @Deprecated
     public void changePlaySource(LiveLineConfig liveLineConfig, LiveLineSwitchListener changeLineCallback)
      /**
      * 切换当前播放模式，会重新加载视频
      *
      * @param playMode 播放模式
      */
     @Deprecated
     public void changePlayMode(Surface surface, PlayMode playMode)   
         /**
          * 切换当前播放模式，会重新加载视频
          *
          * @param playMode 播放模式
          */
     @Deprecated
     public void changePlayMode(PlayMode playMode)    
     ```
   
   - **废弃方法2**
   
     直播DWLive类废弃以下方法
   
     ``` java
     // 设置登录参数
     public void setDWLiveLoginParams(DWLiveLoginListener, LoginInfo)
     // 调用登录
     public void startLogin()
     ```
   
     替换方法为
   
     ``` java
     public void startLogin(LoginInfo,DWLiveLoginListener)
     ```
   
   - **方法废弃3**
     
     回放DWLiveReplay类废弃以下方法
     
     ``` java
     public void setLoginParams(replayLoginListener,replayLoginInfo)
     public void startLogin() 
     ```
     
     替换方法为
     
     ``` java
     public void startLogin(replayLoginInfo, replayLoginListener)
     ```
     
   - **方法废弃4**
     
     下面类标记为已废弃，如遇见import导包错误请使用module中的工具类
     
     ``` java
     com.bokecc.sdk.mobile.live.replay.utils.NetworkUtils;
     ```


## Release3.13.0

1. 更新日志

   1. 直播、在线回放支持切换视频清晰度
   2. 直播、在线回放支持切换线路
   3. 直播、在线回放新增只听音频功能
   4. 播放器、弹幕等样式优化
   5. 问卷支持后进入用户查看
   6. 画笔不显示及崩溃问题修复

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.13.0'
   ```

3. 本地集成

   替换jar包
   dwlivesdk-3.12.0.jar替换为dwlivesdk-3.13.0.jar
   CommonLib-0.1.13.jar替换为CommonLib-0.1.15.jar


4. 废弃的api

  回调类（DWLiveReplayListener.java）

  ``` java
    /**
     * 已废弃  2021年10月08日 之后不再维护
     * 废弃版本 3.13.0
     * 回放播放地址线路数量 该列表中存在音频和视频
     *
     * @param videoLines 视频线路列表
     * @param audioLines 音频线路列表
     */
    @Deprecated
    public void numberOfReceivedLinesWithVideoAndAudio(List<ReplayLineParams> videoLines, List<ReplayLineParams> audioLines);
  ```

  主动调用类(DWLiveReplay.java)

  ``` java
  /**
       * 切换线路   2021年10月08日 之后不再维护
       * 废弃版本   3.13.0
       * @param dwReplayLineConfig disableVideo 视频传true,音频传false(账号开启音频模式下才可以传false)
       *            参数：DwLiveReplayLineParames
       *            参数：lineNum  对应的是
       * {@link com.bokecc.sdk.mobile.live.replay.pojo.ReplayVideoLineParams lines里的值}
       * {@link com.bokecc.sdk.mobile.live.replay.pojo.ReplayAudioLineParams lines里的值}
       *
       * @param changeLineCallback 切换回调
       */
      @Deprecated
      public void changeLineWithPlayParameter(ReplayLineConfig dwReplayLineConfig, ReplayLineSwitchListener changeLineCallback);
  ```



5. 新增的api

  回调类（DWLiveReplayListener.java）该功能是针对回放的切换线路和切换清晰度功能，详细见文档

  ``` java
     /**
       * 视频清晰度列表回调
       * 该api会存在多次回调  切换清晰度、调用开始播放api、从音频切回到视频模式
       *
       * @param videoQuality 视频清晰度列表
       * @param currentQuality 当前清晰度
       */
      public void onHDReceivedVideoQuality(List<ReplayQualityinfo> videoQuality, ReplayQualityinfo currentQuality);
  
      /**
       * 线路回调 包括音频和视频某个清晰度下的线路
       * 该api会存在多次回调  切换清晰度、调用开始播放api、音频/视频模式切换、线路切换
       *
       * @param lines 线路列表
       * @param currentLineIndex 当前线路下标
       */
      public void onHDReceivedVideoAudioLines(List<ReplayLineInfo> lines, int currentLineIndex);
  
      /**
       *  是否开启音频模式
       *  该api会存在多次回调  切换清晰度、调用开始播放api、音频/视频模式切换
       *
       *  @param    hasAudio   HAVE_AUDIO_LINE_TURE 有音频 HAVE_AUDIO_LINE_FALSE 无音频
       */
      public void onHDAudioMode(Audio hasAudio);
  ```

  主动调用类 (DWLiveReplay.java)
  ``` java
     /**
       * 切换清晰度
       *
       * @param quality 清晰度  {@link com.bokecc.sdk.mobile.live.replay.pojo.ReplayQualityinfo quality}
       * @param changeCallBack 回调
       */
      public void changeQuality(int quality, ReplayChangeSourceListener changeCallBack);
  
     /**
       * 切换线路
       * @param index {@link com.bokecc.sdk.mobile.live.replay.DWLiveReplayListener onHDReceivedVideoAudioLines 回调的List<ReplayLineInfo> lines索引 }
       * @param changeCallBack 回调
       */
      public void changeLine(int index,ReplayChangeSourceListener changeCallBack);
  
     /**
       * 音视频模式切换
       * @param playMode 播放模式
       * @param changeCallBack 回调
       */
      public void changePlayMode(PlayMode playMode,ReplayChangeSourceListener changeCallBack);
  ```



## Release3.12.0

1. 更新日志

   1. 支持抽奖2.0，支持显示抽奖名称、查看中奖用户、中奖信息收集等功能
   2. 优化直播播放逻辑
   3. 优化随堂测结束统计页面样式
   4. 修复用户头像显示问题
   5. 修复问卷按钮无法点击问题
   6. 修复线路自动切换相关的问题
   7. 修复讲师频繁断网再恢复网络时异常问题
   8. 修复部分版本运行在android 11设备崩溃问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.12.0'
   ```

3. 本地集成

   替换jar包
   dwlivesdk-3.11.2.jar替换为dwlivesdk-3.12.0.jar

4. 该版本删除的api（DWLive.java），替换方法详见`DWLive.changePlaySource(LiveLineConfig liveLineConfig, LiveLineSwitchListener changeLineCallback)`

   ``` java
   /**
    * 切换播放的线路
    */
   public void changePlaySource(int playSourceIndex)
   
   /**
    * 设置清晰度
    */
   public void setQuality(int qualityIndex)
   ```

5. 修改的api（DWLiveListener.java）
- 原有的sdk初始化完成回调`onInitFinished(int playSourceCount, List<QualityInfo> qualityInfoList)`业务重合，使用下面方法表示直播初始化完成

  ``` java
  /**
   * 初始化完成的回调 （原先回调携带线路和清晰度，现在的清晰度和线路可以从HDReceivedVideoAudioLines回调中获取）
   * 该api可能存在多次回调  比如断网 弱网
   */
  void onInitFinished();
  ```

6. 新增的回调(`DwLiveListener.java`)(详细信息和参数请查看直播接入文档)

   ``` java
   /**
    * 回调音视频线路
    */
   void HDReceivedVideoAudioLines(List<LiveLineVideoParams> videoPlaySource, LiveLineAudioParams      audioPlaySource);
   /**
    * 收到抽奖事件
    */
   void onLottery(LotteryAction lotteryAction);
     
   ```

7. 新增的api(`DwLive.java`)(详细信息和参数请查看直播接入文档)

   ``` java
      /**
        * 抽奖2.0是否去重
        */
   public void setLotteryRepetition(boolean isRepetition)
   
       /**
        * 查询抽奖2.0
        */
   public void queryLotteryStatus()
   
       /**
         * 提交中奖人信息
         */
   public void commitLottery(List<LotteryCommitInfo> commitInfos, String lotteryId, BaseCallback<String>   callback)
   ```

## Release3.11.2

1. 更新日志

1. 修复统计上报问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.11.2'
   ```

3. 本地集成

   替换jar包

   dwlivesdk-3.11.1.jar替换为dwlivesdk-3.11.2.jar

## Release3.11.1

1. 更新日志

   1. 新增私聊屏蔽功能
   2. UI调整(增加重试刷新功能)
   3. 解决一些已知bug
   4. 性能进行一些优化

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.11.1'
   ```
3. 本地集成

   替换jar包

   dwlivesdk-3.11.0.jar替换为dwlivesdk-3.11.1.jar
   CommonLib-0.1.12.jar替换为CommonLib-0.1.13.jar

4. 新增字段(RoomInfo)
   ``` java
   RoomInfo{
      ...
      private String privateChat;//私聊开关，1开启，（默认开启），0：关闭
   }
   ```

## Release3.11.0

1. 更新日志

   1. 直播打卡支持自定义打卡提示语
   2. 直播新增用户进出直播间消息通知
   3. 直播SDK新增用户禁言群发消息通知
   4. 优化SDK播放器定时器机制
   5. 修复长时间按住进度条拖动点，进度条闪动问题

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.11.0'
   ```
3. 本地集成

   替换jar包

   dwlivesdk-3.10.0.jar替换为dwlivesdk-3.11.0.jar
   drmlib.jar替换新的
   httplib.jar替换新的
   注意httplib.jar的引入方式，如果原先是采用下面的方式，可进行删除
   ``` groovy
    android{
       ...
       useLibrary 'org.apache.http.legacy'
       ...
    }
   ```
   engine-0.8.3.1.jar替换为CommonLib-0.1.12.jar

4. 混淆规则增加
   ``` java
   -dontwarn com.hd.http.**
   -keep class com.hd.http.**{ *;}
   -keep public class com.bokecc.common.**{*;}
   ```
5. 新增api
   ``` java
   DWLiveListener{
      ...
      /**
           *    禁言通知,通知给直播间所有人某用户被禁言
           * @param banChatBroadcast
           *    userId 用户id
           *    userName 用户名
           *    userRole 用户角色
           *    userAvatar 用户头像
           *    groupId 分组id
           */
          void HDBanChatBroadcastWithData(BanChatBroadcast banChatBroadcast);
   
          /**
           *  用户进出通知
           * @param userJoinExitAction
           *    userId 用户id
           *    userName 用户名
           *    userRole 用户角色
           *    userAvatar 用户头像
           *    groupId 分组id
           *    role 接收端列表  1-讲师；2-助教；3-主持人；4-观看端
           *    prefixContent 自定义内容前缀
           *    suffixContent 自定义内容后缀
           *    type 类型
           *        {@link UserRedminAction.ActionType#HDUSER_IN_REMIND} 进入直播间
           *        {@link UserRedminAction.ActionType#HDUSER_OUT_REMIND}   退出直播间
           */
          void HDUserRemindWithAction(UserRedminAction userJoinExitAction);
   }
   ```

## Release3.10.0

1. 更新日志

   1.回放demo回放新增记忆播放功能
   2.新增视频加载的网络速度(直播、在线回放)
   3.直播demo随堂测、答题卡新增收起功能及逻辑优化
   4.优化文档组件，提升稳定性

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.10.0'
   ```

3. 本地集成

   替换jar包

   dwlivesdk-3.9.2.jar替换为dwlivesdk-3.10.0.jar

4. 注意事项

    1. 收到随堂测onPracticePublish(PracticeInfo info),在PracticeInfo中增加字段

        ``` java
           public class PracticeInfo {
             ...
             /**
              *  已提交的答案id列表
              */
             private List<SubmitOption> submitRecord;
             ...
           }
        ```

    2. 随堂测统计回调增加字段

        ``` java
        public class PracticeStatisInfo {
           // 停止时间
           private int stopTime;
        }
        ```
    3. 在线回放增加视频缓存网速监听
     ``` java
           /**
             * DwLivePlayer
             * 设置视频缓存网络监听
             * @param speedListener
             */
         public void setSpeedListener(ReplaySpeedListener speedListener);
    
         public interface ReplaySpeedListener{
            /**
              * 实时回调视频的缓存网速
              * @param speed 网速 以byte为单位
              */
            void onBufferSpeed(float speed);
         }
     ```
     4. 直播增加视频缓存网速监听
     ``` java
         /**
         * DwLivePlayer
         * 设置视频缓存网络监听
         * @param speedListener
         */
         public void setSpeedListener(LiveSpeedListener speedListener);
    
         public interface LiveSpeedListener{
            /**
              * 实时回调视频的缓存网速
              * @param speed 网速 以byte为单位
              */
            void onBufferSpeed(float speed);
         }
     ```


## Release3.9.2

**1. 更新日志**

1. 新增ppt缩放模式
2. 兼容Android Q，替换文件的存储路径
3. 修复直播过程中断网再恢复网络时无法恢复直播问题
4. 优化在线回放时占用的内存无法释放的问题
5. demo层新增离线回放播放完成界面
6. demo层解决随堂测重复弹出界面的问题
7. 修复已知bug，提高稳定性

**2. 远端集成**

``` groovy
api 'com.bokecc:dwlivesdk:3.9.2'
```

**3. 本地集成**

1. dwlivesdk-{版本}.jar替换为dwlivesdk-3.9.2.jar 

**4. 注意事项**

1. 新增ppt缩放模式

   建议：缩放类型CROP_CENTER在有极速动画的直播间里会有显示错位的问题不建议使用

   DWLive类优化方法setDocScaleType(DocView.ScaleType type)

   ``` java
      /**
        * 设置文档缩放模式
        *
        * @param type type  
        *      ScaleType:CENTER_INSIDE:原尺寸, FIT_XY:铺满全屏, CROP_CENTER:等比缩放并裁剪多余部分
        */
       public void setDocScaleType(DocView.ScaleType type)
   ```

   

2. 兼容Android Q

   Android Q 在外部存储设备中为每个应用提供了一个“隔离存储沙盒”（例如 /sdcard/包名）。任何其他应用都无法直接访问您应用的沙盒文件。

   如果不想对demo层进行修改可以在manifest的application节点下添加
   ``` java
   android:requestLegacyExternalStorage="true"
   ```
   
   建议按照google的开发文档修改路径，demo层修改离线下载文件路径，兼容Android Q，集成SDK时需要做出相应修改，详细见demo层FileUtil类getCCDownLoadPath()方法
   
   

## Release3.9.1

**1. 更新日志**

1. 修复3.9.0离线回放旧数据无法播放的问题

**2. 远端集成**

``` java
api 'com.bokecc:dwlivesdk:3.9.1'
```

**3. 本地集成**

1. dwlivesdk-{版本}.jar替换为dwlivesdk-3.9.1.jar 


**4. 注意事项**

1. 离线回放大数据分离对旧数据的兼容

   为了解决录播时录播文档数据很大导致导致离线回放打开较慢的问题，因此提出该方案优化离线回放的打开速度

   **修改**

   demo中UnZiper类将`SupZipTool.decompressZipDec`替换为`SupZipTool.decompressZipDecAndSplitFile`方法，参数不变

   **说明**

   `decompressZipDec`方法是对ccr文件的解压，方法依旧可用，但无法进行大文件优化

   `decompressZipDecAndSplitFile`方法是在解压之后进行大数据分离，建议使用该方法

   默认兼容旧数据，新数据按照大文件默认分离的方式 

## Release3.9.0

1. 更新日志

   1. 直播新增广播消息删除功能；
   2. 直播新增播放失败自动切换线路重试机制；
   3. 回放新增回放音频功能；
   4. 直播在线人数监听增加自动返回方法；
   5. 回放、离线回放demo新增手势拖动功能；
   6. demo 新增小窗口关闭功能
   7. demo 默认启用直播后台播放； 
   8. 优化回放播放重试机制；
   9. 修复离线文档显示延迟问题
   10. 修复离线文档过大时部分手机oom崩溃问题
   11. 修复播放文档和视频切换显示异常的问题 

2. 远端集成

   ``` groovy
   api 'com.bokecc:dwlivesdk:3.9.0'
   ```

3. 本地集成

   替换jar包

   dwlivesdk-3.8.1.jar替换为dwlivesdk-3.9.0.jar 

4. 注意事项

   1. DWLiveListener新增广播回调，onBroadcastMsg(String msg)方法已标记为过时

      ``` java
                                                                                         
      @Deprecated  // 标记为过时                                                                             
      void onBroadcastMsg(String msg);                                                            
                                                                                                  
      /**                                                                                         
       * 收到广播信息（实时）                                                                               
       *                                                                                          
       * @param msg 广播消息实体                                                                        
       */                                                                                         
      void onBroadcastMsg(BroadCastMsg msg);                                                      
                                                                                                  
      /**                                                                                         
       * 收到广播信息操作功能                                                                               
       *                                                                                          
       * @param action 广播操作信息类                                                                        
       *               BroadCastAction                                                            
       *               ｛                                                                          
       *                   action：操作 1.删除                                                             
       *              	 id：广播ID                                                                    
       *               ｝                                                                          
       */                                                                                         
      void onBroadcastMsgAction(BroadCastAction action);                                          
      ```

   2. DWLiveReplayListener方法增加回调

      ``` java
      /**
       * 回放播放地址线路数量 该列表中存在音频和视频                                                               
       * @param videoLines 视频线路列表                                                                       
       * @param audioLines 音频线路列表                                                                       
       */
      public void numberOfReceivedLinesWithVideoAndAudio(List<ReplayLineParams> videoLines, List<ReplayLineParams> audioLines);
      ```
   
    3. DWLiveReplay新增切换线路方法changeLineWithPlayParameter,通过该方法切换      音频或者视频线路
   
      ``` java
      /**                                                                                               
        * 切换线路                                                                                             * @param dwReplayLineConfig                                                                         
        *        disableVideo 视频传true,音频传false(账号开启音频模式下才可以传false)
                 DwLiveReplayLineParames-->lineNum   如果是2 传递0或者1  
        * @param changeLineCallback 切换回调
        */                                            
      public void changeLineWithPlayParameter(ReplayLineConfig config, ReplayLineSwitchListener listener)
      ```
   
   4. 关于离线回放旧数据的兼容请升级到3.9.1

## Release3.8.1

**1. 更新日志**

1. 新增直播开始回调监听
2. 修复SDK登录回调两次的问题
3. 修复直播观看画笔延迟的问题
4. 修复demo已知问题,提升稳定性 

**2. 升级maven地址**

``` java
api 'com.bokecc:dwlivesdk:3.8.1'
```

**3. 需要替换的jar和so**

替换jar
``` java
hdplayer.jar  （替换） 播放器核心 
```

替换so文件

```
libjingle_peerconnection_so.so  (替换) 连麦相关库
```

**4. 注意事项**

1. DWLiveListener新增上课回调

   ``` java
       /**
        * 推流开始，执行开始上课逻辑
        */
       public void onStreamStart();
   
   ```


## Release3.8.0 

1、更新日志

1. 兼容AndroidX；
2. 支持arm64架构；
3. 新增使用maven集成方式；
4. 新增回放线路切换；
5. 新增跑马灯功能；
6. 新增课件水印功能；
7. 新增直播倒计时功能；
8. 回放翻页列表新增文档备注；
9. demo新增是否显示弹幕；
10. demo新增是否显示在线人数；
11. demo随堂测支持判断题；
12. demo文档适合宽度支持滚动查看；
13. demo新增直播未开始和结束提示语；
14. 优化连麦稳定性； 
15. 优化弹窗提示语；
16. 优化问答模块性能；
17. 优化socketio兼容性；
18. 优化文档加载回调及重试；
19. 修复回放拖拽回调异常问题；
20. 修复bug，提升稳定性；

2、需要替换的jar和so

如需要兼容arm64请导入相应架构下的动态库so文件

需要替换项目下所有的jar和动态库so文件

详细说明如下

jar包替换说明

``` java
drmlib.jar    （需要替换） 解决部分加密视频无法播放的问题
dwlivesdk.jar （需要替换） 直播核心库
engine-0.8.3.1.jar （0.8.3->0.8.3.1需要升级）soketIO稳定性和兼容性处理
rtc.jar       （需要替换） 连麦优化
tbs_sdk.jar   （需要替换） x5内核升级，支持armv8，提高稳定性，兼容低版本

libjingle_peerconnection.jar （不需要替换）

httplib.jar   （新增） org.apache.http.legacy库的封装库，详细见文档
hdplayer.jar  （新增） 播放器核心解耦，可替换ijkplayer
```

动态库so替换说明，如需支持armv8，请拷贝相应目录下的so文件

``` java
//（需要替换）解决部分加密视频无法播放的问题
libdwmedia.so 
//（需要替换）解决连麦兼容问题
libagora-crypto.so  
libagora-rtc-sdk-jni.so  
    
// 以下armv7可不用替换，如需要支持armv8需要拷贝相应的so包
libsupzip.so  
libijkffmpeg.so 
libijkplayer.so
libijksdl.so
libjingle_peerconnection_so.so

// （可移除）如需要升级x5内核，需移除该so库，sdk默认升级最新的x5内核
liblbs.so
```

3、新增功能

- 线路切换

  DWLiveReplay新增方法

``` java
   /**
     * 切换线路 对应的是{@link com.bokecc.sdk.mobile.live.replay.DWLiveReplayListener numberOfReceivedLines 如果是2 传递0或者1}
     *
     * @param line  切换的线路数
     * @param changeLineCallback  切换回调
     */
  public void changeLineWithNum(int line,ChangeLineCallback changeLineCallback)
```

​      DWLiveReplayListener新增回调

``` java
   /**
     * 回放播放地址线路数量
     * @param lines 线路数量
     */
    public void numberOfReceivedLines(int lines)
```

## Release3.7.3

1、更新日志

1. 优化文档加载机制，提高弱网兼容性；
2. 优化视频解码机制，提升加载速度；
3. 优化内存控制，提升稳定性； 
4. 修复demo聊天输入框、表情、超链接解析问题；

## Release3.7.2
1、更新日志

   1. 修复demo在非文档模式下聊天不显示的问题
   2. 优化数据库兼容问题
   3. 修复文档在部分动画ppt不显示

## Release3.7.1

需要注意的事情如下：

1、数据库配置

   从3.5.0开始，我们引入ObjectBox数据库优化SDK内存，您需要在项目中做如下配置
``` groovy
buildscript {
    repositories {
        jcenter()
        google()
        //必须配置
        maven { url 'https://jitpack.io' }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.1'
        //必须配置
        classpath "io.objectbox:objectbox-gradle-plugin:2.3.4"
    }
}
allprojects {
    repositories {
        jcenter()
        google()
        //必须配置
        maven { url 'https://jitpack.io' }
    }
}
```
   在App的build.gradle文件中添加如下配置
``` groovy
apply plugin: 'com.android.application'
//必须配置
apply plugin: 'io.objectbox'
android {
    defaultConfig {
         ndk {
             //必须这样配置
            abiFilters 'armeabi-v7a'
        }
    }
}
```
2、新增功能

   1. 新增获取在线讲师和助教列回调
```
   DWLiveListener # void onOnlineTeachers(List<TeacherInfo> infoList);
```
   2. 新增获取直播间设置方法
```
    void onRoomSettingInfo(SettingInfo info);
```
   3. 视频截图方法
```
    mTextureView.getBitmap()
```
3、更新日志

   1. 新增获取在线讲师和助教列表方法；
   2. 新增获取直播间设置方法；
   3. demo新增视频截图方法
   4. 优化回放数据库，解决数据库冲突问题
   5. 修复学生提前进入直播间，无法看到老师视频的问题

## Release3.7.0
需要注意的事情如下：

1、 数据库配置

   从3.5.0开始，我们引入ObjectBox数据库优化SDK内存，您需要在项目中做如下配置
```
buildscript {
    repositories {
        jcenter()
        google()
        //必须配置
        maven { url 'https://jitpack.io' }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.1'
        //必须配置
        classpath "io.objectbox:objectbox-gradle-plugin:2.3.4"
    }
}
allprojects {
    repositories {
        jcenter()
        google()
        //必须配置
        maven { url 'https://jitpack.io' }
    }
}
```

在App的build.gradle文件中添加如下配置
```
apply plugin: 'com.android.application'
//必须配置
apply plugin: 'io.objectbox'
android {
    defaultConfig {
         ndk {
             //必须这样配置
            abiFilters 'armeabi-v7a'
        }
    }
}
```
2、新增功能

   1. 新增获取在线讲师和助教列回调
``` java
DWLiveListener # void onOnlineTeachers(List<TeacherInfo> infoList);
```
   2. 新增获取直播间设置方法
``` java
void onRoomSettingInfo(SettingInfo info);
```
   3. 视频截图方法

``` java
mTextureView.getBitmap()
```

3、更新日志

   1. 新增获取在线讲师和助教列表方法；
   2. 新增获取直播间设置方法；
   3. demo新增视频截图方法
   4. 优化回放数据库，解决数据库冲突问题
   5. 修复学生提前进入直播间，无法看到老师视频的问题

## Release3.6.0
需要注意的事情如下：

1、数据库配置

   从3.5.0开始，我们引入ObjectBox数据库优化SDK内存，您需要在项目中做如下配置
``` groovy
buildscript {
    repositories {
        jcenter()
        google()
        //必须配置
        maven { url 'https://jitpack.io' }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.1'
        //必须配置
        classpath "io.objectbox:objectbox-gradle-plugin:2.3.4"
    }
}
allprojects {
    repositories {
        jcenter()
        google()
        //必须配置
        maven { url 'https://jitpack.io' }
    }
}
```
   在App的build.gradle文件中添加如下配置
``` groovy
apply plugin: 'com.android.application'
//必须配置
apply plugin: 'io.objectbox'
android {
    defaultConfig {
         ndk {
             //必须这样配置
            abiFilters 'armeabi-v7a'
        }
    }
}
```
2、Jar包So配置

   项目提供的Jar包和So都是必须配置的，如有特殊需求可咨询客服。

3、资源文件配置

您需要将SDK包中的assets文件夹放到您的项目中，注意不要重命名和更改assets文件夹中的结构文件夹的目录应该是这样的assets/dp/dp.

4、新增功能

- 记忆播放功能

  SDK内部会存储您视频播放的位置，因此，在您播放视频的时候，如有记忆播放的功能，需要在Start之前，提前将播放时间点传递给SDK

  ``` java
  //时间点单位是毫秒
  DWLiveReplay # setLastPosition(long position);
  ```

- 重试功能

  由于各种其他可能的原因，视频播放是有可能出现错误的，您应该监听这个错误，通过对播放器设置setOnErrorListener。当播放错误时，您可以收到监听回调。当播放错误时，您可以调用重试API尝试重新播放。

  ``` java
  DWLiveReplay #  retryReplay(long position, boolean updateStream);
  ```

  这个API需要两个参数，第一个是重试的位置，因为SDK内部不会记录您实时播放的位置，因此您在重试时将您当前播放位置传递给SDK，第二个参数是，是否更新流地址重试，我们建议您这样做，当出现播放错误时，你可以不更新流地址进行重试，如果重试2或者3次后，仍然无法播放，您可以为用户显示重试提示信息，当用户点击重试后，进行更新流地址重试。

- 缓冲超时时间

  在网络环境很差的情况下，我们可以设置缓冲超时时间，当缓冲超时后，SDK会上报给您播放错误信息，这样您可以进行重试播放请求，以减少用户不必要的等待

  ```
  DWReplayPlayer # void setBufferTimeout(int second)
  ```

- 打卡功能

  ``` java
  //设置监听打卡回调
  DWReplayPlayer #setPunchCallback(BaseCallback<PunchAction> punchCallback);
  //提交打卡信息
  DWReplayPlayer # void commitPunch(String punchId, final BaseCallback<PunchCommitRespone> callback)
  //获取当前随堂测
  DWReplayPlayer # getPracticeInformation()
  ```

5、 更新日志

   - 优化文档加载机制
   - 优化视频回放
   - 随堂测2.0
   - 打卡功能

## Release3.5.1
需要注意的事情如下：

 1. 新增加的jar包和so
    - rtc.jar
    - libagora-rtc-sdk-jni.so
    - libagora-crypto.so


 2. 新增加的配置
   - 在工程的build.gradle文件中加入以下配置
``` groovy
  buildscript {
      repositories {
          jcenter()
          google()
          //新增加
          maven { url 'https://jitpack.io' }
      }
      dependencies {
          classpath 'com.android.tools.build:gradle:3.5.1'
          //新增加的
          classpath "io.objectbox:objectbox-gradle-plugin:2.3.4"
          // NOTE: Do not place your application dependencies here; they belong
          // in the individual module build.gradle files
      }
  allprojects {
      repositories {
          jcenter()
          google()
          //必须配置
          maven { url 'https://jitpack.io' }
      }
  }
```
   - 在App的build.gradle文件中添加如下配置
``` groovy
  apply plugin: 'com.android.application'
  //必须配置
  apply plugin: 'io.objectbox'
  android {
      defaultConfig {
           ndk {
               //必须配置
              abiFilters 'armeabi-v7a'
          }
      }
```
 1. 需要替换的jar
   - dwlivesdk.jar
 2. 连麦API调整
      第二个参数remoteRender 由SurfaceViewRenderer类型变换成CCRTCRender类型

``` java
initRtc(SurfaceViewRenderer localRender, CCRTCRender remoteRender)
```

   1. SDK更新日志
   1. 回放内存优化
   2. 优化SDK稳定性

## Release3.4.5
需要注意的事情如下：

 1.  升级需要替换的库

替换jar:
   - dwlivesdk.jar
 1. SDK更新日志
   1. 优化播放器播放完成后,Seek无法暂停的问题
   2. 优化SDK稳定性

## Release3.4.4
需要注意的事情如下：

 1.  升级需要替换的库
      替换jar:
   - dwlivesdk.jar
 2. 新增混淆配置
```
ndk {
        abiFilters 'armeabi-v7a'
}
```
 1. SDK更新日志
    1. RoomInfo新增直播开始时间字段
    2. 优化直播回放文档加载机制
    3. 优化回放文档画笔加载机制
    4. 优化回放视频加载重试机制
    5. 优化直播流断网重连机制
    6. 修复bug，优化SDK稳定性


7. Demo更新日志

    1. 增加聊天图片点击放大
    2. 增加聊天URL超链接跳转

## Release3.4.3
HD云直播播放SDK升级到3.4.3版本的时候，需要注意的事情如下：

1. 升级直播SDK需要替换的库

- 替换jar包：

     dwlivesdk.jar
     libjingle_peerconnection.jar （连麦）
     tbs_sdk_thirdapp_v4.3.0.1020.jar（X5内核jar）

- 增加gradle配置

  ``` java
   api 'com.squareup.okhttp3:okhttp:3.10.0'
   api('io.socket:socket.io-client:0.8.3') {
          exclude group: 'org.json', module: 'json'
        }
   api files('libs/dwlivesdk.jar')
   implementation files('libs/libjingle_peerconnection.jar')
   implementation files('libs/tbs_sdk_thirdapp_v4.3.0.1020.jar')
  ```

- 替换so包：
     libijkffmpeg.so（播放器）
     libijkplayer.so（播放器）
     libijksdl.so（播放器）
     libjingle_peerconnection_so.so （连麦）
     libsupzip.so （离线回放包解压库）
     liblbs.so （X5内核native库）

2.  注意事项

   本版本SDK只提供一个cpu平台的so文件：armeabi。
   建议在app的buildgradle里面的defaultConfig中配置so库cpu平台：
```
ndk {
    abiFilters 'armeabi'
}
```
3. SDK改动及新特性

- 优化回放观看DWReplayPlayer设置方法

  更新视频的Surface

  ``` java
    //更新surface画面，用于替换原有的setSurface
    DWReplayPlayer#updateSurface(Surface surface)
  ```

- DWLiveReplay播放流流程优化

  开始播放参数不是必要参数，原有的start需要传递一个surface作为参数，使start api和surface的生命周期建立了关联，接入变得复杂。

  ``` java
  DWLiveReplay#start();
  //该参数填null
  DWLiveReplay#start(Surface surface);
  ```

   - 视频播放暂停，使用新的puase api替换原有的Stop api，因为原有的Stop会释放播放器，导致恢复视频时会重新请求网络。

     ```
      //暂停功能使用pause api替代原有的stop API
       DWLiveReplay# pause();
     ```
   - 增加错误SDK错误监听回调,回调监听可以监听当webview加载是否成功

     ```
       DWLiveReplay# setReplayErrorListener(ReplayErrorListener listener);
     ```
   - 新增文档恢复api,该api可以在文档出错的情况下，重试加载恢复文档dp

     ```
       DWLiveReplay# recoverDoc()
     ```
4. 新增特性

   - 增加文档加载异常重试机制
   - 增加视频加载异常重试机制
   - 增加视频播放错误回调
5. 新增混淆配置

   SDK已经混淆过。如app开启混淆请将如下配置放到项目中
```
-keep public class com.bokecc.sdk.mobile.**{*;}
-keep public class tv.**{*;}
-keep public interface com.bokecc.sdk.mobile.**{*;}
-keep class org.webrtc.**{*;}
-keep class com.intel.webrtc.base.**{*;}
-keep interface com.intel.webrtc.base.**{*;}
-keep class com.tencent.smtt.**{*;}
-keep interface com.tencent.smtt.**{*;}
```
6. 更新日志

   1. 优化在线回放流程，解绑播放流程API和surface生命周期。
   2. 增加文档、视频加载异常重试机制；
   3. 修复暂停播放到恢复时，偶现播放器状态异常的bug；
   4. 修复已知crash问题，提升稳定性；

## Release3.4.2
需要注意的事情如下：

1. 需要替换的库

- 替换jar包：
     dwlivesdk.jar
     libjingle_peerconnection.jar （连麦）
     tbs_sdk_thirdapp_v4.3.0.1020.jar（X5内核jar）

- 增加gradle配置

  ``` groovy
   api 'com.squareup.okhttp3:okhttp:3.10.0'
   api('io.socket:socket.io-client:0.8.3') {exclude group: 'org.json', module: 'json'}
   api files('libs/dwlivesdk.jar')
   implementation files('libs/libjingle_peerconnection.jar')
   implementation files('libs/tbs_sdk_thirdapp_v4.3.0.1020.jar')
  ```

- 替换so包：
     libijkffmpeg.so（播放器）
     libijkplayer.so（播放器）
     libijksdl.so（播放器）
     libjingle_peerconnection_so.so （连麦）
     libsupzip.so （离线回放包解压库）
     liblbs.so （X5内核native库）

2. 注意事项

   本版本SDK只提供一个cpu平台的so文件：armeabi。
   建议在app的buildgradle里面的defaultConfig中配置so库cpu平台：
```
ndk {
    abiFilters 'armeabi'
}
```
3. SDK改动及新特性

- 优化回放观看DWReplayPlayer设置方法

   - 更新视频的Surface
```
  //更新surface画面，用于替换原有的setSurface
  DWReplayPlayer#updateSurface(Surface surface)
```
- DWLiveReplay播放流流程优化

   - 开始播放参数不是必要参数，原有的start需要传递一个surface作为参数，使start api和surface的生命周期建立了关联，接入变得复杂。
```
DWLiveReplay#start();
//该参数填null
DWLiveReplay#start(Surface surface);
```
   - 视频播放暂停，使用新的puase api替换原有的Stop api，因为原有的Stop会释放播放器，导致恢复视频时会重新请求网络。
```
  //暂停功能使用pause api替代原有的stop API
  DWLiveReplay# pause();
```
   - 增加错误SDK错误监听回调,回调监听可以监听当webview加载是否成功
```
  DWLiveReplay# setReplayErrorListener(ReplayErrorListener listener);
```
   - 新增文档恢复api,该api可以在文档出错的情况下，重试加载恢复文档dp
```
  DWLiveReplay# recoverDoc()
```
4. 新增特性

   - 增加文档加载异常重试机制
   - 增加视频加载异常重试机制
   - 增加视频播放错误回调
5. 新增混淆配置

SDK已经混淆过。如app开启混淆请将如下配置放到项目中

```
-keep public class com.bokecc.sdk.mobile.**{*;}
-keep public class tv.**{*;}
-keep public interface com.bokecc.sdk.mobile.**{*;}
-keep class org.webrtc.**{*;}
-keep class com.intel.webrtc.base.**{*;}
-keep interface com.intel.webrtc.base.**{*;}
-keep class com.tencent.smtt.**{*;}
-keep interface com.tencent.smtt.**{*;}
```

6. 更新日志

   1. 优化在线回放流程，解绑播放流程API和surface生命周期。
   2. 增加文档、视频加载异常重试机制；
   3. 修复暂停播放到恢复时，偶现播放器状态异常的bug；
   4. 修复已知crash问题，提升稳定性；

## Release3.4.1
需要注意的事情如下：

1. 升级直播SDK需要替换的库

- 替换jar包：

  dwlivesdk.jar

- 替换so包：
     - libjingle_peerconnection.jar （连麦）
     - libijkffmpeg.so（播放器）
     - libijkplayer.so（播放器）
     - libijksdl.so（播放器）
     - libjingle_peerconnection_so.so （连麦）
     - libsupzip.so （离线回放包解压库）
     - liblbs.so （X5内核native库）

2. 注意事项

本版本SDK只提供一个cpu平台的so文件：armeabi。
建议在app的buildgradle里面的defaultConfig中配置so库cpu平台：

```
ndk {
        abiFilters 'armeabi'
}
```
3. 更新日志

      1. 修复回放进出日志问题


## Release3.4.0
需要注意的事情如下：

1. 升级直播SDK需要替换的库

- 替换jar包：dwlivesdk.jar

- 替换so包：
     - libjingle_peerconnection.jar （连麦）
     - libijkffmpeg.so（播放器）
     - libijkplayer.so（播放器）
     - libijksdl.so（播放器）
     - libjingle_peerconnection_so.so （连麦）
     - libsupzip.so （离线回放包解压库）
     - liblbs.so （X5内核native库）

2. 注意事项

   本版本SDK只提供一个cpu平台的so文件：armeabi。
   建议在app的buildgradle里面的defaultConfig中配置so库cpu平台：
   ndk {
      abiFilters 'armeabi'
   }
3. SDK改动及新特性

- 优化直播观看DWLive设置播放参数方法

  以前设置直播设置播放参数的方法为：

  ```
  // 设置播放参数
  DWLive.setDWLivePlayParams(DWLiveListener dwLiveListener, Context context, DocView docView, IjkMediaPlayer player)
  ```

  本版本开始，除了上面的方法，我们新增了如下方法：

  设置直播播放器方法：

  ``` java
  // 设置直播播放器
  DWLive.setDWLivePlayer(IjkMediaPlayer player)
  ```

  设置直播文档控件方法

  ```
  // 设置直播文档控件
  DWLive.setDWLivePlayDocView(DocView docView)
  // 设置播放参数  回调 + 上下文 （调用播放逻辑之前设置好）DWLive.setDWLivePlayParams(DWLiveListener dwLiveListener, Context context)
  ```

  DWLive.setDWLivePlayParams方法和后面新增的三个方法作用是相同的，新增加的三个方法是为了提升了使用SDK时的灵活性。

- 优化在线回放DWLiveReplay设置播放参数的方法

   以前设置直播设置播放参数的方法为：

  ```
  // 设置播放参数
  DWLiveReplay.setReplayParams(DWLiveReplayListener replayListener, Context context, IjkMediaPlayer player, DocView docView)
  ```

  本版本开始，除了上面的方法，我们新增了如下方法：

  设置回放播放器的方法

  ```
  // 设置回放播放器
  DWLiveReplay.setReplayPlayer(IjkMediaPlayer player)
  ```

  设置回放文档控件

  ```
  // 设置回放文档控件
  DWLiveReplay.setReplayDocView(DocView docView) 
  ```

  设置回放播放参数（回调+上下文）

  ```
  // 设置播放参数  回调 + 上下文 （调用播放逻辑之前设置好）
  DWLiveReplay.setReplayParams(DWLiveReplayListener replayListener, Context context) 
  ```

- 文档展示控件使用X5内核

  本版本开始，展示文档的空间使用X5内核，更稳定，内存方面更友好，需要引入tbs_sdk_thirdapp_v4.3.0.1020.jar包。

   
4. 优化在线回放逻辑

   本版本对在线回放逻辑进行了优化，提高了在线回放的稳定性
4. Demo改动及新特性

- Demo集成离线回放

   本版本开始，观看直播、在线回放、离线回放功能都集成到livemodule，并且在同一个Demo上进行展示。未来可以更加方便的集成和使用CC云直播相关的业务。

- 优化离线回放下载功能

  本版本重构了离线回放的下载功能，对之前localreplaydemo的下载模块进行了重写，目前经测试本版本的下载功能在性能和稳定性方面都和之前相比有较大的提升。

- 新增在线回放&离线回放同页面播放Module及Demo

     本版本将在线回放和离线回放的页面进行了整合，并提供了相应的module空间及Demo页面展示。
     其中：
     module下的目录为：com.bokecc.livemodule.replaymix.*。
     demo下的目录为：com.bokecc.dwlivemoduledemo.activity.extra.ReplayMixPlayActivity
     如果实际使用时有离线回放和在线回放且需要同页切换的场景的，可以参考此进行开发。

5. 更新日志

   1. Demo 集成离线回放功能
   2. Demo优化离线回放下载模块
   3. Demo新增在线回放&离线回放同页面播放Module及Demo
   4. SDK 优化直播观看DWLive设置播放参数的方法
   5. SDK 优化在线回放DWLiveReplay设置播放参数的方法
   6. SDK 文档展示控件默认使用X5内核加载
   7. SDK 优化在线回放相关逻辑，提高稳定性

## Release3.3.0
   需要注意的事情如下：
1. 升级直播SDK需要替换的库

   替换jar包：dwlivesdk.jar
   如果使用的是2.6.0版本之前的SDK升级到此版本，就不仅仅需要替换dwlivesdk.jar，还需替换以下文件：
   - libjingle_peerconnection.jar （连麦）
   - libijkffmpeg.so（播放器）
   - libijkplayer.so（播放器）
   - libijksdl.so（播放器）
   - libjingle_peerconnection_so.so （连麦）
   - libsupzip.so （离线回放包解压库）
2. 注意事项

   本版本SDK只提供三个cpu平台的so文件：arm64-v8a、armeabi-v7a、x86。
   在使用的时候，请根据自己的CPU平台配置进行自行调整。
3. SDK改动及新特性

- 新增随堂测功能

   主动获取随堂测的方法在DWLive类中，方法为：

     - 获取当前实时的随堂测：getRealTimePractice()
       调用主动获取方法或者监听到主播端发布随堂测，就会触发接受随堂测题目的回调。
       接收随堂测题目的方法为回调功能，相关类为DWLiveListener，方法为：
     - 收到随堂测发布的事件：onPracticePublish(PracticeInfo info)
       答完随堂测题目后，可以通过发送随堂测结果的方法来提交答案。
       提交随堂测结果的方法为主动方法，在DWLive类中，方法为：
     - 提交随堂测结果：sendPracticeAnswer(String practiceId, ArrayList answerOptions)
       提交后会通过DWLiveListener下的onPracticeSubmitResult回调随堂测提交结果。
     - 收到随堂测结果回调事件：onPracticeSubmitResult(PracticeSubmitResultInfo info)
       获取当前随堂测的统计信息，可调用DWLive下的getPracticeStatis(String practiceId)，此方法为主动调用方法。
     - 获取随堂测统计信息：getPracticeStatis(String practiceId)
       调用获取统计信息的方法后，会通过DWLiveListener的onPracticStatis(PracticeStatisInfo info)方法回调当前的随堂测统计信息：
     - 收到随堂测统计信息：onPracticStatis(PracticeStatisInfo info)

- SDK 新增奖励发送事件回调

  回调事件在DWLiveListener，方法为onPrizeSend(int type, String viewerId, String viewerName)

  ``` java
   /**
       * 收到奖品发送事件
       *
       * @param type 奖品类型: 1 奖杯 2 其他(后续扩展使用)
       * @param viewerId  观看者的id
       * @param viewerName  观看者的昵称
       */
      public void onPrizeSend(int type, String viewerId, String viewerName);
  ```

4. Demo改动及新特性

- 新增多个Demo模版页，对接更方便

     位置在：dwlivemoduledemo的com.bokecc.dwlivemoduledemo.activity.extra目录，其中：

     - LivePlayClassicActivity 为直播普通布局模式
     - LivePlayDocActivity 为直播文档大窗、视频小窗布局模式
     - ReplayPlayDocActivity 为在线回放文档大窗、视频小窗布局模式

- 直播回放页，聊天内容展示随视频时间同步展示

     本版本针对直播回放，增加了聊天内容随时间同步的机制。
     详见ReplayChatComponent类，可以通过设置REPLAY_CHAT_FOLLOW_TIME开关来切换不同的机制。

-  直播支持随堂测功能

     包含 随堂测接受展示、随堂测答题提交、随堂测结果展示、随堂测统计展示。
     封装的界面控件目录在：com.bokecc.livemodule.live.function.practice

- 新增奖杯功能

  本版本新增奖杯发送功能，客户端可以在随堂测统计页排行榜处发送，也可以在主播端的用户列表处发送，需要主播端5.0及以上版本。
  封装的界面控件目录在：com.bokecc.livemodule.live.function.prize
  相关回调接口为：onPrizeSend(final int type, final String viewerId, final String viewerName)
  这里onPrizeSend为奖品回调接口，目前定义的type == 1的时候为奖杯。

 

5. 更新日志

   1. SDK & Demo 支持随堂测
   2. SDK & Demo 支持奖杯功能
   3. Demo 在线回放聊天增加随时间同步展示的逻辑
   4. Demo 新增多个播放模版页

## Release3.2.1 
   下面说明一下之前的CC直播SDK升级到3.2.1版本的时候，需要注意的事情
1. 升级需要替换的库

如果是2.6.0及以后的版本升级到3.2.1版本，只需要替换dwlivesdk.jar。

如果是2.6.0之前的版本，就需要做以下操作：

- 替换jar包

     dwlivesdk.jar （必须替换）
     libjingle_peerconnection.jar （必须替换）

- 替换so包

     libijkffmpeg.so （必须替换）
     libijkplayer.so （必须替换）
     libijksdl.so （必须替换）
     libjingle_peerconnection_so.so （必须替换）

- 新增so包

  libsupzip.so （使用SDK提供的解压CCR文件的方法需导入此so包）

2. 注意事项

​		本版本直播观看和在线观看SDK只提供了三个cpu平台的so文件：arm64-v8a、armeabi-v7a、x86，2.6.0版本之前提供的都是四个平台的，如果是2.6.0之前的版本升级到本版本的话需要稍微调整一下相关配置。
本版本离线观看的SDK和2.8.0版本之前比，只提供了两个cpu平台的so文件：armeabi-v7a、x86，2.8.0版本是三个平台的，升级时需要稍微调整一下相关配置。

3. SDK改动及新特性

- SDK优化文档模块，新增设置文档空白区域背景色方法

   本版本优化了文档功能，对文档模块的逻辑进行了优化，并新增了设置文档空白区域背景色方法DWLive.changeDocBackgroundColor。

4. Demo改动及新特性

- 新Demo直播观看页逻辑优化

  对新Demo的直播观看页的逻辑进行了优化。

5. 更新日志

   1. SDK优化文档模块，新增设置文档空白区域背景色方法
   2. 新Demo直播观看页逻辑优化



## Release3.2.0 
下面说明一下之前的CC直播SDK升级到3.2.0版本的时候，需要注意的事情
1. 升级需要替换的库

如果是2.6.0及以后的版本升级到3.2.0版本，只需要替换dwlivesdk.jar。

如果是2.6.0之前的版本，就需要做以下操作：

- 替换jar包

  dwlivesdk.jar （必须替换）
  libjingle_peerconnection.jar （必须替换）

- 替换so包

  libijkffmpeg.so （必须替换）
  libijkplayer.so （必须替换）
  libijksdl.so （必须替换）
  libjingle_peerconnection_so.so （必须替换）

- 新增so包

  libsupzip.so （使用SDK提供的解压CCR文件的方法需导入此so包）

2. 注意事项

​		本版本直播观看和在线观看SDK只提供了三个cpu平台的so文件：arm64-v8a、armeabi-v7a、x86，2.6.0版本之前提供的都是四个平台的，如果是2.6.0之前的版本升级到本版本的话需要稍微调整一下相关配置。
​		本版本离线观看的SDK和2.8.0版本之前比，只提供了两个cpu平台的so文件：armeabi-v7a、x86，2.8.0版本是三个平台的，升级时需要稍微调整一下相关配置。

3. SDK改动及新特性

- SDK 优化在线回放画笔数据加载逻辑

  本版本对在线回放的画笔数据加载做了优化，防止出现多线程并发导致的概率崩溃问题。

- SDK优化连麦功能，支持与主持人客户端进行音频 /视频 连麦

  本版本优化了连麦功能，目前SDK支持与PC主播端、PC主持人客户端的视频/音频连麦。

4. Demo改动及新特性

- 新Demo新增连麦功能

  本版本对新Demo进行了功能完善，新增连麦功能，放置在更多功能。

- 新Demo优化私聊功能

  本版本对新Demo的私聊模块进行了优化，私聊支持显示图片，优化私聊列表的展示逻辑。

5. 更新日志

   1. SDK优化在线回放画笔数据加载逻辑
   2. SDK优化连麦功能，支持与主持人客户端进行音频/视频 连麦
   3. 新Demo新增连麦功能
   4. 新Demo优化私聊功能


## Release3.1.1 
下面说明一下之前的CC直播SDK升级到3.1.1版本的时候，需要注意的事情
1. 升级需要替换的库

如果是2.6.0及以后的版本升级到3.1.1版本，只需要替换dwlivesdk.jar。

如果是2.6.0之前的版本，就需要做以下操作：

- 替换jar包

  dwlivesdk.jar （必须替换）
  libjingle_peerconnection.jar （必须替换）

- 替换so包

  libijkffmpeg.so （必须替换）
  libijkplayer.so （必须替换）
  libijksdl.so （必须替换）
  libjingle_peerconnection_so.so （必须替换）

- 新增so包

   libsupzip.so （使用SDK提供的解压CCR文件的方法需导入此so包）

2. 注意事项

   	本版本直播观看和在线观看SDK只提供了三个cpu平台的so文件：arm64-v8a、armeabi-v7a、x86，2.6.0版本之前提供的都是四个平台的，如果是2.6.0之前的版本升级到本版本的话需要稍微调整一下相关配置。
   			本版本离线观看的SDK和2.8.0版本之前比，只提供了两个cpu平台的so文件：armeabi-v7a、x86，2.8.0版本是三个平台的，升级时需要稍微调整一下相关配置。

3. SDK改动及新特性

- SDK 优化离线回放文档显示

  3.1.0版本在离线回放的文档展示方面存在问题，本版本对此问题进行了修复和优化。

- SDK 升级socket.io及okhttp版本

  以前的SDK使用的socket.io及okhttp的默认版本较低，本次将这两个库的版本进行了升级。
  目前的配置如下：

  ``` groovy
  implementation 'com.squareup.okhttp3:okhttp:3.10.0'
  implementation('io.socket:socket.io-client:0.8.3') {
      exclude group: 'org.json', module: 'json'
  }
  ```

4. Demo改动及新特性

- 新Demo新增公告功能

  本版本对新Demo进行了功能完善，新增公告功能，放置在更多功能。

- 新Demo迁移并优化私聊功能

  本版本对新Demo的私聊模块进行了迁移，放置在更多功能。

- 新Demo兼容Android 9.0

  因为Android 9.0在http方面有限制，需要在AndoridManifest.xml里面配置:

  ``` xml
  networkSecurityConfi：android:networkSecurityConfig="@xml/network_security_config"
  ```

  然后在res的xml文件夹中添加：network_security_config.xml

  ``` xml
  <?xml version="1.0" encoding="utf-8"?>
  <network-security-config>
      <base-config cleartextTrafficPermitted="true" />
  </network-security-config>
  ```

5. 更新日志

   1. SDK优化离线回放文档显示
   2. SDK 升级socket.io及okhttp版本
   3. 新Demo新增公告功能(dwlivemoduledemo)
   4. 新Demo迁移并优化私聊功能(dwlivemoduledemo)
   5. 新Demo兼容Android 9.0(dwlivemoduledemo)


## Release3.1.0 
   下面说明一下之前的CC直播SDK升级到3.1.0版本的时候，需要注意的事情
1. 升级需要替换的库

如果是2.6.0及以后的版本升级到3.1.0版本，只需要替换dwlivesdk.jar。

如果是2.6.0之前的版本，就需要做以下操作：

- 替换jar包

  dwlivesdk.jar （必须替换）
  libjingle_peerconnection.jar （必须替换）

- 替换so包

  libijkffmpeg.so （必须替换）
  libijkplayer.so （必须替换）
  libijksdl.so （必须替换）
  libjingle_peerconnection_so.so （必须替换）

- 新增so包

  libsupzip.so （使用SDK提供的解压CCR文件的方法需导入此so包）

2. 注意事项

   本版本直播观看和在线观看SDK只提供了三个cpu平台的so文件：arm64-v8a、armeabi-v7a、x86，2.6.0版本之前提供的都是四个平台的，如果是2.6.0之前的版本升级到本版本的话需要稍微调整一下相关配置。
   本版本离线观看的SDK和2.8.0版本之前比，只提供了两个cpu平台的so文件：armeabi-v7a、x86，2.8.0版本是三个平台的，升级时需要稍微调整一下相关配置。

3. SDK改动及新特性

- SDK新增聊天禁言及解禁回调

  收到禁言事件：DWLiveListener.onBanChat(int mode)

  mode为禁言类型： 1为个人禁言 ，2为全员禁言

  收到解禁事件：DWLiveListener.onUnBanChat(int mode) 

  mode为禁言类型： 1为个人禁言 ，2为全员禁言

- SDK新增聊天信息状态管理事件回调

  回调事件为：`DWLiveListener.onChatMessageStatus(String msgStatusJson)。`
  此回调配合聊天审核功能使用，使用时建议与服务端进行沟通后再使用。

- SDK 连麦支持主持人客户端

  3.1.0版本开始，直播的SDK支持与主持人客户端的连麦操作。

- SDK 加快回放文档展示速度

  3.1.0版本对回放的文档加载速度进行了优化，目前回放的文档展示最快可以与视频同步加载出来。

- SDK 去掉两个无用的回调事件

   3.1.0版本DWLiveListener去掉了onPrivateQuestionChatMessage和onPrivateAnswerChatMessage两个回调方法 。请在各端升级SDK的时候，也将这两个方法删除。

- SDK 增加直播分组功能

  3.1.0版本开始，可以在登录时对LoginInfo设置groupId参数，此参数为选填。后续聊天可以根据groupId进行聊天、问答数据的分组筛选展示（可参考Demo）

4. Demo改动及新特性

- 支持直播分组 (dwlivemoduledemo）

  3.1.0版本，我们在登录时可以设置groupId，然后在聊天的时候可以判断聊天数据的groupId参数，实现了聊天分组功能。

- 完善新Demo功能（dwlivemoduledemo）

  目前dwlivemoduledemo和dwlivedemo_new对比功能还是不全的。本版本添加了问卷、抽奖、广播、答题卡（投票）、签到功能。

- 聊天支持图片（dwlivemoduledemo）

  3.1.0版本的demo支持聊天图片的展示（包括动图）。
  目前可发图片的端为：推流客户端5.0版本以上、助教网页端。

- 提供文档大窗视频小窗的播放页Demo代码

  在dwlivemoduledemo项目中，我们额外提供默认文档大窗视频小窗的demo。代码位于：com.bokecc.dwlivemoduledemo.activity.extra目录下。
  注意：此播放页Demo代码只适配直播间模版中有'文档'区域的。

5. 更新日志

   1. SDK新增聊天禁言及解禁回调
   2. SDK新增聊天信息状态管理事件回调
   3. SDK 加快回放文档展示速度
   4. SDK 去掉两个无用的回调事件
   5. 连麦支持主持人客户端
   6. 增加直播分组功能
   7. 完善新Demo功能（dwlivemoduledemo）
   8. 聊天支持图片（dwlivemoduledemo）


## Release 3.0.1 
   下面说明一下之前的CC直播SDK升级到3.0.1版本的时候，需要注意的事情
1. 升级需要替换的库

如果是2.6.0及以后的版本升级到3.0.1版本，只需要替换dwlivesdk.jar。

如果是2.6.0之前的版本，就需要做以下操作：

- 替换jar包

  dwlivesdk.jar （必须替换）
  libjingle_peerconnection.jar （必须替换）

- 替换so包

  libijkffmpeg.so （必须替换）
  libijkplayer.so （必须替换）
  libijksdl.so （必须替换）
  libjingle_peerconnection_so.so （必须替换）

- 新增so包

   libsupzip.so （使用SDK提供的解压CCR文件的方法需导入此so包）

2. 注意事项

   	本版本直播观看和在线观看SDK只提供了三个cpu平台的so文件：arm64-v8a、armeabi-v7a、x86，2.6.0版本之前提供的都是四个平台的，如果是2.6.0之前的版本升级到本版本的话需要稍微调整一下相关配置。
   			本版本离线观看的SDK和2.8.0版本之前比，只提供了两个cpu平台的so文件：armeabi-v7a、x86，2.8.0版本是三个平台的，升级时需要稍微调整一下相关配置。

3. SDK改动及新特性

- SDK回调发布问卷事件时增加强制问卷字段

  收到PC推流端发布的问卷时，DWLiveListener.onQuestionnairePublish回调里QuestionnaireInfo增加forcibly自段，用于标识强制问卷。

- 修复Bug，提高SDK的稳定性

  本版本梳理了SDK的流程，修复了一些BUG，提供的接口和方法和3.0.0版本对比无变化。

4. Demo改动及新特性

- 优化新版本Demo相关逻辑 (dwlivemoduledemo）

  在之前的3.0.0版本提供了一个新版本的Demo，本版本对此Demo的部分逻辑进行了优化。

5. 更新日志

   1. SDK回调发布问卷事件时增加强制问卷字段
   2. 修复Bug，提高SDK的稳定性
   3. 优化新版本Demo相关逻辑


## Release3.0.0
2018年即将结束，我们的SDK的版本号也由2系列升级到3系列了。下面我们来通过几个简单的问题来介绍一下具体改动：

1. 问：那么本版本最大的改动是什么呢？
   答：新版Demo隆重出炉。
2. 问：新版本Demo和老版本Demo区别在哪？
   答：新版本Demo提供了模块化的Demo，集成SDK的功能更快更方便。
3. 问：运行了一下，看到新版Demo和老版Demo布局模式不同，能修改为一样的嘛？
   答：完全可以，想将文档组件创建后，放到ViewPager即可
4. 问：我看新Demo的功能好少啊，未来会和老Demo那样提供那么多功能嘛？
   答：目前新Demo是第一版，还会不断的补充和完善，功能会向老版本看齐，老版Demo会继续维护和完善

1. 升级需要替换的库

如果是2.6.0及以后的版本升级到3.0.0版本，只需要替换dwlivesdk.jar。

如果是2.6.0之前的版本，就需要做以下操作：

- 替换jar包

  dwlivesdk.jar （必须替换）
  libjingle_peerconnection.jar （必须替换）

- 替换so包

  libijkffmpeg.so （必须替换）
  libijkplayer.so （必须替换）
  libijksdl.so （必须替换）
  libjingle_peerconnection_so.so （必须替换）

- 新增so包

   libsupzip.so （使用SDK提供的解压CCR文件的方法需导入此so包）

2. 注意事项

   本版本直播观看和在线观看SDK只提供了三个cpu平台的so文件：arm64-v8a、armeabi-v7a、x86，2.6.0版本之前提供的都是四个平台的，如果是2.6.0之前的版本升级到本版本的话需要稍微调整一下相关配置。
   本版本离线观看的SDK和2.8.0版本之前比，只提供了两个cpu平台的so文件：armeabi-v7a、x86，2.8.0版本是三个平台的，升级时需要稍微调整一下相关配置。

3. 新版本SDK改动及特性

- DWLive 和 DWLiveReplay 删除setSecure方法

  在上个版本我们将DWLive.setSecure(boolean isSecure)和DWLiveReplay.setSecure(boolean isSecure)进行了弃用，本版本开始，我们删除了此方法，SDK里面的请求都会使用https进行。

- 回放数据获取优化

  本版本优化了回放数据的获取方式，大量画笔的回放文档展示出来的时间加快。

- 文档为主/视频为主功能支持

  新版本Demo支持文档和视频区域的切换（需要PC端版本支持）
  SDK也支持接收PC推流端的文档为主/视频为主的切换事件的回调，回调方法为：onSwitchVideoDoc。

- 回放提供推荐播放类DWReplayPlayer

  在之前的回放Demo中，我们使用的是IjkMediaPlayer，本版本开始，推荐使用DWReplayPlayer。

4. 新版本Demo改动及特性

- 全新Demo并提供模块化module

  本版本开始我们提供了一个新的Demo，此demo使用的模块化module集成的。参照新版本Demo使用livemodule接入SDK的速度会比参照老版本的Demo实现起来快。因为目前我们发布的版本的demo的目录和之前相比较为复杂了，特提供 "CC云直播Demo结构图"。

5. 更新日志

   1. 新版Demo发布，提供模块化module
   2. SDK支持文档为主/视频为主的事件回调
   3. 回放提供推荐播放类DWReplayPlayer
   4. DWLive 和 DWLiveReplay 删除setSecure方法

